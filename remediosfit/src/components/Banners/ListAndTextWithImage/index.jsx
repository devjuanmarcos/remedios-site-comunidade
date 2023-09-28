import styles from "./ListAndTextWithImage.module.css";
import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";

import twcbChildrens from "assets/json/twcbChildrens.json";
import ButtonMain from "components/Buttons/ButtonMain";

export default function ListAndTextWithImageBanner({
  background,
  type,
  primaryColor,
  subtitle,
  title,
  image,
  width,
  paragraph,
}) {
  const filteredChildrens = twcbChildrens.filter(
    (twcbChildrens) => twcbChildrens.name === type
  );
  return (
    <section
      style={
        background
          ? {
              backgroundImage: `url(${background})`,
              width: "100%",
            }
          : null
      }
      className={styles.listAndTextWithImageBanner}
    >
      <div className={styles.title}>
        <h2>{subtitle}</h2>
        <h1 style={{ color: primaryColor }}>{title}</h1>
      </div>
      <div className={styles.content}>
        <ul className={styles.list}>
          {filteredChildrens.map((twcbChildren, id) => (
            <li
              key={id}
              className={styles.listItem}
            >
              <FavoriteIcon style={{ color: primaryColor }} />
              <p>{twcbChildren.list}</p>
            </li>
          ))}
        </ul>
        <div style={{ width: "60%" }}>
          <img
            style={{ width: "100%" }}
            alt='imageSvg'
            src={image}
          />
        </div>
      </div>
    </section>
  );
}
