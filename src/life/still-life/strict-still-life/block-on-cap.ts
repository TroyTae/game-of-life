import {renderLife} from 'renderer';

export const title = 'Block on cap';

renderLife([
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]);
