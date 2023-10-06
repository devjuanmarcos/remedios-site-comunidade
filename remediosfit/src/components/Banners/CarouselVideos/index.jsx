import styles from "./CarouselVideos.module.css";
import React from "react";
import DoubleCarousel from "components/Carousel/Double";

export default function CarouselVideosBanner({
  background,
  subtitle,
  primaryColor,
}) {
  return (
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
            color: primaryColor,
            textShadow: `0.5px 0 4px ${primaryColor}`,
          }}
        >
          Resultados únicos
        </h1>
        <h2>do {subtitle}</h2>
      </div>
      <div className={styles.content}>
        <DoubleCarousel />
      </div>
    </section>
  );
}
