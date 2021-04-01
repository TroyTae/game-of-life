const fs = require('fs-extra');
const path = require('path');
const { readDirectory } = require('./memfs');

const distDir = 'docs';
fs.emptyDirSync(distDir);
const readPatterns = (directories) => {
  return directories.reduce((arr, obj) => {
    if (Array.isArray(obj.children)) {
      readPatterns(obj.children).forEach((v) => arr.push(v));
    } else {
      arr.push(require(path.join('..', obj.path)));
    }
    return arr;
  }, []);
};

fs.writeFileSync(
  path.join('src', 'patterns.ts'),
  `export default [
${readPatterns(readDirectory('patterns'))
  .map((pattern) => JSON.stringify(pattern))
  .join(',\n')}
] as Array<{ title: string; life: Life[][]; }>;
`
);
