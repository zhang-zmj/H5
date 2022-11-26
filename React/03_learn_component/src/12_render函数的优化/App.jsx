import React, { Component } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World',
      counter: 0
    }
  }

  // App进行性能优化的点
  // shouldComponentUpdate(nextProps, newState) {
  //   if (this.state.message !== newState.message || this.state.counter !== newState.counter) {
  //     return true
  //   }
  //   return false
  // }

  changeText() {
    this.setState({ message: '你好啊,李银河!' })
    // this.setState({ message: "Hello World" })
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    console.log('App render')
    const { message, counter } = this.state
    return (
      <div>
        <h2>
          App-{message}-{counter}
        </h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={e => this.increment()}>counter+1</button>
        <Home message={message}></Home>
        <Recommend counter={counter}></Recommend>
        <Profile message={message}></Profile>
      </div>
    )
  }
}

export default App
