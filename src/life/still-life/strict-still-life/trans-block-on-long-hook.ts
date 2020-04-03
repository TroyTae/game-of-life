import {renderLife} from 'renderer';

export const title = 'Trans-block on long hook';

renderLife([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]);
