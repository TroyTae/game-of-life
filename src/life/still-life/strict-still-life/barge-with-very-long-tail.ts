import {renderLife} from 'renderer';

export const title = 'Barge with Very Long Tail';

renderLife([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
