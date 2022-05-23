/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-19 18:05:55
 * @LastEditTime: 2022-05-20 15:43:10
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
    // 1、下载  2、使用
    rules: [],
  },
  // 1、下载 2、引入 3、使用
  plugins: [
    // html-webpack-plugin
    // 功能：默认创建一个空的HTML 引入打包输出的所有资源（js/css）
    new HtmlWebpackPlugin({
      // template 相当于是采用 本地index.html作为模板
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
