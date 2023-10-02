import OneFadeCarousel from "components/Carousel/OneFade";
import styles from "./styles.module.css";
import React from "react";
import ButtonMain from "components/Buttons/ButtonMain";

export default function TextOneCarouselBanner({ background, primaryColor }) {
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
      <div className={styles.content}>
        <div className={styles.texts}>
          <div className={styles.title}>
            <h1 style={{ color: primaryColor }}>O queridinho</h1>
            <h2>Das mulheres</h2>
          </div>
          <p className={styles.paragraph}>
            São mais de 30 mil pessoas tomando o Lift Detox Black diariamente,
            só falta você!
          </p>
          <div className={styles.button}>
            <ButtonMain color={primaryColor} />
          </div>
        </div>
        <div className={styles.carousel}>
          <OneFadeCarousel />
        </div>
      </div>
    </section>
  );
}
