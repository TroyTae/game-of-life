import {renderLife} from 'renderer';

export const title = 'Up snake on table';

renderLife([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
