import styles from "./BusinessOpinion.module.css";
import React from "react";

export default function BusinessOpinionBanner({
  title,
  color,
  titleColored,
  titleContinue,
  blur,
  background,
  image1,
  paragraph1,
  image2,
  paragraph2,
  image3,
  paragraph3,
}) {
  return (
    <section
      className={styles.main}
      style={
        blur
          ? { background: background, backgroundSize: "100%", width: "100%" }
          : {}
      }
    >
      <div className={styles.businessOpinionBanner}>
        <h1 style={{ textAlign: "center", color: "var(--branco)" }}>
          {title}
          <span style={{ color: color }}>{titleColored}</span>
          {titleContinue}
        </h1>
        <div className={styles.contentBox}>
          <div className={styles.iten}>
            <img
              src={image1}
              alt='none'
            />
            <p className={styles.paragraph}>{paragraph1}</p>
          </div>
          <div className={styles.iten}>
            <img
              src={image2}
              alt='none'
            />
            <p className={styles.paragraph}>{paragraph2}</p>
          </div>
          <div className={styles.iten}>
            <img
              src={image3}
              alt='none'
            />
            <p className={styles.paragraph}>{paragraph3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
