import TopCardPlanCard from "components/Cards/TopCardPlan";
import styles from "./TopThreeItens.module.css";
import React from "react";

export default function TopThreeItensBanner({
  text1,
  textColored1,
  text2,
  textColored2,
  color,
  image5unP,
  image3unP,
  image1unP,
  price5unOldP,
  price3unOldP,
  price1unOldP,
  price5unParP,
  price3unParP,
  price1unParP,
  backgroundMainP,
  boxShadowMainp,
}) {
  return (
    <section className={styles.topThreeItensBanner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {text1}
          <span style={{ color: color }}>{textColored1}</span>
          {text2}
          <span style={{ color: color }}>{textColored2}</span>
        </h1>
        <TopCardPlanCard
          image5un={image5unP}
          image3un={image3unP}
          image1un={image1unP}
          price5unOld={price5unOldP}
          price5unPar={price5unParP}
          price3unOld={price3unOldP}
          price3unPar={price3unParP}
          price1unOld={price1unOldP}
          price1unPar={price1unParP}
          backgroundMain={backgroundMainP}
          boxShadowMain={boxShadowMainp}
        />
      </div>
    </section>
  );
}
