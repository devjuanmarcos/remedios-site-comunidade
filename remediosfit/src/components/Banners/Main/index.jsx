import styles from "./styles.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";
import ButtonAnimated from "components/Buttons/ButtonAnimated";

export default function MainBanner({ background, id, type }) {
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
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: "cover",
                  width: "100%",
                }
              : null
          }
          className={styles.main}
        >
          <div
            className={styles.content}
            style={banner.buttonText ? undefined : { justifyContent: "center" }}
          >
            <div className={styles.title}>
              <h1>{banner.title}</h1>
              <h2>{banner.subtitle}</h2>
              <p className={styles.paragraph}>{banner.paragraph}</p>
            </div>
            <div className={styles.imageBox}>
              <img
                className={styles.image}
                src={banner.imageRemedy}
                alt=''
              />
            </div>
          </div>
          {banner.buttonText ? (
            <ButtonAnimated
              children={banner.buttonText}
              primaryColor={filteredId.primaryColor}
              terciaryColor={filteredId.terciaryColor}
            />
          ) : null}
        </section>
      ))}
    </>
  );
}
