import React, { Component } from 'react'
import PropTypes from "prop-types"

export class MainBanner extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { title, banners } = this.props

    return (
      <div>
        <h2>MainBanner: {title}</h2>
        <ul>
          {
            banners.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// MainBanner 传入的 props 类型进行校验
MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string
}

// MainBanner传入的 props 的默认值
MainBanner.defaultProps = {
  banners: [],
  title: "默认标题"
}

export default MainBanner