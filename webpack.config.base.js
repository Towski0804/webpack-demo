const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo 1",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [],
  },
};
