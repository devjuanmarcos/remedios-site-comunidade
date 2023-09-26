import ButtonMain from "components/Buttons/ButtonMain";
import styles from "./TextsWithCards.module.css";
import React from "react";
import SimpleTextCard from "components/Cards/SimpleText";
import childrens from "assets/json/twcbChildrens.json";
import { backgrounds } from "polished";

export default function TextsWithCardsBanner({
  titleColor,
  title,
  subTitle,
  paragraph,
  buttonChildren,
  buttonColor,
  cardColor,
  childrensP,
  iconP,
  background,
}) {
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
      className={styles.textsWithCardsBanner}
    >
      <div className={styles.content}>
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
        {iconP ? (
          <div className={styles.cardBox}>
            {childrens.map((children, id) => (
              <SimpleTextCard
                key={id}
                color={cardColor}
                children={children.children}
                icon={children.icon}
              />
            ))}
          </div>
        ) : (
          <div className={styles.cardBox}>
            {childrensP.map((children, id) => (
              <SimpleTextCard
                key={id}
                color={cardColor}
                children={children}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
