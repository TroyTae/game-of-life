const fs = require('fs-extra');
const path = require('path');
const { readDirectory } = require('troyjs/node');

const directories =  readDirectory(path.join('src', 'life'));
const renderLife = (level, directories) => {
  return directories.reduce((arr, obj) => {
    if (Array.isArray(obj.children)) {
      arr.push({ level, name: obj.name });
      renderLife(level + 1, obj.children)
        .forEach((v) => arr.push(v));
    } else {
      arr.push({
        ...obj,
        href: '/' + obj.path
          .split(path.sep)
          .slice(2)
          .join('/')
      });
    }
    return arr;
  }, []);
};
const lifes = renderLife(2, directories);

fs.writeFileSync(path.join('src', 'index.tsx'), `
  import { h, render } from 'preact';
  import Router from 'preact-router';
  import { Link } from 'preact-router/match';

  render((
    <Router>
      <article path='/'>
        <h1>Conway's Game of Life</h1>
        ${lifes.map((life) => life.level ? `
        <h${life.level}>${life.name}</h${life.level}>` : `
        <nav><Link href='${life.href}'>${life.name}</Link></nav>`
        ).join('')}
      </article>
      ${lifes
        .filter((life) => !life.level)
        .map((life) => `
      <h1 path='${life.href}'>${JSON.stringify(life)}</h1>`)
        .join('')}
    </Router>
  ), document.getElementById('app'));
`);
