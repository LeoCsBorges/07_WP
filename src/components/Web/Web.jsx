import styles from "./Web.module.css";
import Slider from "../Slider";

export const Web = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Desenvolvimento <br /> Web
          </h2>

          <Slider />

          {/* CTA */}
          <a href="#" className={styles.link}>
            Clique e acesse
          </a>
        </div>
      </div>
    </section>
  );
};

export default Web;
