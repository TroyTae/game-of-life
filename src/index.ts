import { GameOfLifeEngine } from './engine';
import {
  createElement,
  APPEND,
  CANVAS,
  INPUT,
  DATALIST,
  OPTION,
  MAIN,
  VALUE,
  ADD_EVENT_LISTENER,
  CHANGE,
} from 'noliter';
import patterns from './patterns';

const canvas = createElement(CANVAS);
const engine = new GameOfLifeEngine(canvas, patterns[0].life);
const DATALIST_ID = 'patterns';

document.body[APPEND](
  createElement(MAIN, (main) => {
    main[APPEND](
      createElement(DATALIST, (datalist) => {
        datalist.id = DATALIST_ID;
        patterns.forEach(({ title }) =>
          datalist[APPEND](
            createElement(OPTION, (option) => {
              option[VALUE] = title;
            })
          )
        );
      }),
      createElement(INPUT, (input) => {
        input.spellcheck = false;
        input[VALUE] = patterns[0].title;
        input.setAttribute('list', DATALIST_ID);
        input[ADD_EVENT_LISTENER](CHANGE, () => {
          const pattern = patterns.filter(
            ({ title }) => title === input.value
          )[0];
          if (pattern) {
            engine.setLife(pattern.life);
          }
        });
      })
    );
  }),
  canvas
);
