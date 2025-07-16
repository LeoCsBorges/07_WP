import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";

// Importando os ícones que vamos usar
import {
  FaHome,
  FaTools,
  FaImage,
  FaGlobe,
  FaPlay,
  FaEnvelope,
} from "react-icons/fa";

export const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.trigger}>☰</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Close className={styles.close}>&times;</Dialog.Close>
          <nav className={styles.menuNav}>
            <Link to="/">
              <FaHome />
              Principal
            </Link>
            <Link to="/servicos">
              <FaTools />
              Serviços
            </Link>
            <Link to="/banners">
              <FaImage />
              Banners
            </Link>
            <Link to="/web">
              <FaGlobe />
              Web
            </Link>
            <Link to="/motion">
              <FaPlay />
              Motion
            </Link>
            <Link to="/contato">
              <FaEnvelope />
              Contato
            </Link>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;
