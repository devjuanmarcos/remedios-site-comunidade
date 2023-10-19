import styles from "./styles.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";
import MainBanner from "components/Banners/Main";
import IntentionallyBanner from "components/Banners/IntentionallyTopics";

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
        id={pageId}
        type={"main"}
        background={background}
      />
      <IntentionallyBanner
        id={pageId}
        type={"functions"}
      />
    </section>
  );
}
