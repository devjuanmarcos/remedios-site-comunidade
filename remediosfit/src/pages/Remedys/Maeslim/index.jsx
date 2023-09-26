import styles from "./Maeslim.module.css";
import React from "react";

import fundoImage from "assets/images/remediosVoadores.svg";
import maeSlimImage from "assets/images/MaeSlim.svg";
import photoImageWithTextsBanner from "assets/images/mae.png";
import anvisa from "assets/images/anvisa.svg";
import threeG from "assets/images/threeG.svg";
import thamara from "assets/images/thamara.svg";
import capricho from "assets/images/capricho.svg";
import livresaude from "assets/images/livresaude.svg";
import metropole from "assets/images/metropole.svg";
import maeslim5un from "assets/images/maeslim5un.svg";
import maeslim3un from "assets/images/maeslim3un.svg";
import maeslim1un from "assets/images/maeslim1un.svg";
import twcbBackground from "assets/images/twcbBackground.svg";

import dataTexts from "assets/json/imageWithTexts.json";

import BannerMain1 from "components/Banners/BannerMain1";
import TextsWithCardsBanner from "components/Banners/TextsWithCards";
import ImageWithTextsBanner from "components/Banners/ImageWithTexts";
import ProfessionalOpinionBanner from "components/Banners/ProfessionalOpinion";
import TextWithCarouselBanner from "components/Banners/TextWithCarousel";
import BusinessOpinionBanner from "components/Banners/BusinessOpinion";
import TopThreeItensBanner from "components/Banners/TopThreeItens";

export default function Maeslim() {
  const twcbChildrens = [
    "Acelere seu metabolismo de forma natural e segura",
    "Mais saciedade, menos comida",
    "Redução de medidas visível em pouco tempo",
    "Pele, cabelos e unhas mais saudáveis e jovens",
  ];

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
        cardColor={"var(--maeslim-cor-principal)"}
        childrensP={twcbChildrens}
      />
      <ImageWithTextsBanner
        color={"var(--maeslim-cor-principal"}
        dataTexts={dataTexts}
        image={photoImageWithTextsBanner}
        title={"Transforme sua vida: "}
        subTitle={"Recupere sua autoestima por completo"}
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
      <ImageWithTextsBanner
        title={"MãeSlim: Aprovado pela ANVISA"}
        subTitle={"Para um emagrecimento de forma rápida e segura!"}
        paragraph={
          "Confie no emagrecedor especial para mães, com compostos seguros aprovados pela ANVISA. Reduza suas medidas pós-gravidez sem riscos!"
        }
        image={anvisa}
        titleColor={"var(--maeslim-cor-principal"}
        backColor={true}
        downButton={true}
        imgDownButton={threeG}
      />
      <ImageWithTextsBanner
        title={"Altamente recomendado"}
        subTitle={"pelos mais renomados especialistas"}
        titleColor={"var(--maeslim-cor-principal"}
        paragraph={
          "Especialistas renomados de todo o Brasil estão unânimes em recomendar o MãeSlim como a solução perfeita para mães que desejam se livrar da gordura localizada, fortalecer a pele e alcançar a perda de peso de forma natural e eficaz. Este produto encapsulado, cuidadosamente desenvolvido, tem se mostrado uma opção confiável e com resultados comprovados."
        }
        image={thamara}
        downImage={true}
      />
      <BusinessOpinionBanner
        title={"O que as "}
        color={"var(--maeslim-tom2)"}
        titleColored={"grandes marcas "}
        titleContinue={"dizem sobre os componentes"}
        blur={true}
        background={"rgba(70, 43, 92, 0.30)"}
        image1={capricho}
        paragraph1={`"...os principais benefícios do uso do agente o clareamento de manchas, uniformização do tom de pele por ter uma ação inibidora da melanina e iluminação do rosto. Além disso, o ingrediente é potente para peles mais maduras para a redução de rugas e linhas de expressão, justamente por estimular a produção de colágeno."
        `}
        image2={livresaude}
        paragraph2={`"(A Quitosana) é natural e tem se tornado referência para uma série de benefícios para um rápido emagrecimento e perda de gorduras, já que ela pode causar maior saciedade após as refeições e reduzir a absorção de gorduras."
        `}
        image3={metropole}
        paragraph3={`A spirulina é um tipo de alga utilizada como suplemento natural, é fonte de vitaminas, minerais, antioxidantes e é, inclusive, considerada um superalimento, proporcionando diversos benefícios à saúde. Além de todos esses benefícios, contar com o auxílio dela na dieta para perder aquela gordurinha é, de fato, certeiro."`}
      />
      <TopThreeItensBanner
        text1={"Chegou momento de você "}
        textColored1={"retomar o controle, "}
        text2={"recuperar o corpor "}
        textColored2={"e elevar sua autoestima ao máximo!"}
        color={"var(--maeslim-tom2)"}
        backgroundMainP={"var(--maeslim-cor-principal)"}
        boxShadowMainp={"var(--maeslim-tom2"}
        image5unP={maeslim5un}
        image3unP={maeslim3un}
        image1unP={maeslim1un}
        price5unOldP={"594,00"}
        price5unParP={"29,70"}
        price3unOldP={"595,00"}
        price3unParP={"39,70"}
        price1unOldP={"596,00"}
        price1unParP={"49,70"}
      />
      <TextsWithCardsBanner
        title={"A composição perfeita"}
        paragraph={
          "Cada componente foi cuidadosamente escolhido para fornecer suporte metabólico, aumentar a queima de gordura, controlar o apetite e melhorar os níveis de energia."
        }
        buttonColor={"var(--maeslim-cor-principal"}
        titleColor={"var(--maeslim-cor-principal"}
        cardColor={"var(--maeslim-cor-principal)"}
        childrensP={twcbChildrens}
        iconP={true}
        background={twcbBackground}
      />
      <ImageWithTextsBanner />
    </div>
  );
}
