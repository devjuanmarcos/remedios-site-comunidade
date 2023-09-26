import styles from "./SimpleText.module.css";
import React from "react";

export default function SimpleTextCard({ color, children, icon }) {
  return (
    <div
      className={styles.simpleTextCard}
      style={{ backgroundColor: color }}
    >
      <h2 className={styles.text}>{children}</h2>
      {icon ? (
        <img
          className={styles.icon}
          src={icon}
          alt='myIcon'
        />
      ) : (
        ""
      )}
    </div>
  );
}
