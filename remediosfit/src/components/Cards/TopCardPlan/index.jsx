import styles from "./TopCardPlan.module.css";
import React from "react";

import biofitData from "assets/json/biofitData.json";

export default function TopCardPlanCard({ type, id }) {
  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }
  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  function converterStringParaNumeroDecimal(stringComVirgula) {
    return parseFloat(stringComVirgula.replace(",", "."));
  }

  function formatarNumeroComVirgula(numero) {
    return numero.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }

  const price5unParDecimal = converterStringParaNumeroDecimal(
    filteredBanner.price5un
  );
  const price5unAVista = formatarNumeroComVirgula(price5unParDecimal * 10);

  const price3unParDecimal = converterStringParaNumeroDecimal(
    filteredBanner.price3un
  );
  const price3unAVista = formatarNumeroComVirgula(price3unParDecimal * 10);

  const price1unParDecimal = converterStringParaNumeroDecimal(
    filteredBanner.price1un
  );
  const price1unAVista = formatarNumeroComVirgula(price1unParDecimal * 10);

  return (
    <>
      {filteredBanner.map((banner) => (
        <div className={styles.container}>
          {/* <div className={styles.card}>a</div> */}
          <div
            className={styles.cardMain}
            style={{
              backgroundColor: filteredId.secundaryColor,
              boxShadow: `0px 4px 63px 0px ${filteredId.secundaryColor}`,
            }}
          >
            <div
              className={styles.promoTape}
              style={{
                backgroundColor: "var(--branco)",
              }}
            >
              <h3 style={{ color: filteredId.secundaryColor }}>
                O MAIS PROCURADO
              </h3>
            </div>
            <div className={styles.cardContent}>
              <h3 style={{}}>Kit 3 Unidades</h3>
              <img
                className={styles.image}
                src={banner.image3un}
                alt='none'
              />
              <h3 style={{}}>Kit 3 Unidades</h3>
              <h1 style={{}}>{`R$ ${banner.price3un * 3}`}</h1>
            </div>
          </div>
          {/* <div className={styles.card}>a</div> */}
        </div>
      ))}
    </>
  );
}
