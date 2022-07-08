export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { y: -5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

export const sidebarVariants = {
  open: {
    // clipPath: `circle(1200px at 230px 40px)`,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    // clipPath: `circle(25px at 230px 40px)`,
    x: 300,
    transition: {
      duration: 0.1,
      delay: 0,
    },
  },
};
