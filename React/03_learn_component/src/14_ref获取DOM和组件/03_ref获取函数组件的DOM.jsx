import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      <h1 ref={ref.hw}>Hello World</h1>
      <p ref={ref.text}>哈哈哈哈哈</p>
    </div>
  )
})

export default class App extends PureComponent {
  constructor() {
    super()
    this.hwRef = createRef()
    this.textRef = createRef()
  }

  getComponent() {
    console.log(this.hwRef.current)
    console.log(this.textRef.current)
  }

  render() {
    return (
      <div>
        {/* <HelloWorld ref={this.hwRef}></HelloWorld> */}
        <HelloWorld ref={{ hw: this.hwRef, text: this.textRef }}></HelloWorld>
        <button onClick={e => this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}
