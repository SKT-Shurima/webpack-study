<!--
 * @Description: 
 * @Author: liyongshuai
 * @Date: 2022-05-02 22:31:00
 * @LastEditTime: 2022-05-31 22:14:50
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
  采用`url-loader`打包解析，需要依赖`file-loader`；
  处理图片限制大小的时候，可以在`option`里面添加`limit`，`limit`只是针对图片比值小的图片进行base64转换；
  如果HTML标签中使用了`img`标签引用图片，那么需要借助`html-loader`，将`img`标签引入，并且可以让`url-loader`识别；需要注意的是`html-loader`是靠`commonjs`解析，`url-loader`是`esModule`解析，所以需要在`url-loader`中将`esModule`关闭；

## webpack_05

- 打包其他资源
  采用`file-loader`打包解析，主要是将不需要处理的文件进行原封不动的输出；

## webpack_06

- `devServer` 开启文件的热更新

## webpack_07

- `mini-css-extract-plugin`将css合并成一个文件

## webpack_08

- `postcss-loader`做样式兼容性处理，搭配`package.json`中的`browserslist`进行使用，需要注意的是需要指定是开发环境还是生产环境

## webpack_09

- `optimize-css-assets-webpack-plugin`压缩css代码
- test timeout
