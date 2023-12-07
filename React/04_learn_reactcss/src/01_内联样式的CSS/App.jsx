import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      titleSize: 20
    }
  }

  addTitleSize() {
    this.setState({ titleSize: this.state.titleSize + 2 })
  }

  render() {
    const { titleSize } = this.state
    return (
      <div>
        <button onClick={e => this.addTitleSize()}>增加titleSize</button>
        <h2 style={{ color: 'red', fontSize: `${titleSize}px` }}>我是标题</h2>
        <h2 style={{ color: 'blue', fontSize: '20px' }}>我是内容, 哈哈哈</h2>
      </div>
    )
  }
}
