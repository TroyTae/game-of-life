import { GameOfLifeEngine } from './engine';

export const renderLife = (life: Life[][]): void => {
  if (typeof document !== 'undefined') {
    if (life.reduce((sum, columns) => sum + columns.reduce((v1: number, v2) => v1 + v2, 0), 0) !== 1) {
      const engine = new GameOfLifeEngine(life);
      document.body.appendChild(engine.canvas);
      engine.startLife();
    } else {
      const message = document.createElement('p');
      message.textContent = 'This pattern is not complete yet!';
      const anchor = document.createElement('a');
      anchor.target = '_blank';
      anchor.href = 'https://github.com/TroyTae/game-of-life/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22';
      anchor.textContent = 'Please help us :)';
      document.body.appendChild(message);
      document.body.appendChild(anchor);
    }
  }
};
