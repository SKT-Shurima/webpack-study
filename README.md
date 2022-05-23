<!--
 * @Description: 
 * @Author: liyongshuai
 * @Date: 2022-05-02 22:31:00
 * @LastEditTime: 2022-05-20 15:45:44
 * @LastEditors: liyongshuai
-->
# 介绍

## webpack_01

- webpack 打包基础逻辑
- webpack 五大核心概念
- `development`、`production`两种基本模式

## webpack_02

- 打包样式资源

## webpack_03

- 打包HTML资源
  核心是采用 `html-webpack-plugin` 插件进行处理
  需要注意的是，如果实例化该构造函数，不加任何参数的情况下，是默认创建一个`html`文件
  如果在该构造函数中传入参数`template` 指明本地 `html` 文件的情况下，则直接采用本地文件作为模板

## webpack_04

- 打包图片资源
