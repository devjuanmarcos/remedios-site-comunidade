import styles from "./Maeslim.module.css";
import React from "react";
import fundoImage from "assets/images/remediosVoadores.svg";
import maeSlimImage from "assets/images/MaeSlim.svg";
import photoImageWithTextsBanner from "assets/images/mae.png";
import BannerMain1 from "components/Banners/BannerMain1";
import TextsWithCardsBanner from "components/Banners/TextsWithCards";
import ImageWithTextsBanner from "components/Banners/ImageWithTexts";
import dataTexts from "assets/json/imageWithTexts.json";
import ProfessionalOpinionBanner from "components/Banners/ProfessionalOpinion";
import TextWithCarouselBanner from "components/Banners/TextWithCarousel";

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
      <ImageWithTextsBanner
        color={"var(--maeslim-cor-principal"}
        dataTexts={dataTexts}
        image={photoImageWithTextsBanner}
        title={"Transforme sua vida: "}
        subTitle={
          "Recupere sua autoestima e redescubra a mulher incrível que existe em você"
        }
        t
        titleColor={"var(--maeslim-cor-principal"}
      />
      <ProfessionalOpinionBanner color='var(--maeslim-tom2' />
      <TextWithCarouselBanner
        title={"Descubra os incríveis resultados de mães "}
        subTitle={"que já experimentaram o MãeSlim!"}
        paragraph={
          "Perca peso de forma saudável e recupere sua confiança pós-parto com o poder do MãeSlim - O segredo das mães que conquistaram resultados surpreendentes."
        }
        buttonColor={"var(--maeslim-cor-principal"}
        titleColor={"var(--maeslim-cor-principal"}
      />
    </div>
  );
}
