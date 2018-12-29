const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
  "target": 'node',
  "entry": "./src/index.js",
  "output": {
    "path": path.resolve(__dirname, 'build'),
    "filename": "bundle.js"
  }
};

module.exports = merge(config, baseConfig);;