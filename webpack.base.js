module.exports = {
    "devtool": "source-map",
    "module": {
        "rules": [{
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
        }]
    }
};