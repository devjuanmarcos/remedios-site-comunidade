import styles from "./TopCardPlan.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";
import ButtonMain from "components/Buttons/ButtonMain";

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
        <div className={styles.topCardPlanCard}>
          <div
            className={styles.boxCardMain}
            style={{
              backgroundColor: filteredId.secundaryColor,
              boxShadow: `0px 4px 63px 0px ${filteredId.secundaryColor}`,
            }}
          >
            <div className={styles.cardMainContent}>
              <h3 style={{ fontSize: "3.35vh" }}>Kit 5 unidades</h3>
              <img
                className={styles.imageMainMain}
                src={filteredId.image5un}
                alt='none'
              />
              <h3 style={{ fontSize: "2.79vh" }}>
                De R$ {banner.price5unOld} por apenas:
              </h3>
              <div className={styles.priceMain}>
                <h3 style={{ fontSize: "2.79vh" }}>12X</h3>
                <span className={styles.priceValue}>R$ {banner.price5un}</span>
              </div>
              <h3 style={{ color: "var(--branco)" }}>
                ou R$ {banner.price3un} à vista
              </h3>
              <div className={styles.buttonMain}>
                <h2
                  className={styles.text}
                  style={{ color: filteredId.secundaryColor }}
                >
                  EU QUERO
                </h2>
              </div>
            </div>
          </div>
          <div
            className={styles.boxCardMain}
            style={{
              backgroundColor: filteredId.secundaryColor,
              boxShadow: `0px 4px 63px 0px ${filteredId.secundaryColor}`,
            }}
          >
            <div className={styles.mostPop}>
              <h1
                style={
                  filteredId.secundaryColor
                    ? { fontSize: "4vh", color: filteredId.secundaryColor }
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
                src={filteredId.image3un}
                alt='none'
              />
              <h3 style={{ fontSize: "2.79vh" }}>
                De R$ {banner.price3unOld} por apenas:
              </h3>
              <div className={styles.priceMain}>
                <h3 style={{ fontSize: "2.79vh" }}>12X</h3>
                <span className={styles.priceValue}>R$ {banner.price3un}</span>
              </div>
              <h3 style={{ color: "var(--branco)" }}>
                ou R$ {banner.price3un} à vista
              </h3>
              <div className={styles.buttonMain}>
                <h2
                  className={styles.text}
                  style={{ color: filteredId.secundaryColor }}
                >
                  EU QUERO
                </h2>
              </div>
            </div>
          </div>
          <div
            className={styles.boxCardMain}
            style={{
              backgroundColor: filteredId.secundaryColor,
              boxShadow: `0px 4px 63px 0px ${filteredId.secundaryColor}`,
            }}
          >
            <div className={styles.cardMainContent}>
              <h3 style={{ fontSize: "3.35vh" }}>Kit 1 unidades</h3>
              <img
                className={styles.imageMainMain}
                src={filteredId.image1un}
                alt='none'
              />
              <h3 style={{ fontSize: "2.79vh" }}>
                De R$ {banner.price1unOld} por apenas:
              </h3>
              <div className={styles.priceMain}>
                <h3 style={{ fontSize: "2.79vh" }}>12X</h3>
                <span className={styles.priceValue}>R$ {banner.price1un}</span>
              </div>
              <h3 style={{ color: "var(--branco)" }}>
                ou R$ {banner.price1un} à vista
              </h3>
              <div className={styles.buttonMain}>
                <h2
                  className={styles.text}
                  style={{ color: filteredId.secundaryColor }}
                >
                  EU QUERO
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
