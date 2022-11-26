import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }

  // shouldComponentUpdate(newProps) {
  //   if (this.props.message !== newProps.message) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    console.log('Home render')
    return <div>Home Page: {this.props.message}</div>
  }
}

export default Home
