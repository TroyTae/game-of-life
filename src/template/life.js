const path = require('path');
const document = require('./document');

module.exports = ({ hierarchy, entry }) => {
  const title = entry
    .split('/')
    .slice(0, -1)
    .reduce((hierarchy, name) => hierarchy[name], hierarchy)[entry];

  return document({
    subTitle: title,
    bodyHTML: `<h1>${title}</h1>`,
    relativePath: '../'.repeat(entry.split('/').length - 1),
  });
};
