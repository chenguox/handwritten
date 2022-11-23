import React, { Component } from 'react'

import ThemeContext from '../context/theme-context'
import UserContext from '../context/user-context'

export class HomeInfo extends Component {
  render() {
    // 第四步： 获取数据，并且使用数据
    console.log(this.context)

    return (
      <div>
        <hr />
        <div>HomeInfo: {this.context.color}</div>

        {/* contextType 只能设置一个，其他使用以下这种方式 */}
        <UserContext.Consumer>
          {
            value => {
              return <div>Info User: {value.name}</div>
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

// 第三步： 设置组件的 contextType 为某一个 Context
HomeInfo.contextType = ThemeContext

export default HomeInfo