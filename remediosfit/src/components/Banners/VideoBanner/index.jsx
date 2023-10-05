import styles from "./VideoBanner.module.css";
import React from "react";
import ButtonMain from "components/Buttons/ButtonMain";

import biofitData from "assets/json/biofitData.json";

export default function VideoBanner({ background, id, type }) {
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
              : null
          }
          className={styles.main}
        >
          <div className={styles.content}>
            <div className={styles.frameborder}>
              <iframe
                className={styles.iframe}
                src={banner.link}
                title={banner.title}
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>

            <div className={styles.textBox}>
              <div className={styles.titleParagraph}>
                <h1 style={{ color: filteredId.primaryColor }}>
                  {banner.title}
                </h1>
                <p>{banner.paragraph}</p>
              </div>
              <div style={{ width: "50%", marginTop: "20px" }}>
                <ButtonMain color={filteredId.primaryColor} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
