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
      <TopThreeItensBanner
        text1={"Chegou momento de você "}
        textColored1={"retomar o controle, "}
        text2={"recuperar o corpor "}
        textColored2={"e elevar sua autoestima ao máximo!"}
        color={"var(--dexfit-tom2)"}
        image5unP='https://remedios-site-comunidade.vercel.app/static/media/dexfit.e0555a5fc56e55c9b938e2114c0ad78c.svg'
        image3unP='https://remedios-site-comunidade.vercel.app/static/media/dexfit.e0555a5fc56e55c9b938e2114c0ad78c.svg'
        image1unP='https://remedios-site-comunidade.vercel.app/static/media/dexfit.e0555a5fc56e55c9b938e2114c0ad78c.svg'
        price5unOldP={"594,00"}
        price5unParP={"29,70"}
        price3unOldP={"595,00"}
        price3unParP={"39,70"}
        price1unOldP={"596,00"}
        price1unParP={"49,70"}
      />
      <CompositionBanner />
    </div>
  );
}
