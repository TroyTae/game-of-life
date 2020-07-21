const path = require('path');
const {readDirectory} = require('troyjs/node');

const buildPath = path.join('src', 'build');

function parser(dataList) {
  return dataList.reduce((obj, data) => {
    if (Array.isArray(data.children)) {
      const result = parser(data.children);
      for (const entry in result.entries) {
        obj.entries[entry] = result.entries[entry];
      }
      obj.hierarchy[data.name] = result.hierarchy;
    } else {
      const entry = data.path
        .replace(buildPath, '')
        .replace(/^\//, '')
        .replace('.ts', '');
      obj.entries[entry] = data.path.replace(buildPath, 'build');
      obj.hierarchy[entry] = true;
    }
    return obj;
  }, {
    entries: {},
    hierarchy: {},
  });
}

module.exports = function() {
  return parser(readDirectory(buildPath));
};
