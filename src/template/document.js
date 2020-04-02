module.exports = ({
  title,
  bodyHTML,
}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Conway's Game of Life${title ? ` - ${title}` : ''}</title>
        <base href="./">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0">
      </head>
      <body>
        ${bodyHTML}
      </body>
    </html>
  `;
};