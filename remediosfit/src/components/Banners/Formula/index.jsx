import styles from "./Formula.module.css";
import React from "react";

import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import formula from "assets/json/formula.json";

export default function FormulaBanner({
  background,
  primaryColor,
  remedy,
  image,
  type,
}) {
  const filteredFormulas = formula.filter((formula) => formula.name === type);
  console.log(filteredFormulas);
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
      className={styles.formulaBanner}
    >
      <div className={styles.title}>
        <h2>Conheça a</h2>
        <h1
          style={{
            color: primaryColor,
            textShadow: `0.5px 0 4px ${primaryColor}`,
          }}
        >
          Fórmula poderosa
        </h1>
        <h2>do nosso {remedy}</h2>
      </div>
      <div className={styles.content}>
        <p style={{ width: "30%", textAlign: "left" }}>
          fórmula exclusiva é composta por ingredientes naturais como cromo,
          spirulina, psyllium, quitosana, vitamina E e guaraná, que ajudam a
          eliminar toxinas e impurezas acumuladas no corpo, além de estimular o
          metabolismo para uma queima mais eficiente de gordura.
        </p>
        <div className={styles.imageCard}>
          <img
            className={styles.image}
            src={image}
            alt='none'
          />
        </div>
        <ul className={styles.list}>
          {filteredFormulas.map((formula) =>
            formula.items.map((item, id) => (
              <li
                className={styles.listItem}
                key={id}
              >
                <p style={{ textAlign: "end" }}>{item}</p>
                <SwipeRightAltIcon
                  style={{ color: primaryColor, rotate: "180deg" }}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
