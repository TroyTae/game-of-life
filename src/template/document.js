module.exports = ({
  subTitle,
  bodyHTML,
  relativePath,
}) => {
  const url = 'https://troytae.github.io/game-of-life/';
  const title = `Conway's Game of Life${subTitle ? ` - ${subTitle}` : ''}`;
  const favicon = `${relativePath}favicon.gif`;
  const description = `Conway's Game of Life web version!`;
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta charset="UTF-8">
        <meta name="author" content="TroyTae">
        <meta name="robots" content="index,follow">
        <meta name="keywords" content="Game of Life,Conway's Game of Life">
        <meta name="description" content="${description}">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0">

        <meta property="og:title" content="${title}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="${url}">
        <meta property="og:image" content="${favicon}">
        <meta property="og:image:type" content="image/gif">
        <meta property="og:image:width" content="336">
        <meta property="og:image:height" content="336">
        <meta property="og:description" content="${description}">

        <link rel="shortcut icon" href="${favicon}">
        <link rel="stylesheet" href="${relativePath}style.css">

        <script type="application/ld+json">{
          "@id": "${url}",
          "@context": "http://schema.org",
          "@type": "Science",
          "name": "${title}",
          "description": "${description}",
          "image": "${favicon}"
        }</script>
      </head>
      <body>
        ${bodyHTML}
      </body>
    </html>
  `;
};
