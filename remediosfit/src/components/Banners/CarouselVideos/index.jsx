import styles from "./CarouselVideos.module.css";
import React from "react";
import DoubleCarousel from "components/Carousel/Double";

import biofitData from "assets/json/biofitData.json";

export default function CarouselVideosBanner({ background, type, id }) {
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
          <div className={styles.title}>
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
            <DoubleCarousel
              type={type}
              id={id}
            />
          </div>
        </section>
      ))}
    </>
  );
}
