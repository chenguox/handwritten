import React from 'react'
import { NavLink, useNavigate, useRoutes } from 'react-router-dom'
import routes from './router' 

export default function App() {
  const navigate = useNavigate()
  function navigateTo(path) {
    navigate(path)
  }

  return (
    <div>
      <div className="header nav">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/about">关于</NavLink>
        <NavLink to="/login">登录</NavLink>

        <NavLink to="/detail/123">详情</NavLink>
        <NavLink to="/user?name=why&age=18">用户</NavLink>

        <button onClick={e => navigateTo("/user")}>用户信息</button>
      </div>
      <hr />
      <div className="content">
        {useRoutes(routes)}
      </div>
      <hr />
      <div className="footer">--footer--</div>
    </div>
  )
}
