import React from "react";
import styles from "./Menu.module.css";
import logo from "assets/images/logoProvisoria.png";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={logo}
          alt='none'
        />
        <h4 style={{ fontWeight: "900" }}>Home</h4>
        <h4>DexFit</h4>
        <h4>MaeSlim</h4>
        <h4>Detox</h4>
        <h4>Home Care</h4>
        <h4 style={{ fontWeight: "900" }}>Contatos</h4>
      </div>
    </div>
  );
}
