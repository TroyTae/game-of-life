import {GameOfLifeEngine} from './engine';

export const renderLife = (life: Life[][], deadColor?: string, surviveColor?: string, backgroundColor?: string): void => {
  if (typeof document !== 'undefined') {
    if (life.reduce((sum, columns) => sum + columns.reduce((v1, v2) => v1 + v2, 0), 0) !== 1) {
      const engine = new GameOfLifeEngine(life, deadColor, surviveColor, backgroundColor);
      document.body.appendChild(engine.canvas);
      engine.startLife();
    } else {
      const message = document.createElement('p');
      message.textContent = 'This pattern is not complete yet!';
      const anchor = document.createElement('a');
      anchor.target = '_blank';
      anchor.href = 'https://github.com/TroyTae/game-of-life';
      anchor.textContent = 'Please help us :)';
      document.body.appendChild(message);
      document.body.appendChild(anchor);
    }
  }
};
