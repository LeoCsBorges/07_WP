import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          {/* card top left */}
          <div className={`${styles.card} ${styles.card01}`}>
            <div>
              <p>Mais que um produtora digital</p>
              <p>
                somos parceiros de negócios com entregas ágeis e de qualidade.
              </p>
            </div>
          </div>
          {/* card top right */}
          <div className={`${styles.card} ${styles.card02}`}>
            <div>
              <h2 className={styles.title}>Quem somos</h2>
              <p className={styles.description}>
                A WP é uma produtora digital ágil, criativa e inovadora.
                Nascementos para melhorar a interatividade no mundo digital
                através da constante melhoria de experiência dos usuários.
              </p>
            </div>
          </div>
          {/* card bottom left */}
          <div className={`${styles.card} ${styles.card03}`}>
            <div>
              <h2 className={styles.title}>Serviços</h2>
              <p className={styles.description}>
                Para nós da WP, é extremamente importante estarmos em sintonia
                com as necessidades de cada cliente. Nossa intenção é
                transformar cada trabalho em uma experiência, mostrando o nosso
                dinamismo, excelência na entrega, entregando soluções e
                cumprindo os prazos de acordo com as demandas solicitadas.
                Caminhando juntos, podemos entregar e realizar grandes ideias.
              </p>
            </div>
          </div>
          {/* card bottom right */}
          <div className={`${styles.card} ${styles.card04}`}>
            <div className={styles.card04__options}>
              <ul className={styles.card04__options__list}>
                <li>Experiência do usuário</li>
                <li>Desenvolvimento web</li>
                <li>Desenvolvimento mobile</li>
                <li>Landing Page</li>
                <li>Hotsite</li>
                <li>Banners Rich Media HTML5</li>
                <li>Banners GIFs</li>
                <li>DOOHs</li>
                <li>Motion Design</li>
              </ul>
            </div>
            <div className={styles.card04__portifolio}>
              <Link to="/portifolio" className={styles.card__link}>
                VER PORTIFÓLIO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
