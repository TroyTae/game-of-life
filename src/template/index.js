const document = require('./document');

const renderLife = (obj, level) => {
  return Object.keys(obj).reduce((html, key) => {
    const value = obj[key];
    if (typeof value === 'string') {
      html += `<div><a href="./${value}.html">${key}</a></div>`;
    } else {
      html += `<h${level}>${key}</h${level}>`;
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
