import React from "react";
import styles from "./ImageWithTexts.module.css";
import { backgrounds } from "polished";
import ButtonMain from "components/Buttons/ButtonMain";

export default function ImageWithTextsBanner({
  color,
  dataTexts,
  image,
  titleColor,
  title,
  subTitle,
  paragraph,
  backColor,
  downButton,
  imgDownButton,
  downImage,
}) {
  return (
    <div
      className={styles.main}
      style={
        backColor
          ? {
              backgroundColor: "rgba(70, 43, 92, 0.30)",
              width: "100%",
            }
          : {}
      }
    >
      <div className={styles.imageWithTextsBanner}>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src={image}
            alt='none'
          />
          <div
            style={
              downImage
                ? {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }
                : { display: "none" }
            }
          >
            <h2 className={styles.name}>Dra. Thamara Sobrinho</h2>
            <h3 className={styles.profession}>Farmacêutica Esteta</h3>
          </div>
        </div>
        <div className={styles.texts}>
          <div>
            <h1 style={{ color: titleColor }}>{title}</h1>
            <h2 style={{ color: { titleColor } }}>{subTitle}</h2>
          </div>
          <p>{paragraph}</p>
          {dataTexts
            ? dataTexts.map((text, id) => (
                <div key={id}>
                  <p>
                    <span style={{ color: color, text }}>
                      <strong>{text.title}</strong>
                    </span>
                    {text.paragraph}
                  </p>
                </div>
              ))
            : undefined}

          <div className={styles.buttonImage}>
            <div style={{ width: "60%" }}>
              <ButtonMain color={"var(--maeslim-tom2)"} />
            </div>
            <img
              style={downButton ? { width: "52%" } : { display: "none" }}
              src={imgDownButton}
              alt='none'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
