import styles from "./styles.module.css";
import React from "react";
import Slider from "react-slick";

import biofitData from "assets/json/biofitData.json";

export default function OneFadeCarousel({ id, type }) {
  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }

  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

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
    <div className={styles.width}>
      <Slider {...settings}>
        {filteredBanner.map((banner) =>
          banner.images.map((image, id) => (
            <img
              className={styles.carousel}
              src={image}
              alt='none'
              key={id}
            />
          ))
        )}
      </Slider>
    </div>
  );
}
