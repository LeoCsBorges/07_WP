import styles from "./Slider.module.css";
import MinSaude from "../../assets/images/min-saude.jpg";
import GDF from "../../assets/images/gdf.jpg";
import CNC from "../../assets/images/cnc-euvalorizo.jpg";
import Inovettor from "../../assets/images/inovettor.jpg";
import { useState } from "react";

export const Slider = () => {
  const slides = [
    {
      id: 1,
      img: MinSaude,
      alt: "Campanha do Ministério da Saúde",
      link: "https://digitalwp.com.br/portfolio/min-saude/",
      description: [
        "Landing Page responsiva desenvolvida para a Campanha Doação de Órgãos do Ministério da Saúde.",
        "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
      ],
    },
    {
      id: 2,
      img: GDF,
      alt: "Campanha do Governo do Distrito Federal",
      link: "https://digitalwp.com.br/portfolio/gdf/",
      description: [
        "Landing Page responsiva desenvolvida para a campanha Habitação no Rumo Certo do GDF.",
        "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
      ],
    },
    {
      id: 3,
      img: CNC,
      alt: "Campanha #euValorizo do CNC",
      link: "https://digitalwp.com.br/portfolio/cnc/",
      description: [
        "Campanha #euValorizo - CNC Sesc Senac",
        "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
      ],
    },
    {
      id: 4,
      img: Inovettor,
      alt: "Inovettor",
      link: "https://inovettor.com/",
      description: [
        "Inovettor - Construção Civil",
        "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const { img, alt, link, description } = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className={styles.sliderWrapper}>
        {/* prev */}
        <div className={styles.prev} onClick={handlePrev}>
          {"<"}
        </div>

        {/* slide content */}
        <div key={currentSlide} className={`${styles.slide} ${styles.slideIn}`}>
          <div className={styles.slideImg}>
            <a href={link} target="_blank" rel="noopener">
              <img src={img} alt={alt} />
            </a>
          </div>
          <div className={styles.slideDescription}>
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* next  */}
        <div className={styles.next} onClick={handleNext}>
          {">"}
        </div>
      </div>
    </>
  );
};

export default Slider;
