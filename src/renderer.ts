import {GameOfLifeEngine} from './engine';

const CONTAINER_CLASS_NAME = 'container';

const createContainer = (...children) => {
  const tag = document.createElement('DIV');
  tag.className = CONTAINER_CLASS_NAME;
  children.forEach((child) => tag.appendChild(child));
  return tag;
};

const createTitle = (text: string, titleType: TitleType) => {
  const tag = document.createElement(`H${titleType}`);
  tag.textContent = text;
  return tag;
};

export const renderTitle = (text: string, titleType: TitleType) => {
  const title = createTitle(text, titleType);
  document.body.appendChild(title);
};

export const renderLife = (text: string, life: Life[][]) => {
  const title = createTitle(text, 3);
  const engine = new GameOfLifeEngine(life);
  const container = createContainer(title, engine.canvas);
  document.body.appendChild(container);
  engine.startLife();
};
