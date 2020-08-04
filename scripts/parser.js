const path = require('path');
const { readDirectory } = require('troyjs/node');

const buildPath = path.join('src', 'build');
const jsonPath = path.join('..', 'src', 'life');
const sepRegExp = new RegExp(`\\${path.sep}`, 'g');

function parser(dataList) {
  return dataList.reduce(
    (obj, data) => {
      if (Array.isArray(data.children)) {
        const result = parser(data.children);
        for (const entry in result.entries) {
          obj.entries[entry] = result.entries[entry];
        }
        obj.hierarchy[data.name] = result.hierarchy;
      } else {
        const entry = data.path
          .replace(buildPath + path.sep, '')
          .replace('.ts', '')
          .replace(sepRegExp, '/');
        obj.entries[entry] = data.path.replace(buildPath, 'build').replace(sepRegExp, '/');
        const life = require(path.join(jsonPath, `${entry}.json`));
        obj.hierarchy[entry] = life.title;
      }
      return obj;
    },
    {
      entries: {},
      hierarchy: {},
    }
  );
}

module.exports = function () {
  return parser(readDirectory(buildPath));
};
