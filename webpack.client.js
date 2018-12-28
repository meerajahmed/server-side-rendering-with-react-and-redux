const path = require('path');

const config = {
  "entry": "./src/client/index.js",
  "output": {
    "path": path.resolve(__dirname, 'public'),
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