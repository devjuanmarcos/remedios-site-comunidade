import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../Double/slick.css"; // Importe os estilos do carrossel
// import "slick-carousel/slick/slick-theme.css"; // Importe o tema do carrossel (opcional)
import styles from "./Double.module.css"; // Importe seus estilos

import biofitData from "assets/json/biofitData.json";

const Carrossel = ({ id, type }) => {
  // eslint-disable-next-line
  const [slidesToShow, setSlidesToShow] = useState(5); // Valor padrão para slidesToShow
  const larguraDoSlideDesejada = 303; // Largura do slide desejada em pixels

  useEffect(() => {
    // Função para calcular slidesToShow com base na largura da janela
    const calcularSlidesToShow = () => {
      const windowWidth = window.innerWidth;
      const newSlidesToShow = Math.floor(windowWidth / larguraDoSlideDesejada);
      setSlidesToShow(newSlidesToShow);
    };

    // Calcula slidesToShow inicialmente e adiciona um ouvinte de redimensionamento
    calcularSlidesToShow();
    window.addEventListener("resize", calcularSlidesToShow);

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", calcularSlidesToShow);
    };
  }, []); // O segundo argumento vazio garante que o efeito só seja executado uma vez no montante

  const settings2 = {
    centerMode: true,
    dots: true, // ajeitar depois para o padrão do figma
    centerPadding: "60px",
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }

  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  return (
    <>
      {filteredBanner.map((banner) => (
        <div className={styles.carouselWrapper}>
          <Slider {...settings2}>
            {banner.images.map((image, id) => (
              <img
                src={image}
                alt='none'
                key={id}
              />
            ))}
          </Slider>
        </div>
      ))}
    </>
  );
};

export default Carrossel;
