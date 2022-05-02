/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-02 22:57:35
 * @LastEditTime: 2022-05-02 23:22:41
 * @LastEditors: liyongshuai
 */

const path = require("path");

module.exports = {
  // 指明入口文件
  entry: "./src/index.js",
  // 指明输出的文件名 及 目录地址
  // 注意： 文件地址最好是使用 path 模块提供的 resolve 方法处理，因为在Mac window下路径解析是不一致的
  output: {
    filename: "bundle.01.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 样式资源进行解析的时候 是从右到左
        // 安装less-loader 时候，必须也要安装 less 模块，都需要单独安装
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [],
  mode: "development",
};
