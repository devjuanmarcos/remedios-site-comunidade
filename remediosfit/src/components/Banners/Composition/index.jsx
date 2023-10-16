import styles from "./styles.module.css";
import React from "react";

import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";

import biofitData from "assets/json/biofitData.json";

export default function CompositionBanner({ background, id, type }) {
  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }
  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  return (
    <>
      {filteredBanner.map((banner, id) => (
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
          <div className={styles.title}>
            <h2>Conheça a</h2>
            <h1
              style={{
                color: filteredId.primaryColor,
                textShadow: `0.5px 0 4px ${filteredId.primaryColor}`,
              }}
            >
              {banner.title}
            </h1>
            <h2>{banner.subtitle}</h2>
          </div>
          <div className={styles.content}>
            <p className={styles.paragraph}>{banner.paragraph}</p>
            <div className={styles.imageCard}>
              <img
                className={styles.image}
                src={filteredId.image3un}
                alt='none'
              />
            </div>
            <ul className={styles.list}>
              {banner.itens.map((item) => (
                <li
                  className={styles.listItem}
                  key={id}
                >
                  <SwipeRightAltIcon
                    style={{ color: filteredId.primaryColor }}
                  />
                  <p style={{ textAlign: "left" }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
