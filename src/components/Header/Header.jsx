import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="flexsp">
          <Link to="/">
            <img
              className={styles.header__img}
              src={logo}
              alt="Logo da Produtora Digital"
            />
          </Link>
          <nav>
            <ul className={styles.header__nav__list}>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
