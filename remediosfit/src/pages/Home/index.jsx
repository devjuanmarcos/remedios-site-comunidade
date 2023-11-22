import styles from "./styles.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";
import MainBanner from "components/Banners/Main";
import IntentionallyBanner from "components/Banners/IntentionallyTopics";
import ThreeItensTextBanner from "components/Banners/ThreeItensText";
import VideoBanner from "components/Banners/VideoBanner";
import ImageWithTextsBanner from "components/Banners/ImageWithTexts";
import NotCoverBanner from "components/Banners/NotCover";
import RemedyDescriptionCard from "components/Cards/RemedyDescription";
import CarouselCardsBanner from "components/Banners/CarouselCards";
import MiniSocialCard from "components/Cards/MiniSocial";

export default function Home() {
  const pageId = "homePage";
  const background = "rgba(23, 46, 26, 0.41)";

  const filteredId = biofitData.find((data) => data.id === pageId);
  if (!filteredId) {
    return null;
  }

  const pageStyle = {
    backgroundColor: filteredId.terciaryColor,
    backgroundImage: `url(${filteredId.background})`,
  };

  return (
    <section
      className={styles.main}
      style={pageStyle}
    >
      <MainBanner
        type={"main"}
        background={background}
        id={pageId}
      />
      {/* <MiniSocialCard /> */}
      <NotCoverBanner
        type={"notCover"}
        id={pageId}
      />
      <CarouselCardsBanner
        type={"presentation"}
        id={pageId}
      />
      <IntentionallyBanner
        type={"functions"}
        id={pageId}
      />
      <ThreeItensTextBanner
        type={"presentation"}
        id={pageId}
      />
      <ThreeItensTextBanner
        type={"recommendation"}
        id={pageId}
      />
      <VideoBanner
        type={"video"}
        id={pageId}
      />
      <ImageWithTextsBanner
        type={"anvisa"}
        id={pageId}
      />
    </section>
  );
}