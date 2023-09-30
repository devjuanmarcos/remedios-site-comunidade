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
        background={"rgba(23, 46, 26, 0.41)"}
      />
      <TextsWithCardsBanner
        title={"Natural e super eficaz"}
        titleColor={"var(--detoxBlack-cor-principal)"}
        subTitle={"Descubra os benefícios do Detox Black"}
        paragraph={
          "Acelere seu metabolismo, reduza medidas, sinta-se saciada, potencialize a evacuação e tenha uma aparência radiante. Uma maternidade saudável e em forma ao seu alcance!"
        }
        buttonColor={"var(--detoxBlack-cor-principal)"}
        cardColor={"var(--detoxBlack-tom2)"}
        type={"detoxBlack"}
        iconP={true}
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
          "fórmula exclusiva é composta por ingredientes naturais como cromo, spirulina, psyllium, quitosana, vitamina E e guaraná, que ajudam a eliminar toxinas e impurezas acumuladas no corpo, além de estimular o metabolismo para uma queima mais eficiente de gordura."
        }
      />
      <ThreeItensTextBanner
        primaryColor={"var(--detoxBlack-cor-principal)"}
        type={"detoxBlack"}
        title={"Desvende o poder das nossas cápuslas e transforme sua vida"}
      />
    </div>
  );
}
