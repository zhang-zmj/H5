import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  constructor() {
    console.log('Home  constructor')
  }
  componentDidMount() {
    console.log('Home  componentDidMount')
  }
  render() {
    console.log('Home Render')
    return (
      <div>
        {/* <h2 ref="title">Home Title</h2> */}

        <h2>Home</h2>
      </div>
    )
  }
}
