import React from "react";
import styles from "./CardWithBorder.module.css";
import circle from "assets/images/circle.png";

export default function CardWithBorder() {
  return (
    <section className={styles.cardWithBorder}>
      <div className={styles.content}>
        <div className={styles.texts}>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisci</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis{" "}
          </p>
        </div>
        <div className={styles.circles}>
          <img
            src={circle}
            alt='none'
          />
          <img
            src={circle}
            alt='none'
          />
          <img
            src={circle}
            alt='none'
          />
          <img
            src={circle}
            alt='none'
          />
        </div>
      </div>
    </section>
  );
}
