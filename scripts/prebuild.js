const fs  = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');

const rootDirectory = './src/';
const lifeDirectory = `${rootDirectory}life`;
const jsonExtRegExp = new RegExp('.json$');

const prebuild = (directory) => {
  return fs.readdirSync(directory).forEach((name) => {
    const dirpath = `${directory}/${name}`;
    if (jsonExtRegExp.test(name)) {
      const parttern = require(`.${dirpath}`);
      const buildpath = dirpath
        .replace(lifeDirectory, `${rootDirectory}build`)
        .replace('.json', '.ts');
      mkdirp.sync(path.dirname(buildpath));
      fs.writeFileSync(buildpath, `
        import {renderLife} from 'renderer';
        export const title = "${parttern.title}";
        renderLife([${parttern.life.map((arr) => `[${arr.join()}]`).join()}]);
      `);
    } else {
      prebuild(dirpath);
    }
  });
};

prebuild(lifeDirectory);
