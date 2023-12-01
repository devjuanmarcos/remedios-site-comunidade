import React, { useState } from "react";
import styles from "./styles.module.css";
import IconComponent from "components/Icon/IconComponent";
import { AiOutlineCaretDown } from "react-icons/ai";
const ExpandCard = ({ title, description, iconName, color, hoverColor }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardHover = {
    backgroundColor: "",
    ...(isHovered
      ? {
          backgroundColor: hoverColor,
        }
      : {}), // Aplicar o estilo de hover quando necessário
  };

  return (
    <div
      className={`${styles.card} ${expanded ? styles.expanded : ""}`}
      onClick={toggleExpand}
      style={cardHover}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconCenter}>
          <IconComponent
            iconName={iconName}
            color={color}
            size={30}
          />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <button
          className={`${styles.expandButton} ${
            expanded ? styles.expandedIcon : ""
          }`}
        >
          <div className={styles.iconCenter}>
            <AiOutlineCaretDown
              color={color}
              size={20}
            />
          </div>
        </button>
      </div>
      <p className={`${styles.cardDescription} ${expanded ? styles.show : ""}`}>
        {description}
      </p>
    </div>
  );
};

export default ExpandCard;
