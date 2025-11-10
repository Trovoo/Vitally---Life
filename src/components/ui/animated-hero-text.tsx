"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface AnimatedHeroTextProps {
  phrases: string[];
  className?: string;
}

export const AnimatedHeroText: React.FC<AnimatedHeroTextProps> = ({
  phrases,
  className = "",
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls, currentPhraseIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentPhraseIndex, phrases.length]);

  const words = phrases[currentPhraseIndex].split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      key={currentPhraseIndex}
      className={`flex flex-wrap gap-2 justify-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${currentPhraseIndex}-${index}`}
          variants={wordVariants}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
