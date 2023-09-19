import styles from "./ProfessionalOpinion.module.css";
import globalStyles from "styles/globalStyles.module.css";

import React from "react";

export default function ProfessionalOpinionBanner({ color }) {
  return (
    <div className={styles.professionalOpinionBanner}>
      <h1
        className={styles.title}
        style={{ color: color }}
      >
        O MãeSlim:{" "}
        <span style={{ color: "#fff" }}>
          A escolha das clínicas renomadas e dos profissionais de saúde.
        </span>
      </h1>
      <div className={styles.cardBox}>
        <div
          className={styles.box}
          style={{ backgroundColor: "var(--branco)" }}
        >
          <img
            className={styles.logo}
            src=''
            alt='none'
          />
          <h1
            className={globalStyles.subtitulo}
            style={{ color: "var(--secundaria-preto)" }}
          >
            Brasil Slim
          </h1>
          <h4 style={{ color: "#232323" }}>@brasil.slim</h4>
          <h4 style={{ color: "#232323", marginTop: "16px" }}>
            “Utilizamos na nossa rede com nossos clientes o Mãe Slim e desde que
            começamos a utilizar os resultados no emagrecimento melhoraram
            muito. Somos gratos por ter conhecido um produto tão incrível. Hoje
            dentro das clínicas Brasil Slim não sai um cliente sem levar o
            emagrecedor queridinho das mulheres do Brasil”
          </h4>
        </div>
        <div
          className={styles.box}
          style={{ backgroundColor: "var(--maeslim-tom2)" }}
        >
          <img
            className={styles.logo}
            src=''
            alt='none'
          />
          <h1
            className={globalStyles.subtitulo}
            style={{ color: "var(--branco)" }}
          >
            Brasil Slim
          </h1>
          <h4 style={{ color: "var(--branco)" }}>@brasil.slim</h4>
          <h4 style={{ color: "var(--branco)", marginTop: "16px" }}>
            “Utilizamos na nossa rede com nossos clientes o Mãe Slim e desde que
            começamos a utilizar os resultados no emagrecimento melhoraram
            muito. Somos gratos por ter conhecido um produto tão incrível. Hoje
            dentro das clínicas Brasil Slim não sai um cliente sem levar o
            emagrecedor queridinho das mulheres do Brasil”
          </h4>
        </div>
        <div
          className={styles.box}
          style={{ backgroundColor: "var(--branco)" }}
        >
          <img
            className={styles.logo}
            src=''
            alt='none'
          />
          <h1
            className={globalStyles.subtitulo}
            style={{ color: "var(--secundaria-preto)" }}
          >
            Brasil Slim
          </h1>
          <h4 style={{ color: "#232323" }}>@brasil.slim</h4>
          <h4 style={{ color: "#232323", marginTop: "16px" }}>
            “Utilizamos na nossa rede com nossos clientes o Mãe Slim e desde que
            começamos a utilizar os resultados no emagrecimento melhoraram
            muito. Somos gratos por ter conhecido um produto tão incrível. Hoje
            dentro das clínicas Brasil Slim não sai um cliente sem levar o
            emagrecedor queridinho das mulheres do Brasil”
          </h4>
        </div>
      </div>
    </div>
  );
}
