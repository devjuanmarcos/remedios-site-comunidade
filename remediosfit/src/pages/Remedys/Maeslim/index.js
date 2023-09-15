import styles from "./Maeslim.module.css";
import React from "react";
import BannerMain1 from "components/Banners/BannerMain1";
import fundoImage from "assets/images/remediosVoadores.svg";
import maeSlimImage from "assets/images/MaeSlim.svg";
import TextsWithCardsBanner from "components/Banners/TextsWithCards";
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
      <TextsWithCardsBanner
        title={"Maternidade saudável e equilibrada: "}
        subTitle={"Descubra os benefícios do MãeSlim"}
        paragraph={
          "Acelere seu metabolismo, reduza medidas, sinta-se saciada, potencialize a evacuação e tenha uma aparência radiante. Uma maternidade saudável e em forma ao seu alcance!"
        }
        buttonColor={"var(--maeslim-cor-principal"}
        titleColor={"var(--maeslim-cor-principal"}
      />
    </div>
  );
}
