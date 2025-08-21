import type { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number = 0
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number = 0.2,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};
