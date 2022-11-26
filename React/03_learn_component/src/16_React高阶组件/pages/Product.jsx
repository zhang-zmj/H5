import React, { PureComponent } from 'react'
import withTheme from '../hoc/with_theme'
// import ThemeContext from '../context/theme_context'

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         Product:
//         <ThemeContext.Consumer>
//           {value => {
//             return (
//               <h2>
//                 theme：{value.color} == {value.size}
//               </h2>
//             )
//           }}
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Product

// 不同的组件使用ThemeContext时，阅读星比较差，所以要封装一下

export class Product extends PureComponent {
  render() {
    const { color, size } = this.props
    return (
      <div>
        <h2>
          Product： {color} -- {size}
        </h2>
      </div>
    )
  }
}

export default withTheme(Product)
