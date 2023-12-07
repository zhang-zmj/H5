const path = require("path")

const filePath = "/Users/zmj/Desktop/longgang-smt-web/postcss.config.js"

// 1、可以从一个路径中获取一些信息
console.log(path.extname(filePath)); // 获取后缀名
console.log(path.basename(filePath)); // 获取文件名
console.log(path.dirname(filePath)); // 获取所属的文件目录


/*
  2、在每个模块中除了 require ，exports 等模块相关 API之外，还有两个特殊的成员：
    * __dirname：用来动态获取当前文件模块所属目录的绝对路径
    * __filename：用来动态获取当前文件的绝对路径
*/
console.log(__dirname);
console.log(__filename);
