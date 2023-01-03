import React, { PureComponent } from 'react'
// 3、导入路由组件
import { Link, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/login">登录</Link>
        </div>
        <hr />
        <div className="content">
          {/* 映射关系: path => Component */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <hr />
        <div className="footer">--footer--</div>
      </div>
    )
  }
}

export default App