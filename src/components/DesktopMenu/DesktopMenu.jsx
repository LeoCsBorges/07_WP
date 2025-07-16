import styles from "./DesktopMenu.module.css";
import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link to="/">Principal</Link>
      </li>
      <li>
        <Link to="/servicos">Serviços</Link>
      </li>
      <li>
        <Link to="/banners">Banners</Link>
      </li>
      <li>
        <Link to="/web">Web</Link>
      </li>
      <li>
        <Link to="/motion">Motion</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
