const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    "entry": {
        "myappcss": "./less/index.less",
    },
    "mode": "development",
    "devtool": "eval-cheap-module-source-map",
    "target": "web",
    "output": {
        "path": path.resolve("../myapp/static/myapp"),
        "filename": "js/[name].min.js",
        "chunkFilename": "[name].bundle.js",
        "library": "datakortetno",
        "libraryTarget": "var",
        "libraryExport": "default"
    },

    "module": {
        "rules": [
            {
                "test": /\.(png|jpg)$/,
                "use": [
                    {
                        "loader": "file-loader",
                        "options": {
                            "name": "[path][name].[ext]",
                            //"context": "."
                        }
                    }
                ]
            },
            {
                "test": /\.less$/,
                "use": [
                    {
                        "loader": MiniCssExtractPlugin.loader,
                        "options": {
                            "publicPath": "../"
                        }
                    },
                    {
                        "loader": "css-loader",
                        "options": {
                            "url": false,
                            "sourceMap": true,
                            "importLoaders": 2
                        }
                    },
                    {
                        "loader": "postcss-loader"
                    },
                    {
                        "loader": "less-loader",
                        "options": {
                            "sourceMap": true,
                            "lessOptions": {
                                "rewriteUrls": "all"
                            }
                        }
                    }
                ]
            }
        ]
    },
    "plugins": [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: "[id].css"
        }),
    ]
}