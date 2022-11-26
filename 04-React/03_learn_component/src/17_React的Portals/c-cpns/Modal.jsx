import React, { PureComponent } from 'react'
// 1. 导入 createPortal 函数
import { createPortal } from "react-dom"

export class Modal extends PureComponent {
  render() {
    return createPortal(
      this.props.children,
      document.querySelector("#modal")
    )
  }
}

export default Modal