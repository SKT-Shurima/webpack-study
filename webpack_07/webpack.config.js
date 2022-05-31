/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-31 14:51:26
 * @LastEditTime: 2022-05-31 16:21:24
 * @LastEditors: liyongshuai
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建样式标签将样式引入
          "style-loader",
          // 取代 style-loader, 作用是将js 中的css成单独文件
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 10 * 1024,
          esModule: false,
          name: "[hash:6].[name].[ext]",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        exclude: /\.(jpeg|jpg|png|svg|gif|html|js|css)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.css",
    }),
  ],
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
    port: 3000,
  },
};
