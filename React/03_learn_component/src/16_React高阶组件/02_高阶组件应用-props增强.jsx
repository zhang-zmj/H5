import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_props'
import About from './pages/About'

const Home = enhancedUserInfo(function (props) {
  return (
    <h1>
      Home： {props.name}-{props.level}-{props.banners}
    </h1>
  )
})

const Profile = enhancedUserInfo(function (props) {
  return (
    <h1>
      Profile {props.name}-{props.level}-{props.banners}
    </h1>
  )
})

const HelloFriend = enhancedUserInfo(function (props) {
  return (
    <h1>
      HelloFriend {props.name}-{props.level}-{props.banners}
    </h1>
  )
})

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={['轮播1', '轮播2']}></Home>
        <Profile></Profile>
        <HelloFriend></HelloFriend>
        <About></About>
      </div>
    )
  }
}
