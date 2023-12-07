import React from 'react'

//1、类组件
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '类组件。。。'
    }
  }

  //1、当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一
  render() {
    // const { message } = this.state

    //2、react元素：通过jsx编写的代码就会被编译成React.createElement, 所以返回的就是一个React元素
    // return <h2>{message}</h2>

    //3、组件或者fragments(后续学习)
    // return ['abc--', 'cba--', 'nba--', message]
    // return [<h1>h1元素</h1>, <h2>h2元素</h2>, <div>哈哈哈</div>]

    //4、字符串/数字类型
    // return message

    //5、布尔类型或 null：什么都不渲染
    return true

    //6、Portals：可以渲染子节点到不同的 DOM 子树中
  }
}

export default App
