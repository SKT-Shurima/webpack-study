/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-30 22:46:06
 * @LastEditTime: 2022-05-31 14:27:10
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
      {
        test: /\.(svg|jpeg|jpg|png)$/,
        use: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  // 开发服务器 devServer 用来自动化 自动编译  自动打开浏览器 刷新浏览器的
  //  特点：只会在内存中进行编译打包，不会有任何输出
  // 启动devServer 指令为：npx webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    // 启动gzip 压缩
    compress: true,
    port: 3000,
  },
};
