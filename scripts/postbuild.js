const fs = require('fs-extra');
const path = require('path');

fs.writeFileSync(path.join('dist', 'robots.txt'), `
User-agent: *
Allow: /
`);
