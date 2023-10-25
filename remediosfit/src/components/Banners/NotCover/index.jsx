// import BlockIcon from "components/Icons/Block";
import React, { useState } from "react";
import styles from "./styles.module.css";
// import { HiOutlineArrowCircleDown } from "react-icons/hi";
import biofitData from "assets/json/biofitData.json";
import ExpandCard from "components/Cards/Expand";

export default function NotCoverBanner({ id, type, background }) {
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
            <div className={styles.title}>
              <h2 style={{ color: "var(--branco)" }}>{banner.subtitle}</h2>
              <h1 style={{ color: filteredId.primaryColor }}>{banner.title}</h1>
            </div>
            <div className={styles.container}>
              <div>
                {banner.itens.map((item, id) => (
                  <ExpandCard
                    key={id}
                    iconName={item.icon}
                    title={item.title}
                    description={item.description}
                    color={filteredId.primaryColor}
                    hoverColor={banner.hoverColor}
                  />
                ))}
              </div>
              <div
                className={styles.item}
                key={id}
              >
                <img
                  fill1='#fff'
                  className={styles.svg}
                  src={banner.image}
                  alt='none'
                />
                <h3>{banner.subItemTitle}</h3>
                <p style={{ marginTop: "-12px" }}>{banner.subItemParagraph}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
