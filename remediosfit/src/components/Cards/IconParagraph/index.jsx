import styles from "./styles.module.css";
import React from "react";

import iconParagraph from "./iconParagraph.json";
import IconComponent from "components/Icon/IconComponent";

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
              <IconComponent
                iconName={topic.icon}
                color={filtered.primaryColor}
                size={30}
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
