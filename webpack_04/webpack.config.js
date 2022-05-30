/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-20 15:54:52
 * @LastEditTime: 2022-05-29 15:13:13
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
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 处理图片资源 （默认处理不了HTML中的img标签）
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
        options: {
          // 小于 limit 大小的图片会转义成base64
          // 优点：减少请求数量（减轻服务器压力）
          // 缺点：图片体积会增大（文件请求更慢）
          limit: 15 * 1024,
          // 问题原因：url-loader默认使用的是模块化解析，而html-loader引入图片是commonjs
          // 解析时会出现问题 [object Module]
          // 解决方案： 关闭 url-loader es6 模块化。使用commonjs进行解析
          esModule: false,
          name: "[hash:6].[name].[ext]",
        },
      },
      {
        test: /.html$/,
        // 用来处理 html 文件中的img 图片，负责引入img，从而能被url-loader 进行处理
        loader: "html-loader",
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
