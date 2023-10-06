import TopCardPlanCard from "components/Cards/TopCardPlan";
import styles from "./TopThreeItens.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";

export default function PriceBanner({ background, type, id }) {
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
              : { width: "100%" }
          }
          className={styles.main}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>{banner.subtitle}</h2>
              <h1
                style={{
                  color: filteredId.primaryColor,
                }}
              >
                {banner.title}
              </h1>
            </div>
            <TopCardPlanCard
              type={type}
              id={id}
            />
          </div>
        </section>
      ))}
    </>
  );
}
