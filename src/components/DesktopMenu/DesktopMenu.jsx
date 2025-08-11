import styles from "./DesktopMenu.module.css";

export const DesktopMenu = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="/">Principal</a>
      </li>
      <li>
        <a href="#servicos">Serviços</a>
      </li>
      <li>
        <a href="#banners">Banners</a>
      </li>
      <li>
        <a href="#web">Web</a>
      </li>
      <li>
        <a href="#motion">Motion</a>
      </li>
      <li>
        <a href="#footer">Contato</a>
      </li>
    </ul>
  );
};

export default DesktopMenu;
