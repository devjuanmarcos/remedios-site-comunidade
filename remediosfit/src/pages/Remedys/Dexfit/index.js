import BannerMain1 from "components/Banners/BannerMain1";
import React from "react";
import styles from "./Dexfit.module.css";
import ThreeIconsCard from "components/Cards/ThreeIcons";
import RoundedImageBanner from "components/Banners/RoundedImage";
import FourCardsBanner from "components/Banners/FourCards";
import TopThreeItensBanner from "components/Banners/TopThreeItens";
import CompositionBanner from "components/Banners/Composition";
import remedio from "assets/images/dexfit.svg";

export default function Dexfit() {
  return (
    <div className={styles.dexfit}>
      <BannerMain1
        remedio={remedio}
        title={"TENHA UMA VIDA MAIS LEVE:"}
        subTitle={"Acabe de vez com a retenção de líquidos e o inchaço"}
        paragraph={
          " Desperte a sua melhor versão com Dexfit! Esta cápsula exclusiva, desenvolvida especialmente para mulheres, apresenta uma fórmula 100% natural."
        }
      />
      <ThreeIconsCard />
      <RoundedImageBanner />
      <FourCardsBanner />
      <TopThreeItensBanner />
      <CompositionBanner />
    </div>
  );
}
