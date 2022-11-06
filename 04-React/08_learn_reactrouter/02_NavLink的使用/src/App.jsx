import React, { PureComponent } from 'react'
// 3、导入路由组件
import { NavLink, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

import './style.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header nav">
          {/* 默认对选中的添加 active  */}
          {/* <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/login">登录</NavLink> */}

          {/* 利用回调函数设置属性 */}
          {/* <NavLink
            to="/home"
            style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
          >
            首页
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
          >
            关于
          </NavLink> */}

          {/* 利用回调函数添加类名 */}
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'link-active' : '')}
          >
            首页
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'link-active' : '')}
          >
            关于
          </NavLink>
        </div>
        <hr />
        <div className="content">
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
