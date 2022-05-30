/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-29 16:00:32
 * @LastEditTime: 2022-05-30 20:48:26
 * @LastEditors: liyongshuai
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // 打包其他资源 (除了html/js/css资源以外的资源)
      {
        exclude: /\.(css|js|html|less)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
