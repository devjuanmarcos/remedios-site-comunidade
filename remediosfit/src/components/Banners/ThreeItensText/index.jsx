import styles from "./ThreeItensText.module.css";
import React from "react";

import jsonItens from "./remedys.json";

export default function ThreeItensTextBanner({
  background,
  primaryColor,
  title,
  type,
  subtitle,
}) {
  const filteredItem = jsonItens.filter((jsonItens) => jsonItens.id === type);

  return (
    <section
      style={
        background
          ? {
              backgroundColor: background,
              width: "100%",
            }
          : null
      }
      className={styles.threeItensTextBanner}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 style={{ color: "var(--branco)" }}>{subtitle}</h2>
          <h1 style={{ color: primaryColor }}>{title}</h1>
        </div>
        <div className={styles.itemBox}>
          {filteredItem.map((item, id) => (
            <div
              className={styles.item}
              key={id}
            >
              <img
                className={styles.svg}
                src={item.image}
                alt='none'
              />
              <h3>{item.title}</h3>
              <p style={{ marginTop: "-12px" }}>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
