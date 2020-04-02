import {renderLife} from 'renderer';

export const title = 'Beehive on Table';

renderLife([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]);
