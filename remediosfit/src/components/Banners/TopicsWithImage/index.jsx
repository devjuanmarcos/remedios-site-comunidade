import IconParagraphCard from "components/Cards/IconParagraph";
import styles from "./styles.module.css";
import React from "react";

import image from "assets/images/bloodText.svg";
import iconParagraph from "components/Cards/IconParagraph/iconParagraph.json";

export default function TopicsWithImageBanner({
  background,
  primaryColor,
  id,
  type,
}) {
  const filterData =
    iconParagraph.filter((iconParagraph) => iconParagraph.id === id) &&
    iconParagraph.filter((iconParagraph) => iconParagraph.type === type);
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
      className={styles.main}
    >
      {filterData.map((filtered, id) => (
        <div className={styles.content}>
          <div className={styles.imageBox}>
            <h1 style={{ color: filtered.primaryColor }}>{filtered.title}</h1>
            <h2>{filtered.subtitle}</h2>
            <p>{filtered.paragraph}</p>
            <img
              src={filtered.image}
              alt='none'
            />
          </div>
          <div className={styles.topicsBox}>
            <IconParagraphCard
              id={id}
              type={type}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
