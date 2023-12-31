import React from "react";
import styles from "./styles.module.css";

import MainBanner from "components/Banners/Main";
import ThreeItensTextBanner from "components/Banners/ThreeItensText";
import TopicsWithImageBanner from "components/Banners/TopicsWithImage";
import IntentionallyBanner from "components/Banners/IntentionallyTopics";
import CompositionBanner from "components/Banners/Composition";
import PriceBanner from "components/Banners/Price";

import biofitData from "assets/json/biofitData.json";
import ImageWithTextsBanner from "components/Banners/ImageWithTexts";

export default function HomeCare() {
  const pageId = "homecare";
  const background = "rgba(44, 9, 17, 0.247)";
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
      {/* <CarouselVideosBanner
        type={"carousel"}
        background={background}
        id={pageId}
      /> */}
      {/* <TextOneCarouselBanner
        type={"miniCarousel"}
        id={pageId}
      /> */}
      <ThreeItensTextBanner
        background={background}
        type={"recommendation"}
        id={pageId}
      />
      <IntentionallyBanner
        type={"intentionally"}
        id={pageId}
      />
      {/* <VideoBanner
        background={background}
        type={"video"}
        id={pageId}
      /> */}
      <PriceBanner
        type={"price"}
        id={pageId}
        background={background}
      />
      <ImageWithTextsBanner
        type={"anvisa"}
        id={pageId}
      />
      <ImageWithTextsBanner
        background={background}
        type={"guarantee"}
        id={pageId}
      />
    </div>
  );
}
