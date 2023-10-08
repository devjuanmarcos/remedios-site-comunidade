import React from "react";
import styles from "./ButtonMain.module.css";

export default function ButtonMain({ children, color, images }) {
  console.log(images);
  return (
    <div
      className={styles.buttonMain}
      style={{
        background: color,
        boxShadow: `0px 4px 26px 0px ${color}`,
      }}
    >
      {children}
    </div>
  );
}
