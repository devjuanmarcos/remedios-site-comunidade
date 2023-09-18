import React from "react";
import styles from "./ImageWithTexts.module.css";

export default function ImageWithTextsBanner({
  color,
  dataTexts,
  image,
  titleColor,
  title,
  subTitle,
}) {
  return (
    <div className={styles.imageWithTextsBanner}>
      <img
        className={styles.image}
        src={image}
        alt='none'
      />
      <div className={styles.texts}>
        <div>
          <h1 style={{ color: titleColor }}>{title}</h1>
          <h2 style={{ color: { titleColor } }}>{subTitle}</h2>
        </div>
        {dataTexts.map((text, id) => (
          <div key={id}>
            <p>
              <span style={{ color: color, text }}>
                <strong>{text.title}</strong>
              </span>
              {text.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
