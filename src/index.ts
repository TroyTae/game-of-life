import { GameOfLifeEngine } from './engine';
import { createElement, APPEND, CANVAS } from 'noliter';
import LIFES from './life';

document.body[APPEND](
  createElement(CANVAS, (cvs) => {
    const engine = new GameOfLifeEngine(cvs, LIFES[0].life);
    engine.startLife();
  })
);
