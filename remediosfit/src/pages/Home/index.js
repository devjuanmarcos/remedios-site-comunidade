import React from "react";
import styles from "./Home.module.css";
import BannerMain from "components/Banners/BannerHome";
import CardWithBorder from "components/Banners/CardWithBorder";

export default function Home() {
  return (
    <div className={styles.home}>
      <BannerMain />
      <CardWithBorder />
    </div>
  );
}
