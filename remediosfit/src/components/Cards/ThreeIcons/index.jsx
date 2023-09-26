import React from "react";
import styles from "./ThreeIcons.module.css";
import icon1 from "assets/images/icon1.png";
import icon2 from "assets/images/icon2.png";
import icon3 from "assets/images/icon3.png";

export default function ThreeIconsCard() {
  return (
    <div className={styles.threeIconsCard}>
      <div className={styles.content}>
        <img
          src={icon1}
          alt='none'
        />
        <img
          src={icon2}
          alt='none'
        />
        <img
          src={icon3}
          alt='none'
        />
      </div>
    </div>
  );
}
