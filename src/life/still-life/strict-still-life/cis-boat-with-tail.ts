import {renderLife} from 'renderer';

export const title = 'Cis-boat with tail';

renderLife([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]);
