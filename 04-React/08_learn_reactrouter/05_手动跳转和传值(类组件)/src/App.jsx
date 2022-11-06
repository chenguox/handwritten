import React, { PureComponent } from 'react'
// 3、导入路由组件
import { NavLink, Navigate, Routes, Route, useNavigate } from 'react-router-dom'

// 导入封装的高阶组件
import { withRouter } from './hoc'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Detail from './pages/Detail'
import User from './pages/User'
import NotFound from './pages/NotFound'

import HomeRanking from './pages/HomeRanking'
import HomeRecomend from './pages/HomeRecommend'

import './style.css'

export class App extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
        <div className="header nav">
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/login">登录</NavLink>

          <NavLink to="/detail/123">详情</NavLink>
          <NavLink to="/user?name=why&age=18">用户</NavLink>

          <button onClick={e => this.navigateTo("/user")}>用户信息</button>
        </div>
        <hr />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Navigate to="/home/rank" />} />
              <Route path="/home/rank" element={<HomeRanking />} />
              <Route path="/home/recommend" element={<HomeRecomend />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/user" element={<User />} />
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

export default withRouter(App)
