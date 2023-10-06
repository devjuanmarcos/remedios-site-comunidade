import styles from "./styles.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";
import IconComponent from "components/Icon/IconComponent";

export default function IconParagraphCard({ ids, type }) {
  const filteredId = biofitData.find((data) => data.id === ids);

  if (!filteredId) {
  }

  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  return (
    <>
      {filteredBanner.map((banner) =>
        banner.itens.map((item, i) => (
          <div
            className={styles.main}
            key={i}
          >
            <div className={styles.iconBox}>
              <IconComponent
                iconName={item.icon}
                color={filteredId.primaryColor}
                size={30}
              />
            </div>
            <div className={styles.textBox}>
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}
