import { GameOfLifeEngine } from './engine';
import { createElement, APPEND, CANVAS } from 'noliter';
import patterns from './patterns';

document.body[APPEND](
  createElement(CANVAS, (cvs) => {
    const engine = new GameOfLifeEngine(cvs, patterns[0].life);
    engine.startLife();
  })
);
