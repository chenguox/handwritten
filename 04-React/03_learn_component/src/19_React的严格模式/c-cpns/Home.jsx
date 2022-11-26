import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  // 控制台提示不推荐使用过时的生命周期
  // UNSAFE_componentWillMount() {
  //   console.log("Home UNSAFE_componentWillMount")
  // }

  constructor(props) {
    super(props) 

    console.log("Home Constructor");
  }

  // 渲染两次检查是否有副作用
  componentDidMount() {
    console.log("Home componentDidMount");
  }

  render() {
    console.log("Home Render")

    return (
      <div>Home</div>
    )
  }
}

export default Home