import React, { PureComponent } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <div className="header">
          <NavLink to="/home/rank">排行榜</NavLink> 
          <NavLink to="/home/recommend">推荐榜</NavLink>
        </div>

        {/* 占位的组件 */}
        <Outlet />
      </div>
    )
  }
}

export default Home
