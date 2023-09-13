import React from "react";
import styles from "./Menu.module.css";
import logo from "assets/images/logoProvisoria.png";
import { NavLink } from "react-router-dom";

export const MenuLink = ({ children, to, fontWeight }) => {
  return (
    <NavLink
      to={to}
      end
    >
      <h4 style={{ fontWeight: `${fontWeight}` }}>{children}</h4>
    </NavLink>
  );
};

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={logo}
          alt='none'
        />
        <MenuLink
          to={"/"}
          fontWeight={900}
        >
          Home
        </MenuLink>
        <MenuLink to={"dexfit"}>DexFit</MenuLink>
        <MenuLink>MaeSlim</MenuLink>
        <MenuLink>Detox</MenuLink>
        <MenuLink>Home Care</MenuLink>
        <MenuLink
          to={"/h"}
          children='Contatos'
          fontWeight={900}
        />
      </div>
    </div>
  );
}
