### 1、React 介绍

1、React 是什么？
用于构建用户界面的 JavaScript 库
2、官方文档：
https://zh-hans.reactjs.org/

### 2、React 开发依赖

1、开发中必须依赖的三个库：

- react：包含 react 所必须的核心代码
- react-dom：react 渲染在不同平台所需要的核心代码
- babel：将 jsx 转换成 React 代码的工具

2、如何添加这个三个依赖：

- 直接 CDN 引入
  ```
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  ```
- 下载后，添加本地依赖
- 通过 npm 管理（后续脚手架再使用）

### 3、Hello React 组件化开发

1、定义一个类
2、实现当前组件的 render 函数
3、constructor 中定义数据
4、事件绑定

### 4、VSCode 代码片段

1、网站：
https://snippet-generator.app
2、步骤详解
![代码片段步骤](./images/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.png)

### 5、为什么 React 选择了 JSX

1、React 认为渲染逻辑本质上与其他 UI 逻辑存在内在耦合

- 比如 UI 需要绑定事件(button、a 原生等等)
- 比如 UI 中 需要展示数据状态
- 比如在某些状态发生改变时，又需要改变 UI

2、它们是密不可分的，而是将它们组合到了一起，这个地方就是组件
3、JSX 其实是嵌入到 JavaScript 中的一种结构语法

### 6、JSX 的本质

1、jsx 仅仅只是 React.createElement(component, props,...children)函数的语法糖
2、createElement 需要传递三个参数：

- 参数一：type
  - ReactElement 的类型，比如“div”，组件名称
- 参数二：config
  - 所有 jsx 中的属性都在 config 中以对象的属性赫尔值的形式存储
- 参数三：children
  - 存放在标签中的内容，以 chidren 数组的方式进行存储
    3、可以在 babel 的官网中快速查看转换的过程：https://babeljs.io/repl/#?presets=react

4、
5、
6、
7、
8、
9、
