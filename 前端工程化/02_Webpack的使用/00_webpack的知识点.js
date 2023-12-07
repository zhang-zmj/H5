/*
1、Webpack是什么？
    是一个静态的模块化打包工具，为现代的JavaScript应用程序
      * 静态的static：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）
      * 模块化module：webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等
      * 打包bundler：webpack可以将帮助我们进行打包，所以它是一个打包工具
      * 现代的modern：正是因为现代前端开发面临各种各样的问题，才催生了webpack的出现和发展；

2、Webpack使用环境
  ①、官方文档：
      英文：https://webpack.js.org/
      中文：https://webpack.docschina.org/

  ②、node环境：
      官方网站：https://nodejs.org/
      通过n 来管理node

3、Webpack的安装方式：
  ①、全局安装
      npm install webpack webpack-cli –g

  ②、局部安装
      npm install webpack webpack-cli –D

  ③、局部安装webpack
    * 创建package.json文件：
        npm init
    * 安装局部的webpack：
        npm install webpack webpack-cli -D
    * 使用局部的webpack
        npx webpack
    * 在package.json中创建scripts脚本，执行脚本打包即可
        npm run build

4、Webpack配置文件：
   ①、Webpack配置文件
        webpack.config.js

   ②、指定配置文件：
    * 比如我们将webpack.config.js修改成了 wk.config.js
    * 这个时候我们可以通过 --config 来指定对应的配置文件
        webpack --config wk.config.js

























*/
