const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(_dirname, "src", "index.js"),
    output: {
        path: path.join(_dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(_dirname, "src", "index.html"),
        }),
    ],
};
