import React from "react";
import styles from "./DetoxBlack.module.css";

import MainBanner from "components/Banners/Main";
import ThreeItensTextBanner from "components/Banners/ThreeItensText";
import TopicsWithImageBanner from "components/Banners/TopicsWithImage";
import IntentionallyBanner from "components/Banners/IntentionallyTopics";
import CompositionBanner from "components/Banners/Composition";
import PriceBanner from "components/Banners/Price";

import biofitData from "assets/json/biofitData.json";
import ImageWithTextsBanner from "components/Banners/ImageWithTexts";

export default function DetoxBlack() {
  const pageId = "detoxBlack";
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
    <div
      className={styles.detoxBlack}
      style={pageStyle}
    >
      <MainBanner
        type={"main"}
        id={pageId}
        background={background}
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

      <ThreeItensTextBanner
        background={background}
        type={"recommendation"}
        id={pageId}
      />
      <IntentionallyBanner
        type={"intentionally"}
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
