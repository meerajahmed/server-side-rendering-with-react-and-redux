const path = require('path');

const config = {
  "target": 'node',
  "entry": "./src/index.js",
  "output": {
    "path": path.resolve(__dirname, 'build'),
    "filename": "bundle.js"
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        "test": /\.(js)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "browsers": ['last 2 versions']
                  }
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};

module.exports = config;