"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section = ({ children }: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        margin: "50px 0", // Increased spacing here
      }}
    >
      <section style={{ margin: "60px 0" }}>{children}</section>
    </motion.div>
  );
};

export default Section;
