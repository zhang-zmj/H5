import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }

  componentDidMount() {
    localStorage.removeItem('token')
  }

  loginClick() {
    localStorage.setItem('token', 'zhangmj')

    // this.setState({ isLogin: true })
    this.forceUpdate() //暴力更新
  }

  render() {
    return (
      <div>
        App
        <button onClick={e => this.loginClick()}>登录</button>
        <Cart></Cart>
      </div>
    )
  }
}
