import styles from "./ThreeItensText.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";

export default function ThreeItensTextBanner({ background, id, type }) {
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
          className={styles.threeItensTextBanner}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <h2 style={{ color: "var(--branco)" }}>{banner.subtitle}</h2>
              <h1 style={{ color: filteredId.primaryColor }}>{banner.title}</h1>
            </div>
            <div className={styles.itemBox}>
              {banner.itens.map((item, id) => (
                <div
                  className={styles.item}
                  key={id}
                >
                  <img
                    className={styles.svg}
                    src={item.image}
                    alt='none'
                  />
                  <h3>{item.title}</h3>
                  <p style={{ marginTop: "-12px" }}>{item.paragraph}</p>
                </div>
              ))}
            </div>
            {banner.paragraph ? (
              <p className={styles.paragraph}>{banner.paragraph}</p>
            ) : undefined}
          </div>
        </section>
      ))}
    </>
  );
}
