import React from "react";
import styles from "./Home.module.css";
import BannerMain from "components/Banners/BannerHome";

export default function Home() {
  return (
    <div className={styles.home}>
      <BannerMain />
    </div>
  );
}
