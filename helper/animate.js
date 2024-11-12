export const baseAnimate = (variants = {}) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};

export const slideImageAnimate = (variants = {}, custom) => {
  return {
    custom,
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};

export const slideRightAnimate = (variants = {}, custom) => {
  return {
    custom,
    variants,
    initial: 'hidden',
    animate: 'show',
    exit: 'exit',
  };
};
