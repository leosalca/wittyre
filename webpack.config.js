const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(_dirname, "src", "index.js"),
    output: {
        path: path.join(_dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(_dirname, "src", "index.html"),
        }),
    ],
};
