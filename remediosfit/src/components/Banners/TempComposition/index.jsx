import styles from "./Composition.module.css";
import React from "react";

export function ParagraphTitle({ title, paragraph }) {
  return (
    <div style={{ width: "100%" }}>
      <h1 className={styles.paragraphH1}>{title}</h1>
      <p className={styles.paragraphP}>{paragraph}</p>
    </div>
  );
}

export default function CompositionBanner() {
  return (
    <section className={styles.compositionBanner}>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          src=' https://remedios-site-comunidade.vercel.app/static/media/dexfit.e0555a5fc56e55c9b938e2114c0ad78c.svg'
          alt=''
        />
        <button className={styles.button}>EU QUERO EMAGRECER</button>
      </div>
      <div className={styles.textBox}>
        <h1 style={{ color: "var(--branco)" }}>Nossa composição</h1>
        <ParagraphTitle
          title='Café verde'
          paragraph='O café verde também tem ação diurética, combatendo a retenção de líquidos e inchaço corporal.'
        />
        <ParagraphTitle
          title='TRANS RESVERATROL'
          paragraph='Auxilia na prevenção do envelhecimento, auxiliando a elasticidade e firmeza da pele, preserva a juventude da pele e combate os radicais livres.
          '
        />
        <ParagraphTitle
          title='VITAMINA B12'
          paragraph='Quando fermentadas pelas bactérias no intestino contribui para a absorção de cálcio, magnésio e ferro. Além de contribuírem para a saúde intestinal.'
        />
        <ParagraphTitle
          title='EXTRATO DE LARANJA MORO'
          paragraph='Laranja Moro ajuda no processo de lipólise no organismo, o que promove a redução de líquidos, e sensação de inchaço.'
        />
        <ParagraphTitle
          title='INULINA'
          paragraph='Quando fermentadas pelas bactérias no intestino contribui para a absorção de cálcio, magnésio e ferro. Além de contribuírem para a saúde intestinal.'
        />
      </div>
    </section>
  );
}
