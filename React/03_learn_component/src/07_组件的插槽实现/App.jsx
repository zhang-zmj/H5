import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBarTwo from './nav-bar-two'

/*
React实现组件有两种方案：
  1、组件的children子元素
  2、props属性传递React元素
*/

export class App extends Component {
  render() {
    const btn = <button>按钮2</button>
    return (
      <div>
        {/*1.使用children实现插槽*/}
        <NavBar>
          <button>按钮1</button>
          <h2>哈哈哈</h2>
          <i>斜体1</i>
        </NavBar>
        {/* 2.使用props实现插槽 */}
        <NavBarTwo leftSlot={btn} centerSlot={<h2>呵呵呵</h2>} rightSlot={<i>斜体2</i>} />
      </div>
    )
  }
}

export default App
