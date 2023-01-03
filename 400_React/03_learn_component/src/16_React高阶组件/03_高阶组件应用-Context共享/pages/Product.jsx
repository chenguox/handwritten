import React, { PureComponent } from 'react'
import withTheme from '../hoc/withTheme'

// import ThemeContext from '../context/theme_context'

// 如果是以前获取 Context 数据，如下：
// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         <h4>Product:</h4>
//         <ThemeContext.Consumer>
//           {
//             value => {
//               return <div>theme: {value.color}-{value.size}</div>
//             }
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// 使用 高阶组件 withTheme 实现共享 Context
export class Product extends PureComponent {
  render() {
    const { color, size } = this.props

    return (
      <div>
        <h4>Product: {color}-{size}</h4>
      </div>
    )
  }
}

export default withTheme(Product)