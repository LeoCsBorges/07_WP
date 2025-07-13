import styles from "./Slider.module.css";
import SliderMINSAUDE from "../../assets/images/slider-minsaude.jpg";

export const Slider = () => {
  return (
    <>
      <div className={styles.sliderWrapper}>
        <div className={styles.leftArrow}>{"<"}</div>
        <div className={styles.slider}>
          <div className={styles.sliderImg}>
            <a
              href="https://digitalwp.com.br/portfolio/min-saude/"
              target="_blank"
              rel="noopener"
            >
              <img src={SliderMINSAUDE} alt="Campanha do Ministério da Saúde" />
            </a>
          </div>
          <div className={styles.sliderDescription}>
            <p>
              Landing Page responsiva desenvolvida para a Campanha Doação de
              Órgãos do Ministério da Saúde.
            </p>
            <p>Tecnologias utilizadas: HTML5, CSS3 e Javascript.</p>
          </div>
        </div>
        <div className={styles.rightArrow}>{">"}</div>
      </div>
    </>
  );
};

export default Slider;
