import React from "react";
import styles from "./DetoxBlack.module.css";

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

export default function DetoxBlack() {
  const pageId = "detoxBlack";

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
      className={styles.detoxBlack}
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
        background={"rgba(23, 46, 26, 0.41)"}
      />
      <IntentionallyBanner
        id={pageId}
        type={"functions"}
      />
      <CompositionBanner
        type={"composition"}
        background={"rgba(23, 46, 26, 0.41)"}
        id={pageId}
      />
      <ThreeItensTextBanner
        type={"presentation"}
        id={pageId}
      />
      <CarouselVideosBanner
        type={"carousel"}
        background={"rgba(23, 46, 26, 0.41)"}
        id={pageId}
      />
      <TextOneCarouselBanner
        type={"miniCarousel"}
        id={pageId}
      />
      <ThreeItensTextBanner
        background={"rgba(23, 46, 26, 0.41)"}
        type={"recommendation"}
        id={pageId}
      />
      <IntentionallyBanner
        type={"intentionally"}
        id={pageId}
      />
      <VideoBanner
        background={"rgba(23, 46, 26, 0.41)"}
        type={"video"}
        id={pageId}
      />
      <PriceBanner
        type={"price"}
        id={pageId}
      />
    </div>
  );
}
