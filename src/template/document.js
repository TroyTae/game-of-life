const { getTemplate } = require('troyjs/webpack');
const css = require('../../static/style.css').default;
const favicon = require('../../static/favicon.gif').default;

module.exports = ({ subTitle, bodyHTML, relativePath }) => {
  return getTemplate({
    title: `${subTitle ? `${subTitle} - ` : ''} Conway's Game of Life`,
    keywords: `Conway,Game of Life,Conway's Game of Life`,
    description: `Conway's Game of Life web version!`,
    url: 'https://troytae.github.io/game-of-life/',
    favicon: `${relativePath}${favicon}`,
    headHTML: `
      <meta property="og:image:type" content="image/gif">
      <meta property="og:image:width" content="336">
      <meta property="og:image:height" content="336">
      <link rel="stylesheet" href="${relativePath}${css}">
    `,
    bodyHTML,
  });
};
