import {DOTS_STYLE} from './constants';

export const getCoordinateX = (x: number): number => {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.WIDTH) * x + DOTS_STYLE.MARGIN;
};

export const getCoordinateY = (y: number): number => {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.HEIGHT) * y + DOTS_STYLE.MARGIN;
};
