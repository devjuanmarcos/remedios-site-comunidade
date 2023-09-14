import CommentCard from "components/Cards/Comment";
import styles from "./FourCards.module.css";
import React from "react";
import image2 from "assets/images/cardImage2.png";

export default function FourCardsBanner() {
  return (
    <div className={styles.fourCardsBanner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Não perca os relatos impressionantes de profissionais que indicam
          nosso produto
        </h1>
        <div className={styles.boxCard}>
          <CommentCard
            children={"ISABELA OLIVEIRA, NUTRICIONISTA- RJ"}
            children2={
              "“Sou nutricionista, e em meus atendimentos com minhas clientes que sofrem de muita retenção de líquido sempre indico o BRASIL SLIM – DEXFIT ele é um excelente diurético, realmente ele cumpre o que promete. Super recomendo.”"
            }
            img={image2}
          />
          <CommentCard
            children={"ISABELA OLIVEIRA, NUTRICIONISTA- RJ"}
            children2={
              "“Sou nutricionista, e em meus atendimentos com minhas clientes que sofrem de muita retenção de líquido sempre indico o BRASIL SLIM – DEXFIT ele é um excelente diurético, realmente ele cumpre o que promete. Super recomendo.”"
            }
            img={image2}
          />
          <CommentCard
            children={"ISABELA OLIVEIRA, NUTRICIONISTA- RJ"}
            children2={
              "“Sou nutricionista, e em meus atendimentos com minhas clientes que sofrem de muita retenção de líquido sempre indico o BRASIL SLIM – DEXFIT ele é um excelente diurético, realmente ele cumpre o que promete. Super recomendo.”"
            }
            img={image2}
          />
          <CommentCard
            children={"ISABELA OLIVEIRA, NUTRICIONISTA- RJ"}
            children2={
              "“Sou nutricionista, e em meus atendimentos com minhas clientes que sofrem de muita retenção de líquido sempre indico o BRASIL SLIM – DEXFIT ele é um excelente diurético, realmente ele cumpre o que promete. Super recomendo.”"
            }
            img={image2}
          />
        </div>
      </div>
    </div>
  );
}
