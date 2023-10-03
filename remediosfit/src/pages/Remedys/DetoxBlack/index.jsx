import React from "react";
import styles from "./DetoxBlack.module.css";

import detoxBlackImage from "assets/images/detoxBlackImage.svg";
import bloodText from "assets/images/bloodText.svg";
import detoxThree from "assets/images/detoxThree.svg";

import BannerMainDetox from "components/Banners/BannerMainDetox";
import VideoBanner from "components/Banners/VideoBanner";
import TextsWithCardsBanner from "components/Banners/TextsWithCards";
import ListAndTextWithImageBanner from "components/Banners/ListAndTextWithImage";
import FormulaBanner from "components/Banners/Formula";
import ThreeItensTextBanner from "components/Banners/ThreeItensText";
import CarouselVideosBanner from "components/Banners/CarouselVideos";
import TextOneCarouselBanner from "components/Banners/TextOneCarousel";
import TopicsWithImageBanner from "components/Banners/TopicsWithImage";

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
      {/* <VideoBanner
        src={"https://www.youtube.com/embed/pummBnLPjPA"}
        buttonWidth='424px'
        background={"rgba(23, 46, 26, 0.41)"}
      /> */}
      <TopicsWithImageBanner
        background={"rgba(23, 46, 26, 0.41)"}
        id={"detoxBlack"}
        type={"beneficios"}
      />
      <ListAndTextWithImageBanner
        type={"detoxBlack"}
        primaryColor={"var(--detoxBlack-cor-principal)"}
        title={"64 mil pessoas"}
        subtitle={"Em 2022 ajudamos mais de"}
        image={bloodText}
        width={"50%"}
        paragraph={
          "Pessoas essas, que chegaram para a gente com todos os tipos de problemas"
        }
      />
      <FormulaBanner
        primaryColor={"var(--detoxBlack-cor-principal)"}
        remedy={"Detox Black"}
        image={detoxThree}
        type={"detoxBlack"}
        background={"rgba(23, 46, 26, 0.41)"}
        paragraph={
          "Fórmula exclusiva é composta por ingredientes naturais como cromo, spirulina, psyllium, quitosana, vitamina E e guaraná, que ajudam a eliminar toxinas e impurezas acumuladas no corpo, além de estimular o metabolismo para uma queima mais eficiente de gordura."
        }
      />
      <ThreeItensTextBanner
        primaryColor={"var(--detoxBlack-cor-principal)"}
        id={"detoxBlack"}
        type={"presentation"}
        subtitle={"Desvende o poder das nossas cápuslas"}
        title={"e transforme sua vida"}
      />
      <CarouselVideosBanner
        background={"rgba(23, 46, 26, 0.41)"}
        primaryColor={"var(--detoxBlack-cor-principal)"}
        subtitle={"Lift Detox Black"}
      />
      <TextOneCarouselBanner primaryColor={"var(--detoxBlack-cor-principal)"} />
      <ThreeItensTextBanner
        background={"rgba(23, 46, 26, 0.41)"}
        primaryColor={"var(--detoxBlack-cor-principal)"}
        id={"detoxBlack"}
        type={"recommendation"}
        subtitle={"Lift Detox Black"}
        title={"É recomendado para:"}
        paragraph={
          "Se você se considera em pelo menos em 1 dessas opções, o LIFT DETOX BLACK foi feito para você!"
        }
      />
    </div>
  );
}
