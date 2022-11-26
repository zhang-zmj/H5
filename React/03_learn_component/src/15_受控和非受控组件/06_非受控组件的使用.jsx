import React, { createRef, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isAgree: false,
      hobbies: [
        { value: 'sing', text: '唱', isChecked: false },
        { value: 'dance', text: '跳', isChecked: false },
        { value: 'rap', text: 'rap', isChecked: false }
      ],
      fruit: ['orange'],
      intro: '哈哈哈'
    }

    this.introRef = createRef()
  }

  handleSubmitClick(event) {
    //1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log('获取所有的输入内容')
    // console.log(this.state.username, this.state.password)
    console.log('获取结果:', this.introRef.current.value)
  }

  handleFruitChange(event) {
    const options = Array.from(event.target.selectedOptions)
    const values = options.map(item => item.value)
    this.setState({ fruit: values })
    console.log(values)

    // 额外补充: Array.from(可迭代对象)
    // Array.from(arguments)
    const values2 = Array.from(event.target.selectedOptions, item => item.value)
    console.log(values2)
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
