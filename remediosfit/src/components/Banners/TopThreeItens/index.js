import TopCardPlanCard from "components/Cards/TopCardPlan";
import styles from "./TopThreeItens.module.css";
import React from "react";

export default function TopThreeItensBanner() {
  return (
    <div className={styles.topThreeItensBanner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Chegou o momento de você retomar o controle, recuperar o corpo e
          elevar sua autoestima ao máximo!
        </h1>
        <TopCardPlanCard />
      </div>
    </div>
  );
}
