const fs = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');
const { readDirectory } = require('troyjs/node');

const lifePath = path.join('src', 'life');
const buildPath = path.join('src', 'build');

function prebuild(dataList) {
  dataList.forEach((data) => {
    if (Array.isArray(data.children)) {
      prebuild(data.children);
    } else {
      const jsonPath = path.join('..', data.path);
      const tsPath = data.path.replace(path.join(lifePath), buildPath).replace('.json', '.ts');
      if (
        !fs.existsSync(tsPath) ||
        fs.statSync(data.path).mtime > fs.statSync(tsPath).mtime
      ) {
        const pattern = require(jsonPath);
        mkdirp.sync(path.dirname(tsPath));
        fs.writeFileSync(tsPath, `
          import {renderLife} from 'renderer';
          export const title = "${pattern.title}";
          renderLife([${pattern.life.map((arr) => `[${arr.join()}]`).join()}]);
        `);
      }
    }
  });
}

prebuild(readDirectory(lifePath));
