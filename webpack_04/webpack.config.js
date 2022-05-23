/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-20 15:54:52
 * @LastEditTime: 2022-05-20 16:08:24
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
        test: /.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /.less$/,
        loader: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
        },
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
