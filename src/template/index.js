const document = require('./document');

module.exports = (params) => {
  return document({
    bodyHTML: (
      Object.keys(params.entry).reduce((html, entry) => {
        html += `<div><a href="./${entry}.html">${entry}</a></div>`;
        return html;
      }, '')
    )
  });
};
