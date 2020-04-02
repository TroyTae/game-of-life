const document = require('./document');

module.exports = (params) => {
  const title = require(`../life/${params.path}`).title;
  return document({
    title,
    bodyHTML: `<h1>${title}</h1>`
  });
};
