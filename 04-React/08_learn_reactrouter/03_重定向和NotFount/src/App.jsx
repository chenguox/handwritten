import React, { PureComponent } from 'react'
// 3、导入路由组件
import { NavLink, Navigate, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import './style.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header nav">
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/login">登录</NavLink>
        </div>
        <hr />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* 使用 * 号表示全匹配 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <hr />
        <div className="footer">--footer--</div>
      </div>
    )
  }
}

export default App
