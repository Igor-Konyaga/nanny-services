

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

export const animateTitle = {
  animate: {
    x: [-300, 0],
    opacity: [0, 1],
  },
  transition: {
    delay: 0.3,
    duration: 1,
  },
};
