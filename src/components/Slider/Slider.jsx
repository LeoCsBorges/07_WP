import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Slider.module.css";

import MinSaude from "../../assets/images/min-saude.jpg";
import GDF from "../../assets/images/gdf.jpg";
import CNC from "../../assets/images/cnc-euvalorizo.jpg";
import Inovettor from "../../assets/images/inovettor.jpg";

const slides = [
  {
    img: MinSaude,
    alt: "Campanha do Ministério da Saúde",
    link: "https://digitalwp.com.br/portfolio/min-saude/",
    description: [
      "Landing Page responsiva desenvolvida para a Campanha Doação de Órgãos do Ministério da Saúde.",
      "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
    ],
  },
  {
    img: GDF,
    alt: "Campanha do Governo do Distrito Federal",
    link: "https://digitalwp.com.br/portfolio/gdf/",
    description: [
      "Landing Page responsiva desenvolvida para a campanha Habitação no Rumo Certo do GDF.",
      "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
    ],
  },
  {
    img: CNC,
    alt: "Campanha #euValorizo do CNC",
    link: "https://digitalwp.com.br/portfolio/cnc/",
    description: [
      "Campanha #euValorizo - CNC Sesc Senac",
      "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
    ],
  },
  {
    img: Inovettor,
    alt: "Inovettor",
    link: "https://inovettor.com/",
    description: [
      "Inovettor - Construção Civil",
      "Tecnologias utilizadas: HTML5, CSS3 e Javascript.",
    ],
  },
];

export const Slider = () => {
  const [[slideIndex, direction], setSlideState] = useState([0, 0]);
  const { img, alt, link, description } = slides[slideIndex];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -150 : 150, opacity: 0 }),
  };

  const paginate = (newDirection) => {
    setSlideState(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + slides.length) % slides.length;
      return [newIndex, newDirection];
    });
  };

  return (
    <>
      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideState([index, index > slideIndex ? 1 : -1])}
            className={`${styles.dot} ${
              index === slideIndex ? styles.active : ""
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.prev} onClick={() => paginate(-1)}>
          {"<"}
        </div>

        <div className={styles.sliderContent}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${slideIndex}-${direction}`}
              className={styles.slide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              // drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) paginate(1);
                else if (info.offset.x > 50) paginate(-1);
              }}
            >
              <div className={styles.slideImg}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt={alt} />
                </a>
              </div>
              <div className={styles.slideDescription}>
                {description.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.next} onClick={() => paginate(1)}>
          {">"}
        </div>
      </div>
    </>
  );
};

export default Slider;
