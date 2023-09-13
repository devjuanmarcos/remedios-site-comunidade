import BannerMain1 from "components/Banners/BannerMain1";
import React from "react";
import styles from "./Dexfit.module.css";
import ThreeIconsCard from "components/Cards/ThreeIcons";
import RoundedImageBanner from "components/Banners/RoundedImage";

export default function Dexfit() {
  return (
    <div className={styles.bannerMain1}>
      <BannerMain1 />
      <ThreeIconsCard />
      <RoundedImageBanner />
    </div>
  );
}
