import React from "react";
import styles from "./BannerMain1.module.css";
import remedio from "assets/images/dexfit.svg";

export default function BannerMain1() {
  return (
    <div className={styles.main}>
      <div className={styles.texts}>
        <div>
          <h1>TENHA UMA VIDA MAIS LEVE:</h1>
          <h2>Acabe de vez com a retenção de líquidos e o inchaço</h2>
        </div>
        <p className={styles.paragraph}>
          Desperte a sua melhor versão com Dexfit! Esta cápsula exclusiva,
          desenvolvida especialmente para mulheres, apresenta uma fórmula 100%
          natural.
        </p>
        <button></button>
      </div>

      <div className={styles.boxImage}>
        <img
          className={styles.image}
          src={remedio}
          alt='none'
        />
      </div>
    </div>
  );
}
