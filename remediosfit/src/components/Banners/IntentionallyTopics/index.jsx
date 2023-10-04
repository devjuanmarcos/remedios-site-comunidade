import styles from "./styles.module.css";
import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";

import biofitData from "assets/json/biofitData.json";

export default function IntentionallyBanner({ background, id, type }) {
  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }
  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  return (
    <>
      {filteredBanner.map((banner, id) => (
        <section
          style={
            background
              ? {
                  backgroundColor: background,
                  width: "100%",
                }
              : { width: "80%" }
          }
          className={styles.main}
        >
          <div
            className={styles.title}
            key={id}
          >
            <h1 style={{ color: filteredId.primaryColor }}>{banner.title}</h1>
            <h2>{banner.subtitle}</h2>
          </div>
          <div className={styles.content}>
            <ul className={styles.list}>
              {banner.itens.map((item) => (
                <li
                  key={id}
                  className={styles.listItem}
                >
                  <FavoriteIcon style={{ color: filteredId.primaryColor }} />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
            <div className={styles.imageBox}>
              <img
                style={{ width: "100%" }}
                alt='imageSvg'
                src={banner.image}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
