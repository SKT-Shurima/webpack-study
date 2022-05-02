<!--
 * @Description: 
 * @Author: liyongshuai
 * @Date: 2022-05-02 23:23:46
 * @LastEditTime: 2022-05-02 23:25:49
 * @LastEditors: liyongshuai
-->

### webpack 打包样式资源
- 打包文件路径 需采用 node 提供的 path（`path.resolve()`） 模块进行处理
- 打包less文件的时候，需要安装 `less`、`less-loader` 两个模块
- webpack 样式处理loader执行顺序是从右到左
