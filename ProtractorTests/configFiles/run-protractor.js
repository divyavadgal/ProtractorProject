var protractorFlake = require('protractor-flake');
protractorFlake({
  protractorPath: './node_modules/.bin/protractor',
  maxAttempts: 3,
  parser: 'standard',
  // expects node to be in path 
  // set this to wherever the node bin is located 
  nodeBin: 'node', 
  color: 'magenta',
  protractorArgs: []
}, function (status, output) {
  process.exit(status);
});