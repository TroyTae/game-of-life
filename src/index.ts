import {GameOfLifeEngine} from './engine';

const render = (name: string, engine: GameOfLifeEngine) => {
  const wrapper = document.createElement('DIV');
  const title = document.createElement('H1');
  title.textContent = name;
  wrapper.append(title);
  wrapper.append(engine.canvas);
  document.body.appendChild(wrapper);
  engine.startLife();
};

render('Blinker', new GameOfLifeEngine([
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, true,  true,  true,  false],
  [false, false, false, false, false],
  [false, false, false, false, false],
]));

render('Lighthouse', new GameOfLifeEngine([
  [false, false, false, false, false, false],
  [false, true,  true,  false, false, false],
  [false, true,  false, false, false, false],
  [false, false, false, false, true,  false],
  [false, false, false, true,  true,  false],
  [false, false, false, false, false, false],
]));

render('Toad', new GameOfLifeEngine([
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, true,  true,  true,  false],
  [false, true,  true,  true,  false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
]));
