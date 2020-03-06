import OneSpaces from 'one-spaces';

import {CONTAINER_CLASS_NAME} from './constants';
import {GameOfLifeEngine} from './engine';

const createContainer = (...children): HTMLElement => {
  const tag = document.createElement('DIV');
  tag.className = OneSpaces(CONTAINER_CLASS_NAME);
  children.forEach((child) => tag.appendChild(child));
  return tag;
};

const createTitle = (text: string, titleType: TitleType): HTMLElement => {
  const tag = document.createElement(`H${titleType}`);
  tag.textContent = text;
  return tag;
};

export const renderTitle = (text: string, titleType: TitleType): void => {
  const title = createTitle(text, titleType);
  document.body.appendChild(title);
};

export const renderLife = (text: string, life: Life[][]): void => {
  if (life.reduce((sum, columns) => sum + columns.reduce((v1, v2) => v1 + v2, 0), 0) !== 1) {
    const title = createTitle(text, 3);
    const engine = new GameOfLifeEngine(life);
    const container = createContainer(title, engine.canvas);
    document.body.appendChild(container);
    engine.startLife();
  }
};
