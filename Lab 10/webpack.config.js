const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry : './src/entry.js',
    output : {
        filename: 'bundle.js',
        publicPath: "/",
        path: path.resolve(__dirname, "public"),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    mode: 'production'
};