const document = require('./document');

module.exports = ({entry}) => {
  const {title} = require(`../build/${entry}`);
  return document({
    subTitle: title,
    bodyHTML: `<h1>${title}</h1>`,
    relativePath: '../'.repeat(entry.match(new RegExp('/', 'g')).length)
  });
};
