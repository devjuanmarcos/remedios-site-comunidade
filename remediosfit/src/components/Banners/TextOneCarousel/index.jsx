import OneFadeCarousel from "components/Carousel/OneFade";
import styles from "./styles.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";
import ButtonAnimated from "components/Buttons/ButtonAnimated";

export default function TextOneCarouselBanner({ background, id, type }) {
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
          <div className={styles.content}>
            <div className={styles.texts}>
              <div className={styles.title}>
                <h1 style={{ color: filteredId.primaryColor }}>
                  {banner.title}
                </h1>
                <h2>{banner.subtitle}</h2>
              </div>
              <p className={styles.paragraph}>{banner.paragraph}</p>
              <div className={styles.button}>
                <ButtonAnimated
                  children={"Eu quero emagrecer"}
                  primaryColor={filteredId.primaryColor}
                  terciaryColor={filteredId.terciaryColor}
                />
              </div>
            </div>
            <div className={styles.carousel}>
              <OneFadeCarousel
                id={id}
                type={type}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
