import ButtonMain from "components/Buttons/ButtonMain";
import styles from "./TextWithCarousel.module.css";
import React from "react";

export default function TextWithCarouselBanner({
  title,
  titleColor,
  paragraph,
  subTitle,
  buttonChildren,
  buttonColor,
}) {
  return (
    <div className={styles.textWithCarouselBanner}>
      <div className={styles.texts}>
        <div>
          <h1 style={{ color: titleColor }}>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        <p className={styles.paragraph}>{paragraph}</p>
        <ButtonMain
          children={buttonChildren}
          color={buttonColor}
        />
      </div>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          src='none'
          alt='none'
        />
      </div>
    </div>
  );
}
