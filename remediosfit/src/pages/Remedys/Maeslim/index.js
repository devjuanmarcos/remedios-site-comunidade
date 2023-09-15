import styles from "./Maeslim.module.css";
import React from "react";
import BannerMain1 from "components/Banners/BannerMain1";
import fundoImage from "assets/images/remediosVoadores.svg";
import maeSlimImage from "assets/images/MaeSlim.svg";
export default function Maeslim() {
  return (
    <div className={styles.maeslim}>
      <BannerMain1
        remedio={maeSlimImage}
        fundo={fundoImage}
        widthImage='620px'
        titleColor='var(--maeslim-tom2)'
        title={"Volte ao seu peso de antes da gravidez"}
        subTitle={"Com apenas duas cápsulas por dia!"}
        paragraph={
          "Mãe Slim: A solução natural e Segura para voltar ao peso de antes da gravidez rapidamente, sem efeitos colaterais!"
        }
        buttonColor='var(--maeslim-tom2)'
      />
    </div>
  );
}
