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
        <style>
          html {
            font: 16px sans-serif;
          }
          body {
            color: #FFF;
            background: #000;
            text-align: center;
          }
          a {
            color: #2997ff;
            text-decoration: none;
          }
          a:hover, a:active {
            text-decoration: underline;
          }
          canvas {
            border-radius: 0.25rem;
          }
        </style>
      </head>
      <body>
        ${bodyHTML}
      </body>
    </html>
  `;
};
