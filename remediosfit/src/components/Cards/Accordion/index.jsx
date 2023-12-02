import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconComponent from "components/Icon/IconComponent";
import styles from "./styles.module.css";

export default function AccordionCards({
  title,
  description,
  iconName,
  color,
  hoverColor,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [isHovered, setIsHovered] = React.useState(false);

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
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ background: "transparent" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor={color} />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
          className={styles.card}
          style={cardHover}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.iconCenter}>
            <IconComponent
              iconName={iconName}
              color={color}
              size={30}
            />
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
        </AccordionSummary>
        <AccordionDetails
          className={styles.cardDetails}
          style={cardHover}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Typography style={{ width: "100%" }}>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
