export const perspective = {
  initial: {
    scale: 1,
    y: "0vh",
  },
  enter: {
    scale: 1,
    y: "0vh",
  },
  exit: {
    scale: 0.9,
    y: "-10vh",
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: "0vh",
  },
};

export const exitSlide = {
  initial: {
    y: "0vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: "0vh",
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};
