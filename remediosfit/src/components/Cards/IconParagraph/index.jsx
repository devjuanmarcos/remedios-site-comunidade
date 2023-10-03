import styles from "./styles.module.css";
import React from "react";
import { createIconFont } from "@rsuite/icons";

import oneCircle from "assets/images/oneCircle.svg";
import iconParagraph from "./iconParagraph.json";

const IconFont = createIconFont({
  scriptUrl: "//at.alicdn.com/t/font_2144422_r174s9i1orl.js",
  commonProps: { style: { color: "blue" } },
});

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
              <IconFont
                icon={topic.icon}
                fill={filtered.primaryColor}
                style={{ fontSize: "100%", width: 30, height: 30, padding: 5 }}
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
