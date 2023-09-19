import ButtonMain from "components/Buttons/ButtonMain";
import styles from "./TextsWithCards.module.css";
import React from "react";
import SimpleTextCard from "components/Cards/SimpleText";

export default function TextsWithCardsBanner({
  titleColor,
  title,
  subTitle,
  paragraph,
  buttonChildren,
  buttonColor,
}) {
  return (
    <div className={styles.textsWithCardsBanner}>
      <div className={styles.texts}>
        <div>
          <h1 style={{ color: titleColor }}>{title}</h1>
          <h2 style={{ color: { titleColor } }}>{subTitle}</h2>
        </div>
        <p className={styles.paragraph}>{paragraph}</p>
        <ButtonMain
          children={buttonChildren}
          color={buttonColor}
        />
      </div>
      <div className={styles.cardBox}>
        <SimpleTextCard
          color={"var(--maeslim-cor-principal)"}
          children={"Acelere seu metabolismo de forma natural e segura"}
        />
        <SimpleTextCard
          color={"var(--maeslim-cor-principal)"}
          children={"Mais saciedade, menos comida"}
        />
        <SimpleTextCard
          color={"var(--maeslim-cor-principal)"}
          children={"Redução de medidas visível em pouco tempo"}
        />
        <SimpleTextCard
          color={"var(--maeslim-cor-principal)"}
          children={"Pele, cabelos e unhas mais saudáveis e jovens"}
        />
      </div>
    </div>
  );
}
