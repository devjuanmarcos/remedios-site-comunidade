import styles from "./styles.module.css";
import React from "react";
import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import biofitData from "assets/json/biofitData.json";
import RemedyDescriptionCard from "components/Cards/RemedyDescription";

export default function CarouselCardsBanner({ background, id, type }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const filteredId = biofitData.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }
  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            background
              ? {
                  backgroundColor: background,
                  width: "100%",
                }
              : null
          }
          className={styles.threeItensTextBanner}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <h2 style={{ color: "var(--branco)" }}>{banner.subtitle}</h2>
              <h1 style={{ color: filteredId.primaryColor }}>{banner.title}</h1>
            </div>
            <div className={styles.carouselContainer}>
              <motion.div
                ref={carousel}
                className={styles.carousel}
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  className={styles.inner}
                  drag='x'
                  dragConstraints={{ right: 0, left: -width }}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {banner.itens.map((item, id) => (
                    <RemedyDescriptionCard
                      key={id}
                      title={item.title}
                      paragraph={item.paragraph}
                      image={item.image}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
