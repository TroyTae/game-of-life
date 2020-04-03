import {renderLife} from 'renderer';

export const title = 'Very long shillelagh';

renderLife([
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]);
