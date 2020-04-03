import {renderLife} from 'renderer';

export const title = 'Trans-fuse with two tails';

renderLife([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]);
