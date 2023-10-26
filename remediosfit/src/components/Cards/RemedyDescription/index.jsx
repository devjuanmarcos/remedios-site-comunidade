import styles from "./styles.module.css";
import React from "react";
import { motion } from "framer-motion";

export default function RemedyDescriptionCard({ title, paragraph, image }) {
  return (
    <motion.div className={styles.card}>
      <motion.div className={styles.text}>
        <h2 style={{ color: "var(--branco)" }}>{title}</h2>
        <p>{paragraph}</p>
      </motion.div>
      <motion.div className={styles.image}>
        <img
          src={image}
          alt='none'
        />
      </motion.div>
    </motion.div>
  );
}
