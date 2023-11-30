import styles from "./styles.module.css";
import { ContainerMenuClosed, ContainerMenuVisible } from "./styles.jsx";
import React from "react";
import { MenuLink } from "components/Menu";
import { useState } from "react";

export default function MenuMobile() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <ContainerMenuClosed
        className={styles.container}
        style={menuIsVisible ? { display: "none" } : { display: "flex" }}
        onClick={() => setMenuIsVisible(true)}
      >
        <h1 style={{ color: "var(--branco)" }}>BIOFIT</h1>
      </ContainerMenuClosed>

      <ContainerMenuVisible
        isVisible={menuIsVisible}
        style={menuIsVisible ? { display: "flex" } : { display: "none" }}
        onClick={() => setMenuIsVisible(false)}
      >
        <MenuLink
          to={"/"}
          fontWeight={900}
        >
          Home
        </MenuLink>
        <MenuLink to={"maeslim"}>MaeSlim</MenuLink>
        <MenuLink to={"detoxblack"}>Detox</MenuLink>
        <MenuLink to={"dexfit"}>DexFit</MenuLink>
        <MenuLink to={"homecare"}>Home Care</MenuLink>
        <MenuLink
          to={"about"}
          fontWeight={900}
        >
          Sobre nós
        </MenuLink>
      </ContainerMenuVisible>
    </>
  );
}
