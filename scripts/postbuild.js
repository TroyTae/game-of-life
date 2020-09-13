const fs = require('fs-extra');
const path = require('path');
const distDir = 'dist';
fs.emptyDirSync(distDir);
fs.copyFileSync(
  path.join('src', 'static', 'robots.txt'),
  path.join(distDir, 'robots.txt')
);
