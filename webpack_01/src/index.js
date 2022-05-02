/*
 * @Description:
 * @Author: liyongshuai
 * @Date: 2022-05-02 17:08:37
 * @LastEditTime: 2022-05-02 17:51:00
 * @LastEditors: liyongshuai
 */

/**
 * webpack 打包命令：
 * webpack [入口文件] -o [目标文件] --mode=[development | production]
 * 注意事项：
 * 1.webpack 只能对js json 文件进行打包，对图片资源需要借用loader
 * 2.development 模式不会将es6转换成es5
 * 3.production 模式会对代码进行压缩
 */

import data from "./data.json";

console.log(data);
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));
