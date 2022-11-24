import React, { PureComponent } from 'react'

// 1. 定义一个高阶组件
function hoc(Cpn) {
  // 定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="cgx" />
    }
  }
  return NewCpn

  // 定义函数组件
  // function NewCpn(props) {

  // }
  // return NewCpn2
}

// 2. 对组件进行增强
class Home extends PureComponent {
  render() {
    return <h4>Hello World</h4>
  }
}
const HomeHOC = hoc(Home)

// 3. 使用增强的组件
export class App extends PureComponent {
  render() {
    return (
      <div>
        <HomeHOC />
      </div>
    )
  }
}

export default App