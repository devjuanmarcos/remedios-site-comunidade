import styles from "./styles.module.css";
import React from "react";
import Slider from "react-slick";

import image from "assets/images/TESTECARROSEL.svg";
import imag2 from "assets/images/MaeSlim.svg";

export default function OneFadeCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ width: "500px" }}>
      <Slider {...settings}>
        <img
          className={styles.carousel}
          src={image}
          alt='none'
        />
        <img
          className={styles.carousel}
          src={imag2}
          alt='none'
        />
        <img
          className={styles.carousel}
          src={image}
          alt='none'
        />
        <img
          className={styles.carousel}
          src={imag2}
          alt='none'
        />
      </Slider>
    </div>
  );
}
