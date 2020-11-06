const fs = require('fs-extra');
const path = require('path');

function nameToFile(name) {
  return (
    name
      .replace(/\'/g, '')
      .replace(/\s/g, '-')
      .replace(/\./g, '_')
      .replace(/[A-Z]/g, (upper) => upper.toLowerCase())
  );
}

[].forEach((name) => {
  fs.writeFileSync(path.join('life', 'oscillator', `${nameToFile(name)}.json`), `{
  "title": "${name}",
  "life": [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
}
`);
});
