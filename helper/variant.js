import { easeInOut } from 'framer-motion';

export const slideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };
};

export const imageSlide = {
  initial: (direction) => {
    return {
      x: direction > 0 ? '100vw' : '-100vw',
    };
  },
  enter: {
    x: 0,
    transition: {
      duration: 0.75,
      delay: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      x: 0,
    },
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '100vw' : '-100vw',
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    };
  },
};