import React from "react";
import styles from "./BannerHome.module.css";
import imageGroup from "assets/images/mainGroup.png";
import ButtonPinkSimple from "components/Buttons/ButtonPinkSimple";

export default function BannerMain() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={imageGroup}
          alt='none'
        />
        <div className={styles.texts}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisci</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis{" "}
          </p>
          <ButtonPinkSimple />
        </div>
      </div>
    </div>
  );
}
