const path = require("path")

//1、path.join 路径的拼接
// console.log(path.join("./abc/cba", "../why/kobe", "./abc.txt"))

/*
2、拼接绝对路径：
    * 给定的路径的序列是从右往左被处理
    * 如果在处理完所有给定path的段之后，还没有生成绝对路径，则使用当前工作目录
    * 生成的路径被规范化并删除尾部斜杠，零长度path段被忽略；
    * 如果没有path传递段，path.resolve()将返回当前工作目录的绝对路径
*/
// console.log(path.resolve("./abc.txt"))
// console.log(path.resolve("./abc/cba", "../why/kobe", "./abc.txt"))


// 3、获取当前文件所在目录
console.log(path.resolve()) 