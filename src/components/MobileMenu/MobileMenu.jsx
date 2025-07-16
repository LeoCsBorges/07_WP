import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";

export const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.trigger}>☰</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Close className={styles.close}>&times;</Dialog.Close>
          <nav className={styles.menuNav}>
            <Link to="/">Principal</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/banners">Banners</Link>
            <Link to="/web">Web</Link>
            <Link to="/motion">Motion</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;
