import {renderLife} from 'renderer';

export const title = 'Block on boat';

renderLife([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]);
