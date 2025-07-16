import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import { useIsMobile } from "../../hooks/useIsMobile";
import { Link } from "react-router-dom";

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <img
              className={styles.header__img}
              src={logo}
              alt="Logo da Produtora Digital"
            />
          </Link>
          <nav>{isMobile ? <MobileMenu /> : <DesktopMenu />}</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
