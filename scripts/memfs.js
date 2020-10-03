const fs  = require('fs-extra');
const path  = require('path');

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function readDirectory(dir) {
  return fs.readdirSync(dir).map((name) => {
    const targetPath = path.join(dir, name);
    const obj = { name, path: targetPath };

    return isDirectory(targetPath) ? {
      ...obj,
      children: readDirectory(targetPath)
    } : obj;
  });
}

module.exports = {
  isDirectory,
  readDirectory
};
