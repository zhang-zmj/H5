import React, { PureComponent } from 'react'
import ThemeContext from './context/theme_context'
import Product from './pages/Product'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
          <Product></Product>
        </ThemeContext.Provider>
      </div>
    )
  }
}
