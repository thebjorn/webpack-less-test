const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        myappcss: "./less/index.less",
    },
    mode: "development",
    devtool: false,
    output: {
        path: path.resolve("./myapp/static/myapp/"),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [{
                test: /\.(png|jpg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                        context: path.resolve('./less')
                    }
                }]
            }, {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    }, {
                        loader: "css-loader",
                        options: {
                            // url: false,
                            importLoaders: 1
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    }
}
