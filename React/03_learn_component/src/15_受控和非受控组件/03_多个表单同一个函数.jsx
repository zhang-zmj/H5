import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmitClick(event) {
    //1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log('获取所有的输入内容')
    console.log(this.state.username, this.state.password)
  }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value })
  // }

  // handlePasswordChange(event) {
  //   this.setState({ password: event.target.value })
  // }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value })
  // }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户：
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={e => this.handleInputChange(e)}
            />
          </label>
          <label htmlFor="password">
            密码：
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={e => this.handleInputChange(e)}
            />
          </label>
          <button type="submit">注册</button>
        </form>
      </div>
    )
  }
}
