const fs = require('fs-extra');
const path = require('path');
const { readDirectory } = require('./memfs');

const distDir = 'dist';
fs.emptyDirSync(distDir);
const directories = readDirectory('life');
const generatePatterns = (directories) => {
  return directories.reduce((arr, obj) => {
    if (Array.isArray(obj.children)) {
      generatePatterns(obj.children).forEach((v) => arr.push(v));
    } else {
      arr.push(`../life/${obj.path.split(path.sep).slice(1).join('/')}`);
    }
    return arr;
  }, []);
};

fs.writeFileSync(
  path.join('src', 'index.ts'),
  `import { GameOfLifeEngine } from './engine';
import { createElement, APPEND, CANVAS } from 'noliter';
const lifes = [${generatePatterns(directories)
    .map((path) => `import('${path}')`)
    .join(',\n')}];
document.body[APPEND](
  createElement(CANVAS, (cvs) => {
    lifes[0].then(({ life }) => {
      const engine = new GameOfLifeEngine(cvs, life);
      engine.startLife();
    });
  })
);
`
);
