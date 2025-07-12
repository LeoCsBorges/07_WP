import styles from "./Clients.module.css";
import LogoGDF from "../../assets/images/logo-gdf.svg";
import LogoCLDF from "../../assets/images/logo-cldf.svg";
import LogoCAIXA from "../../assets/images/logo-caixa.svg";
import LogoTERRACAP from "../../assets/images/logo-terracap.svg";
import LogoCONFEA from "../../assets/images/logo-confea.png";
import LogoTURISMO from "../../assets/images/logo-minturismo.png";

export const Clients = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Clientes</h2>
          <div className={styles.logos}>
            <img
              src={LogoCAIXA}
              alt="Caixa Econômica Federal"
              className={styles.clientLogo}
            />
            <img
              src={LogoCLDF}
              alt="Câmara Legislativa do Distrito Federal"
              className={styles.clientLogo}
            />
            <img
              src={LogoTURISMO}
              alt="Ministério do Turismo"
              className={styles.clientLogo}
            />
            <img
              src={LogoTERRACAP}
              alt="Terracap - Agência de Desenvolvimento do Distrito Federal"
              className={styles.clientLogo}
            />
            <img
              src={LogoGDF}
              alt="Governo do Distrito Federal"
              className={styles.clientLogo}
            />
            <img
              src={LogoTURISMO}
              alt="Ministério do Turismo"
              className={styles.clientLogo}
            />
            <img src={LogoCONFEA} alt="CONFEA" className={styles.clientLogo} />
            <img
              src={LogoCLDF}
              alt="Câmara Legislativa do Distrito Federal"
              className={styles.clientLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
