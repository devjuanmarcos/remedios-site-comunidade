import styles from "./TopCardPlan.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";
import ButtonAnimated from "components/Buttons/ButtonAnimated";

export default function TopCardPlanCard({ type, id }) {
  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }
  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  // function converterStringParaNumeroDecimal(stringComVirgula) {
  //   return parseFloat(stringComVirgula.replace(",", "."));
  // }

  // function formatarNumeroComVirgula(numero) {
  //   return numero.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  // }

  // const price5unParDecimal = converterStringParaNumeroDecimal(
  //   filteredBanner.price5un
  // );
  // const price5unAVista = formatarNumeroComVirgula(price5unParDecimal * 10);

  // const price3unParDecimal = converterStringParaNumeroDecimal(
  //   filteredBanner.price3un
  // );
  // const price3unAVista = formatarNumeroComVirgula(price3unParDecimal * 10);

  // const price1unParDecimal = converterStringParaNumeroDecimal(
  //   filteredBanner.price1un
  // );
  // const price1unAVista = formatarNumeroComVirgula(price1unParDecimal * 10);

  return (
    <>
      {filteredBanner.map((banner) => (
        <div className={styles.main}>
          <div
            className={styles.card}
            style={{
              backgroundColor: filteredId.secundaryColor,
              boxShadow: `0px 4px 63px 0px ${filteredId.secundaryColor}`,
            }}
          >
            <div className={styles.cardContent}>
              <h3 style={{ fontSize: "3.35vh" }}>Kit 5 unidades</h3>
              <img
                className={styles.image}
                src={filteredId.image5un}
                alt='none'
              />
              <h3 style={{ fontSize: "2.79vh", textAlign: "center" }}>
                De R$ {filteredId.price5un} por apenas:
              </h3>
              <div className={styles.priceMain}>
                <h3 style={{ fontSize: "2.79vh" }}>10X</h3>
                <span className={styles.priceValue}>
                  R$ {filteredId.price5un10x}
                </span>
              </div>
              <h3 style={{ color: "var(--branco)" }}>
                ou R$ {filteredId.price5un} à vista
              </h3>
              <div className={styles.button}>
                <ButtonAnimated
                  children={"Eu quero emagrecer"}
                  primaryColor={filteredId.primaryColor}
                  terciaryColor={filteredId.terciaryColor}
                />
              </div>
            </div>
          </div>

          <div
            className={styles.card}
            style={{
              backgroundColor: filteredId.secundaryColor,
              boxShadow: `0px 4px 63px 0px ${filteredId.secundaryColor}`,
            }}
          >
            <div className={styles.cardContent}>
              <h3 style={{ fontSize: "3.35vh" }}>Kit 3 unidades</h3>
              <img
                className={styles.image}
                src={filteredId.image3un}
                alt='none'
              />
              <h3 style={{ fontSize: "2.79vh" }}>
                De R$ {filteredId.price3unOld} por apenas:
              </h3>
              <div className={styles.priceMain}>
                <h3 style={{ fontSize: "2.79vh" }}>10X</h3>
                <span className={styles.priceValue}>
                  R$ {filteredId.price3un10x}
                </span>
              </div>
              <h3 style={{ color: "var(--branco)" }}>
                ou R$ {filteredId.price3un} à vista
              </h3>
              <div className={styles.button}>
                <ButtonAnimated
                  children={"Eu quero emagrecer"}
                  primaryColor={filteredId.primaryColor}
                  terciaryColor={filteredId.terciaryColor}
                />
              </div>
            </div>
          </div>

          <div
            className={styles.card}
            style={{
              backgroundColor: filteredId.secundaryColor,
              boxShadow: `0px 4px 63px 0px ${filteredId.secundaryColor}`,
            }}
          >
            <div className={styles.cardContent}>
              <h3 style={{ fontSize: "3.35vh" }}>Kit 1 unidade</h3>
              <img
                className={styles.image}
                src={filteredId.image1un}
                alt='none'
              />
              <h3 style={{ fontSize: "2.79vh" }}>
                De R$ {filteredId.price1unOld} por apenas:
              </h3>
              <div className={styles.priceMain}>
                <h3 style={{ fontSize: "2.79vh" }}>10X</h3>
                <span className={styles.priceValue}>
                  R$ {filteredId.price1un10x}
                </span>
              </div>
              <h3 style={{ color: "var(--branco)" }}>
                ou R$ {filteredId.price1un} à vista
              </h3>
              <div className={styles.button}>
                <ButtonAnimated
                  children={"Eu quero emagrecer"}
                  primaryColor={filteredId.primaryColor}
                  terciaryColor={filteredId.terciaryColor}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
