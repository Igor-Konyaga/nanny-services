export const animateModal = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  transition: {
    duration: 0.5,
  },
  exit: {
    scale: 0,
  },
};
export const animateOverlay = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
  exit: {
    opacity: 0,
  },
};

export const variantsAnimTitle = {
  hidden: { opacity: 0, x: -300 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.3,
    },
  }),
};
export const variantsAnimCard = {
  hidden: { opacity: 0, x: 500 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.4,
    },
  }),
};
