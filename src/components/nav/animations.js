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

export const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
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
