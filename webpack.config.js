const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js");
module.exports = {
  ...base,
  mode: "development",
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        // in development, we don't extract css file here
        use: ["style-loader", "css-loader"],
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
