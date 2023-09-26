import styles from "./TopCardPlan.module.css";
import React from "react";

export default function TopCardPlanCard({
  image5un,
  image3un,
  image1un,
  price5unOld,
  price3unOld,
  price1unOld,
  price5unPar,
  price3unPar,
  price1unPar,
  backgroundMain,
  boxShadowMain,
}) {
  function converterStringParaNumeroDecimal(stringComVirgula) {
    return parseFloat(stringComVirgula.replace(",", "."));
  }

  function formatarNumeroComVirgula(numero) {
    return numero.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }

  const price5unParDecimal = converterStringParaNumeroDecimal(price5unPar);
  const price5unAVista = formatarNumeroComVirgula(price5unParDecimal * 10);

  const price3unParDecimal = converterStringParaNumeroDecimal(price3unPar);
  const price3unAVista = formatarNumeroComVirgula(price3unParDecimal * 10);

  const price1unParDecimal = converterStringParaNumeroDecimal(price1unPar);
  const price1unAVista = formatarNumeroComVirgula(price1unParDecimal * 10);

  return (
    <div className={styles.topCardPlanCard}>
      <div className={styles.boxCard}>
        <div
          className={styles.cardMainContent}
          style={{ paddingInline: "2vh" }}
        >
          <h3 style={{ fontSize: "3.35vh", color: "#1F1F1F" }}>5 Unidades</h3>
          <img
            className={styles.imageMain}
            src={image5un}
            alt='none'
          />
          <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>
            De R$ {price5unOld} por apenas:
          </h3>
          <div className={styles.priceMain}>
            <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>12X</h3>
            <span
              className={styles.priceValue}
              style={{ color: "#1F1F1F" }}
            >
              R$ {price5unPar}
            </span>
          </div>
          <h3
            style={
              backgroundMain
                ? { fontSize: "2.23vh", color: backgroundMain }
                : { fontSize: "2.23vh", color: "rgba(248, 145, 197, 1)" }
            }
          >
            ou R$ {price5unAVista} à vista
          </h3>
          <div
            style={
              backgroundMain
                ? { backgroundColor: backgroundMain }
                : { backgroundColor: "var(--dexfit-tom2)" }
            }
            className={styles.buttonMain}
          >
            <h2
              className={styles.text}
              style={{
                color: "var(--branco)",
              }}
            >
              EU QUERO
            </h2>
          </div>
        </div>
      </div>

      <div
        className={styles.boxCardMain}
        style={{
          backgroundColor: backgroundMain,
          boxShadow: `0px 4px 63px 0px ${boxShadowMain}`,
        }}
      >
        <div className={styles.mostPop}>
          <h1
            style={
              backgroundMain
                ? { fontSize: "4vh", color: backgroundMain }
                : { fontSize: "4vh" }
            }
          >
            MAIS POPULAR
          </h1>
        </div>
        <div className={styles.cardMainContent}>
          <h3 style={{ fontSize: "3.35vh" }}>Kit 3 unidades</h3>
          <img
            className={styles.imageMainMain}
            src={image3un}
            alt='none'
          />
          <h3 style={{ fontSize: "2.79vh" }}>
            De R$ {price3unOld} por apenas:
          </h3>
          <div className={styles.priceMain}>
            <h3 style={{ fontSize: "2.79vh" }}>12X</h3>
            <span className={styles.priceValue}>R$ {price3unPar}</span>
          </div>
          <h3
            style={
              backgroundMain
                ? { fontSize: "2.23vh", color: "var(--branco)" }
                : { fontSize: "2.23vh", color: "rgba(248, 145, 197, 1)" }
            }
          >
            ou R$ {price3unAVista} à vista
          </h3>
          <div className={styles.buttonMain}>
            <h2
              className={styles.text}
              style={{ color: backgroundMain }}
            >
              EU QUERO
            </h2>
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
            src={image1un}
            alt='none'
          />
          <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>
            De R$ {price1unOld} por apenas:
          </h3>
          <div className={styles.priceMain}>
            <h3 style={{ fontSize: "2.79vh", color: "#1F1F1F" }}>12X</h3>
            <span
              className={styles.priceValue}
              style={{ color: "#1F1F1F" }}
            >
              R$ {price1unPar}
            </span>
          </div>
          <h3
            style={
              backgroundMain
                ? { fontSize: "2.23vh", color: backgroundMain }
                : { fontSize: "2.23vh", color: "rgba(248, 145, 197, 1)" }
            }
          >
            ou R$ {price1unAVista} à vista
          </h3>
          <div
            style={
              backgroundMain
                ? { backgroundColor: backgroundMain }
                : { backgroundColor: "var(--dexfit-tom2)" }
            }
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
