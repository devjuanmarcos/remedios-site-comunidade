import styles from "./Comment.module.css";
import React from "react";

export default function CommentCard({ children, children2, img }) {
  return (
    <div className={styles.commentCard}>
      <div className={styles.content}>
        <div className={styles.texts}>
          <h3>{children}</h3>
          <p>{children2}</p>
        </div>
        <img
          className={styles.image}
          src={img}
          alt='none'
        />
      </div>
    </div>
  );
}
