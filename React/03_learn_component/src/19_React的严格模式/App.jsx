import React, { PureComponent, StrictMode } from 'react'
import Home from './pages/Home'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home></Home>
        </StrictMode>
      </div>
    )
  }
}
