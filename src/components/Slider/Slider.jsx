import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.prev}>{"<"}</div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        className={styles.swiperContainer}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <div className={styles.slideImg}>
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <img src={slide.img} alt={slide.alt} />
                </a>
              </div>
              <div className={styles.slideDescription}>
                {slide.description.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.next}>{">"}</div>
    </div>
  );
};

export default Slider;
