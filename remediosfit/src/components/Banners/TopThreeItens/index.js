import TopCardPlanCard from "components/Cards/TopCardPlan";
import styles from "./TopThreeItens.module.css";
import React from "react";

export default function TopThreeItensBanner({
  text1,
  textColored1,
  text2,
  textColored2,
  color,
}) {
  return (
    <div className={styles.topThreeItensBanner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {text1}
          <span style={{ color: color }}>{textColored1}</span>
          {text2}
          <span style={{ color: color }}>{textColored2}</span>
        </h1>
        <TopCardPlanCard />
      </div>
    </div>
  );
}
