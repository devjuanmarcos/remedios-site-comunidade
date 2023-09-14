import styles from "./TopCardPlan.module.css";
import React from "react";

export default function TopCardPlanCard() {
  return (
    <div className={styles.topCardPlanCard}>
      <div className={styles.boxCard}>
        <div
          className={styles.cardMainContent}
          style={{ paddingInline: "2vh" }}
        >
          <h3 style={{ fontSize: "3.35vh", color: "#1F1F1F" }}>1 Unidade</h3>
          <img
            className={styles.imageMain}
            src='https://remedios-site-comunidade.vercel.app/static/media/dexfit.e0555a5fc56e55c9b938e2114c0ad78c.svg'
            alt='none'
          />
          <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>
            De R$ 594,00 por apenas:
          </h3>
          <div className={styles.priceMain}>
            <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>12X</h3>
            <span
              className={styles.priceValue}
              style={{ color: "#1F1F1F" }}
            >
              R$ 29,70
            </span>
          </div>
          <h3 style={{ fontSize: "2.23vh", color: "rgba(248, 145, 197, 1)" }}>
            ou R$ 297,00 à vista
          </h3>
          <div
            style={{ backgroundColor: "var(--dexfit-tom2)" }}
            className={styles.buttonMain}
          >
            <h2
              className={styles.text}
              style={{ color: "var(--branco)" }}
            >
              EU QUERO
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.boxCardMain}>
        <div className={styles.mostPop}>
          <h1 style={{ fontSize: "4vh", color: "#ef3693" }}>MAIS POPULAR</h1>
        </div>
        <div className={styles.cardMainContent}>
          <h3 style={{ fontSize: "3.35vh" }}>Kit 3 unidades</h3>
          <img
            className={styles.imageMain}
            src='https://remedios-site-comunidade.vercel.app/static/media/dexfit.e0555a5fc56e55c9b938e2114c0ad78c.svg'
            alt='none'
          />
          <h3 style={{ fontSize: "2.79vh" }}>De R$ 594,00 por apenas:</h3>
          <div className={styles.priceMain}>
            <h3 style={{ fontSize: "2.79vh" }}>12X</h3>
            <span className={styles.priceValue}>R$ 29,70</span>
          </div>
          <h3 style={{ fontSize: "2.23vh", color: "rgba(248, 145, 197, 1)" }}>
            ou R$ 297,00 à vista
          </h3>
          <div className={styles.buttonMain}>
            <h2 className={styles.text}>EU QUERO</h2>
          </div>
        </div>
      </div>

      <div className={styles.boxCard}>
        <div
          className={styles.cardMainContent}
          style={{ paddingInline: "2vh" }}
        >
          <h3 style={{ fontSize: "3.35vh", color: "#1F1F1F" }}>1 Unidade</h3>
          <img
            className={styles.imageMain}
            src='https://remedios-site-comunidade.vercel.app/static/media/dexfit.e0555a5fc56e55c9b938e2114c0ad78c.svg'
            alt='none'
          />
          <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>
            De R$ 594,00 por apenas:
          </h3>
          <div className={styles.priceMain}>
            <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>12X</h3>
            <span
              className={styles.priceValue}
              style={{ color: "#1F1F1F" }}
            >
              R$ 29,70
            </span>
          </div>
          <h3 style={{ fontSize: "2.23vh", color: "rgba(248, 145, 197, 1)" }}>
            ou R$ 297,00 à vista
          </h3>
          <div
            style={{ backgroundColor: "var(--dexfit-tom2)" }}
            className={styles.buttonMain}
          >
            <h2
              className={styles.text}
              style={{ color: "var(--branco)" }}
            >
              EU QUERO
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
