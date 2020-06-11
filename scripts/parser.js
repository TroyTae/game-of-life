const fs  = require('fs-extra');

const tsExtRegExp = new RegExp('.ts$', 'g');
const buildDirectory = './src/build';
const buildDirectoryRegExp = new RegExp(`^${buildDirectory}/`, 'g');

const parser = (directory) => {
  return fs.readdirSync(directory).reduce((obj, name) => {
    const dirpath = `${directory}/${name}`;
    if (tsExtRegExp.test(name)) {
      const entry = dirpath.replace(buildDirectoryRegExp, '').replace(tsExtRegExp, '');
      obj.entries[entry] = dirpath;
      obj.hierarchy[entry] = true;
    } else {
      const data = parser(dirpath);
      obj.entries = {
        ...obj.entries,
        ...data.entries,
      };
      obj.hierarchy[name] = data.hierarchy;
    }
    return obj;
  }, {
    entries: {},
    hierarchy: {},
  });
};

module.exports = parser(buildDirectory);
