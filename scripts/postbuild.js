const fs = require('fs-extra');
const path = require('path');

fs.copyFileSync(
  path.join('src', 'static', 'robots.txt'),
  path.join('dist', 'robots.txt')
);
