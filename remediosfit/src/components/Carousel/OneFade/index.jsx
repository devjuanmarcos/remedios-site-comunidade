import styles from "./styles.module.css";
import React from "react";
import Slider from "react-slick";

import image from "assets/images/antesDepois.svg";

export default function OneFadeCarousel() {
  const settings = {
    dots: true,
    arrows: false,

    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          src={image}
          alt='none'
        />
        <img
          className={styles.carousel}
          src={image}
          alt='none'
        />
      </Slider>
    </div>
  );
}
