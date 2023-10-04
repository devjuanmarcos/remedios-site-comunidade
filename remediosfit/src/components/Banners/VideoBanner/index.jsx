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
            <iframe
              width='840'
              height='472'
              src='https://www.youtube.com/watch?v=LrSW6Z26cyg'
              title='HTML Vídeo 11 - Como inserir vídeos do Youtube na página WEB'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
            <div style={{ width: "100%" }}>
              <ButtonMain color='var(--detoxBlack-cor-principal)' />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
