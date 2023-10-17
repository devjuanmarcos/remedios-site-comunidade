import React from "react";
import styles from "./styles.module.css";

import MainBanner from "components/Banners/Main";
import VideoBanner from "components/Banners/VideoBanner";
import ThreeItensTextBanner from "components/Banners/ThreeItensText";
import CarouselVideosBanner from "components/Banners/CarouselVideos";
import TextOneCarouselBanner from "components/Banners/TextOneCarousel";
import TopicsWithImageBanner from "components/Banners/TopicsWithImage";
import IntentionallyBanner from "components/Banners/IntentionallyTopics";
import CompositionBanner from "components/Banners/Composition";
import PriceBanner from "components/Banners/Price";

import biofitData from "assets/json/biofitData.json";
import ImageWithTextsBanner from "components/Banners/ImageWithTexts";

export default function MaeSlim() {
  const pageId = "maeSlim";
  const background = "rgba(70, 43, 92, 0.30)";

  const filteredId = biofitData.find((data) => data.id === pageId);
  if (!filteredId) {
    return null;
  }
  const pageStyle = {
    backgroundColor: filteredId.terciaryColor,
    backgroundImage: `url(${filteredId.background})`,
  };
  return (
    <div
      className={styles.main}
      style={pageStyle}
    >
      <MainBanner
        type={"main"}
        id={pageId}
        background={true}
      />
      <TopicsWithImageBanner
        type={"benefits"}
        id={pageId}
        background={background}
      />

      <IntentionallyBanner
        id={pageId}
        type={"functions"}
      />
      <CompositionBanner
        type={"composition"}
        background={background}
        id={pageId}
      />
      <ThreeItensTextBanner
        type={"presentation"}
        id={pageId}
      />
      <CarouselVideosBanner
        type={"carousel"}
        background={background}
        id={pageId}
      />
      <TextOneCarouselBanner
        type={"miniCarousel"}
        id={pageId}
      />

      <ThreeItensTextBanner
        background={background}
        type={"recommendation"}
        id={pageId}
      />
      <IntentionallyBanner
        type={"intentionally"}
        id={pageId}
      />
      <VideoBanner
        background={background}
        type={"video"}
        id={pageId}
      />

      <PriceBanner
        type={"price"}
        id={pageId}
      />

      <ImageWithTextsBanner
        background={background}
        type={"anvisa"}
        id={pageId}
      />
      <ImageWithTextsBanner
        type={"guarantee"}
        id={pageId}
      />
    </div>
  );
}
