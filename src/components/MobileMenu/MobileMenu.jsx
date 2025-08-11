import * as Dialog from "@radix-ui/react-dialog";
import styles from "./MobileMenu.module.css";

import {
  FaHome,
  FaTools,
  FaImage,
  FaGlobe,
  FaPlay,
  FaEnvelope,
} from "react-icons/fa";

import { useState } from "react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (id) => {
    setOpen(false);
    const target = document.getElementById(id);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.trigger}>☰</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <Dialog.Close className={styles.close}>&times;</Dialog.Close>
          <nav className={styles.menuNav}>
            <button onClick={() => handleLinkClick("home")}>
              <FaHome />
              Principal
            </button>
            <button onClick={() => handleLinkClick("servicos")}>
              <FaTools />
              Serviços
            </button>
            <button onClick={() => handleLinkClick("banners")}>
              <FaImage />
              Banners
            </button>
            <button onClick={() => handleLinkClick("web")}>
              <FaGlobe />
              Web
            </button>
            <button onClick={() => handleLinkClick("motion")}>
              <FaPlay />
              Motion
            </button>
            <button onClick={() => handleLinkClick("footer")}>
              <FaEnvelope />
              Contato
            </button>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;
