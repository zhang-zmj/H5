import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isAgree: false,
      hobbies: [
        { value: 'sing', text: '唱', isChecked: false },
        { value: 'dance', text: '跳', isChecked: false },
        { value: 'rap', text: 'rap', isChecked: false }
      ]
    }
  }

  handleSubmitClick(event) {
    //1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    const hobbies = this.state.hobbies.filter(item => item.isChecked).map(item => item.value)
    console.log('获取爱好----', hobbies)
  }

  handleAgreeChange(event) {
    console.log('获取的状态是多少？？', event.target.checked)
    this.setState({ isAgree: event.target.checked })
  }

  handleHobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({ hobbies })
  }

  render() {
    const { isAgree, hobbies } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          {/* 1.checkbox单选 */}
          <label htmlFor="agree">
            <input type="checkbox" id="agree" checked={isAgree} onChange={e => this.handleAgreeChange(e)} />
            同意协议
          </label>

          {/* 2.checkbox多选 */}
          <div>
            你的爱好：
            {hobbies.map((item, index) => {
              return (
                <label htmlFor={item.value} key={item.value}>
                  <input
                    type="checkbox"
                    id={item.value}
                    checked={item.isChecked}
                    onChange={e => this.handleHobbiesChange(e, index)}
                  />
                  <span> {item.text}</span>
                </label>
              )
            })}
          </div>

  
          <div>
            <button type="submit">注册</button>
          </div>
        </form>
      </div>
    )
  }
}
