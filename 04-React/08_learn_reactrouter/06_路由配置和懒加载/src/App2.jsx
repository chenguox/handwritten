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
    
  }
}

export default withRouter(App)
