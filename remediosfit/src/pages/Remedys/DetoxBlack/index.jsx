import React from "react";
import styles from "./DetoxBlack.module.css";

import detoxBlackImage from "assets/images/detoxBlackImage.svg";

import BannerMainDetox from "components/Banners/BannerMainDetox";
import VideoBanner from "components/Banners/VideoBanner";
import ThreeItensTextBanner from "components/Banners/ThreeItensText";
import CarouselVideosBanner from "components/Banners/CarouselVideos";
import TextOneCarouselBanner from "components/Banners/TextOneCarousel";
import TopicsWithImageBanner from "components/Banners/TopicsWithImage";
import IntentionallyBanner from "components/Banners/IntentionallyTopics";
import CompositionBanner from "components/Banners/Composition";

export default function DetoxBlack() {
  return (
    <div className={styles.detoxBlack}>
      <BannerMainDetox
        type={"main"}
        id={"detoxBlack"}
        background={true}
      />
      <TopicsWithImageBanner
        type={"beneficios"}
        background={"rgba(23, 46, 26, 0.41)"}
        id={"detoxBlack"}
      />
      <IntentionallyBanner
        id={"detoxBlack"}
        type={"functions"}
      />
      <CompositionBanner
        type={"composition"}
        background={"rgba(23, 46, 26, 0.41)"}
        id={"detoxBlack"}
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
      <IntentionallyBanner
        type={"intentionally"}
        id={"detoxBlack"}
      />
      <VideoBanner
        type={"video"}
        id={"detoxBlack"}
      />
    </div>
  );
}
