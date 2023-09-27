import styles from "./VideoBanner.module.css";
import React from "react";
import ButtonMain from "components/Buttons/ButtonMain";

export default function VideoBanner({ src, buttonWidth }) {
  return (
    <section className={styles.videoBanner}>
      <iframe
        width='840'
        height='472'
        src={src}
        title='HTML Vídeo 11 - Como inserir vídeos do Youtube na página WEB'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <div style={{ width: buttonWidth }}>
        <ButtonMain color='var(--detoxBlack-cor-principal)' />
      </div>
    </section>
  );
}
