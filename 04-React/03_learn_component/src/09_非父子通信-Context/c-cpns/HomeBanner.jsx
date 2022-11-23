import React from 'react'

import ThemeContext from "../context/theme-context"

function HomeBanner() {
  return (
    <div>
      <hr />
      <div>HomeBanner</div>

      {/* 函数式组件中使用Context共享的数据 */}
      <ThemeContext.Consumer>
        {
          value => {
            return <div>Banner theme: {value.color}</div>
          }
        }
      </ThemeContext.Consumer>
    </div>

    
  )
}

export default HomeBanner