import React from "react";
import styles from "./Home.module.css";
import BannerMain1 from "components/Banners/BannerMain1";

export default function Home() {
  return (
    <div className={styles.home}>
      <BannerMain1 />
    </div>
  );
}
