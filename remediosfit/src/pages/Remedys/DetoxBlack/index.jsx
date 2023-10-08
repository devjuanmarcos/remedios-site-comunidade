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

export default function DetoxBlack() {
  const pageId = "detoxBlack";

  return (
    <div className={styles.detoxBlack}>
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
        id={pageId}
        type={"presentation"}
      />
      <CarouselVideosBanner
        background={"rgba(23, 46, 26, 0.41)"}
        primaryColor={"var(--detoxBlack-cor-principal)"}
        subtitle={"Lift Detox Black"}
      />
      <TextOneCarouselBanner
        type={"miniCarousel"}
        id={pageId}
      />
      <ThreeItensTextBanner
        background={"rgba(23, 46, 26, 0.41)"}
        id={pageId}
        type={"recommendation"}
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
