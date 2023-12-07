import React, { createRef, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      intro: '哈哈哈'
    }

    this.introRef = createRef()
  }

  componentDidMount() { 
    // this.introRef.current.addEventListener
  }

  handleSubmitClick(event) {
    //1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log('获取结果:', this.introRef.current.value)
  }

  render() {
    const { intro } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          {/* 非受控组件 */}
          <input type="text" defaultValue={intro} ref={this.introRef} />

          <div>
            <button type="submit">注册</button>
          </div>
        </form>
      </div>
    )
  }
}
