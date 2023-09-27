import React from "react";
import styles from "./DetoxBlack.module.css";

import detoxBlackImage from "assets/images/detoxBlackImage.svg";

import BannerMainDetox from "components/Banners/BannerMainDetox";
import VideoBanner from "components/Banners/VideoBanner";

export default function DetoxBlack() {
  return (
    <div className={styles.detoxBlack}>
      <BannerMainDetox
        title={"Lift Detox Black"}
        titleColor={"var(--detoxBlack-cor-principal)"}
        subTitle={"Transforme seu corpo"}
        paragraph={
          "Perca peso de maneira saudável! A fórmula natural que acelera o metabolismo, elimina toxinas e proporciona resultados duradouros."
        }
        buttonChildren={""}
        buttonColor={"var(--detoxBlack-cor-principal)"}
        remedio={detoxBlackImage}
        widthImage='300px'
      />
      <VideoBanner
        src={"https://www.youtube.com/embed/pummBnLPjPA"}
        buttonWidth='424px'
      />
    </div>
  );
}
