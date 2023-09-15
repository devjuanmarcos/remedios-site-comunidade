import styles from "./SimpleText.module.css";
import React from "react";

export default function SimpleTextCard({ color, children }) {
  return (
    <div
      className={styles.simpleTextCard}
      style={{ backgroundColor: color }}
    >
      <h2 className={styles.text}>{children}</h2>
    </div>
  );
}
