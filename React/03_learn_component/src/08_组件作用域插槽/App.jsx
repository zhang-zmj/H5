import React, { Component } from 'react'
import TabControl from './TabControl'

/*
作用域插槽的实现方案：
  组件的标签是由父组件决定的，数据依然是子组件传过去的
*/
export class App extends Component {
  constructor() {
    super()

    this.state = {
      titles: ['流行', '新款', '精选'],
      tabIndex: 0
    }
  }

  tabClick(tabIndex) {
    this.setState({ tabIndex })
  }

  getTabItem(item) {
    if (item === '流行') {
      return <span>{item}</span>
    } else if (item === '新款') {
      return <button>{item}</button>
    } else {
      return <i>{item}</i>
    }
  }

  render() {
    const { titles, tabIndex } = this.state

    return (
      <div className="app">
        <TabControl
          titles={titles}
          tabClick={i => this.tabClick(i)}
          itemType={item => this.getTabItem(item)}
        />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App
