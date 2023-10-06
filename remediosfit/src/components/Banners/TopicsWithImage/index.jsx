import styles from "./styles.module.css";
import React from "react";

import IconParagraphCard from "components/Cards/IconParagraph";
import biofitData from "assets/json/biofitData.json";

export default function TopicsWithImageBanner({ background, id, type }) {
  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }
  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );
  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            background
              ? {
                  backgroundColor: background,
                  width: "100%",
                }
              : null
          }
          className={styles.main}
        >
          <div className={styles.content}>
            <div className={styles.imageBox}>
              <h1 style={{ color: filteredId.primaryColor }}>{banner.title}</h1>
              <h2>{banner.subtitle}</h2>
              <p>{banner.paragraph}</p>
              <img
                src={banner.image}
                alt='none'
              />
            </div>
            <div className={styles.topicsBox}>
              <IconParagraphCard
                ids={id}
                type={type}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
