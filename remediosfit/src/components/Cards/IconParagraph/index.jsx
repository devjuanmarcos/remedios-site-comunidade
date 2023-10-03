import styles from "./styles.module.css";
import React from "react";

import oneCircle from "assets/images/oneCircle.svg";
import iconParagraph from "./iconParagraph.json";

export default function IconParagraphCard({ id, type }) {
  const filterData =
    iconParagraph.filter((iconParagraph) => iconParagraph.id === id) &&
    iconParagraph.filter((iconParagraph) => iconParagraph.type === type);

  return (
    <>
      {filterData.map((filtered) =>
        filtered.topics.map((topic, id) => (
          <div
            className={styles.main}
            key={id}
          >
            <div className={styles.iconBox}>
              <img
                src={oneCircle}
                alt='none'
              />
            </div>
            <div className={styles.textBox}>
              <h2>{topic.title}</h2>
              <p>{topic.paragraph}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}
