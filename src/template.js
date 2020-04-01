function renderEntryLinks(entry) {
  return entry ? Object.keys(entry).reduce((html, entry) => {
    html += `<div><a href="./${entry}.html">${entry}</a></div>`;
    return html;
  }, '') : '';
};

module.exports = (params) => {
  return `
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <title>Conway's Game of Life</title>
        <base href="./">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0">
      </head>
      <body>
        ${renderEntryLinks(params.entry)}
      </body>
    </html>
  `;
};