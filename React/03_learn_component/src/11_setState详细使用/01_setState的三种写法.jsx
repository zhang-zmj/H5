import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello World',
      counter: 0
    }
  }

  changeText() {
    //1.基本用法
    // this.setState({
    //   message: '你好啊，李银河。。'
    // })
    /*
     2.setState可以传入一个回调函数
      好处一: 可以在回调函数中编写新的state的逻辑
      好处二: 当前的回调函数会将之前的state和props传递进来
    */
    // this.setState((state, props) => {
    //   // console.log(this.state.message, this.props)
    //   return {
    //     message: '你好啊, 李银河'
    //   }
    // })
    /*
     3.setState在React的事件处理中是一个异步调用
         如果希望在数据更新之后(数据合并), 获取到对应的结果执行一些逻辑代码
         那么可以在setState中传入第二个参数: callback
    */
    this.setState({ message: '你好啊，李银河。。' }, () => {
      console.log('++++++里面的:', this.state.message)
    })
    console.log('++++++:外面的', this.state.message)
  }

  increment() {}

  render() {
    const { message, counter } = this.state
    return (
      <div>
        <h2>message：{message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <h2>当前计数：{counter}</h2>
        <button onClick={e => this.increment()}>counter+1</button>
      </div>
    )
  }
}

export default App
