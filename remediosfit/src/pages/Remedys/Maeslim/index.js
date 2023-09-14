import BannerMain from "components/Banners/BannerHome";
import styles from "./Maeslim.module.css";
import React from "react";
import BannerMain1 from "components/Banners/BannerMain1";
import fundo from "assets/images/remediosVoadores.svg";

export default function Maeslim() {
  return (
    <div className={styles.maeslim}>
      <BannerMain1 fundo='assets/images/remediosVoadores.svg' />
    </div>
  );
}
