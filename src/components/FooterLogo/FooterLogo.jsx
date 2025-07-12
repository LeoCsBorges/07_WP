import { Link, useLocation } from "react-router-dom";

export const FooterLogo = () => {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === "/") {
      // Se já estiver na home, rola para o topo manualmente
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault(); // evita navegação redundante
    }
    // Senão, deixa navegar normalmente
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      style={{ cursor: "pointer", display: "inline-block" }}
    >
      <div style={{ pointerEvents: "none" }}>
        <iframe
          src="https://digitalwp.com.br/banners/logo/"
          width={300}
          height={250}
        />
      </div>
    </Link>
  );
};

export default FooterLogo;
