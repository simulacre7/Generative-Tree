const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    historyApiFallback: true,
  },
};
