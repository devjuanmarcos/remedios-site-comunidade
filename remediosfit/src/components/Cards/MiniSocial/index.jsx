import IconComponent from "components/Icon/IconComponent";
import styles from "./styles.module.css";
import React from "react";

export default function MiniSocialCard() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <IconComponent
            iconName={"SiInstagram"}
            size={32}
            color={"var(--branco)"}
          />
        </div>
        <div className={styles.text}>
          <h3>Instagram</h3>
          <h2>@biofitbrasil</h2>
        </div>
      </div>
    </div>
  );
}
