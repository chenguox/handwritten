import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './c-cpns/Modal'

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h4>App H1</h4>
        {/* 2. Modal 组件 */}
        <Modal>
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </Modal>

        {/* 其他方式 */}
        {
          createPortal(
            <h2>App H2</h2>,
            document.querySelector("#why")
          )
        }
      </div>
    )
  }
}

export default App