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
  paragraph,
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
        <p style={{ width: "33%", textAlign: "left" }}>{paragraph}</p>
        <div className={styles.imageCard}>
          <img
            className={styles.image}
            src={image}
            alt='none'
          />
        </div>
        <ul className={styles.list}>
          {/* filtrei o json para puxar apenas pelo tipo de remédio que foi passado como parâmetro e usei um segundo map para puxar apenas o "items" */}
          {filteredFormulas.map((formula) =>
            formula.items.map((item, id) => (
              <li
                className={styles.listItem}
                key={id}
              >
                <SwipeRightAltIcon style={{ color: primaryColor }} />
                <p style={{ textAlign: "end" }}>{item}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
