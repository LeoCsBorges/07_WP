import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContainer}>
          {/* logo animada */}
          <iframe
            src="https://digitalwp.com.br/banners/logo/"
            frameborder="0"
            width={300}
            height={250}
          ></iframe>

          {/* endereço */}
          <div>
            <h3 className={styles.subtitle}>Endereço:</h3>
            <address>
              SEPN Quadra 504, Bloco A, ED. Ana Carolina <br />
              3° Andar, Sala 301, Parte 166, Asa Norte. <br />
              Cep: 70730-521. Brasília - DF
            </address>
          </div>

          {/* contato */}
          <div>
            <h3 className={styles.subtitle}>Contato:</h3>
            <p>(61) 3221-1153 </p>
            <p>contato@digitalwp.com.br</p>
          </div>
        </div>
        <div className={styles.subfooter}>
          <p>WP PRODUTORA DIGITAL © TODOS OS DIREITOS RESERVADOS 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
