const document = require('./document');

const renderLife = (obj, level) => {
  return Object.keys(obj).reduce((html, key) => {
    const value = obj[key];
    if (value === true) {
      const {title} = require(`../build/${key}`);
      html += `<div><a href="./${key}.html">${title}</a></div>`;
    } else {
      const title = key.replace(/-/g, ' ');
      html += `<h${level}>${title[0].toUpperCase() + title.slice(1)}</h${level}>`;
      html += renderLife(value, level + 1);
    }
    return html;
  }, '');
};

module.exports = ({hierarchy}) => {
  return document({
    bodyHTML: `
      <h1>Conway's Game of Life</h1>
      ${renderLife(hierarchy, 2)}
    `,
    relativePath: './'
  });
};
