import styles from "./BannerMainDetox.module.css";
import ButtonMain from "components/Buttons/ButtonMain";
import React from "react";

import biofitData from "assets/json/biofitData.json";

export default function BannerMainDetox({ background, id, type }) {
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
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: "100%",
                  width: "100%",
                }
              : null
          }
          className={styles.main}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <h1 style={{ color: "var(--branco)" }}>{banner.title}</h1>
              <h2 style={{ color: "var(--branco)" }}>{banner.subtitle}</h2>
            </div>
            <div className={styles.imageBox}>
              <img
                style={{
                  width: "200px",
                }}
                src={banner.imageRemedy}
                alt=''
              />
              <p className={styles.paragraph}>{banner.paragraph}</p>
              <ButtonMain
                color={filteredId.primaryColor}
                children={banner.buttonText}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
