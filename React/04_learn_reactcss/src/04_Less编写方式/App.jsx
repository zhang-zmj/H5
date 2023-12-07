import React, { PureComponent } from 'react'
import './App.less'

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="section">
          <h2 className="title">我是标题</h2>
          <p className="content">我是内容, 哈哈哈</p>
        </div>
      </div>
    )
  }
}

export default App

/*
修改webPack：
一、create-react-app
  craco: create-react-app config
  执行命令：
  yarn add @craco/craco


Ant Design React的UI框架 less
MUI：React的UI框架 用的是css in js 
*/
