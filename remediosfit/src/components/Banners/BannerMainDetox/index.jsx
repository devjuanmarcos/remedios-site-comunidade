import styles from "./BannerMainDetox.module.css";
import ButtonMain from "components/Buttons/ButtonMain";
import React from "react";

export default function BannerMainDetox({
  fundo,
  remedio,
  widthImage,
  title,
  subTitle,
  paragraph,
  titleColor,
  buttonChildren,
  buttonColor,
}) {
  return (
    <section
      className={styles.main}
      style={{ backgroundImage: `url("${fundo}")`, backgroundSize: "100%" }}
    >
      <div className={styles.texts}>
        <div>
          <h1 style={{ color: titleColor }}>{title}</h1>
          <h2 style={{ color: { titleColor } }}>{subTitle}</h2>
        </div>
        <p className={styles.paragraph}>{paragraph}</p>
        <ButtonMain
          children={buttonChildren}
          color={buttonColor}
        />
      </div>

      <div className={styles.boxImage}>
        <img
          style={{ width: widthImage }}
          className={styles.image}
          src={remedio}
          alt='none'
        />
      </div>
    </section>
  );
}
