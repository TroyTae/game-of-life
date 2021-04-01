import { GameOfLifeEngine } from './engine';
import { createElement, APPEND, CANVAS, LABEL, INPUT, DATALIST, OPTION, MAIN } from 'noliter';
import patterns from './patterns';

const DATALIST_ID = 'patterns';

document.body[APPEND](
  createElement(MAIN, (main) => {
    main[APPEND](
      createElement(DATALIST, (datalist) => {
        datalist.id = DATALIST_ID;
        patterns.forEach(({ title }) =>
          datalist[APPEND](
            createElement(OPTION, (option) => {
              option.value = title;
            })
          )
        );
      }),
      createElement(INPUT, (input) => {
        input.setAttribute('list', DATALIST_ID);
      })
    );
  })
  // createElement(CANVAS, (cvs) => {
  //   const engine = new GameOfLifeEngine(cvs, patterns[0].life);
  //   engine.startLife();
  // })
);
