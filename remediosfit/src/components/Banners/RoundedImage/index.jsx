import React from "react";
import styles from "./RoundedImage.module.css";
import image from "assets/images/imageGirl.jpeg";

export default function RoundedImageBanner() {
  return (
    <section className={styles.roundedImageBanner}>
      <div className={styles.content}>
        <div style={{ width: "40%" }}>
          <div className={styles.image}>
            <div className={styles.border}>
              <img
                className={styles.image}
                src={image}
                alt='none'
              />
            </div>
          </div>
        </div>
        <div className={styles.texts}>
          <h2>
            Desperte para uma Nova Vida! Diga adeus à retenção de líquidos e ao
            inchaço
          </h2>
          <p className={styles.paragraph}>
            O BRASIL SLIM DEXFIT com sua performance premium é composto por
            cinco ativos principais de alta potência, CAFÉ VERDE, INULINA,
            VITAMINA B12, EXTRATO DE LARANJA MORO e o TRANS RESVERATROL,
            presentes na composição de forma rica e restauradora, promovendo uma
            vida mais saudável.
          </p>
          <div className={styles.button}></div>
        </div>
      </div>
    </section>
  );
}
