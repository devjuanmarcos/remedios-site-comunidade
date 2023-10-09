import React from "react";
import styles from "./ImageWithTexts.module.css";
import ButtonMain from "components/Buttons/ButtonMain";

import biofitData from "assets/json/biofitData.json";

export default function ImageWithTextsBanner({ background, type, id }) {
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
        <section
          style={
            background
              ? {
                  backgroundColor: background,
                  width: "100%",
                }
              : null
          }
          className={styles.main}
        >
          <div
            className={styles.content}
            style={{ flexDirection: banner.direction }}
          >
            <div className={styles.imageBox}>
              <img
                className={styles.image}
                src={banner.image}
                alt=''
              />
            </div>
            <div className={styles.textCard}>
              <h1 style={{ color: filteredId.primaryColor }}>{banner.title}</h1>
              <h2>{banner.subtitle}</h2>
              <p style={{ marginTop: "20px" }}>{banner.paragraph}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
