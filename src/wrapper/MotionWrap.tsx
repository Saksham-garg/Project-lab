"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component: React.FC, classNames: string) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} flex items-center justify-center`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
