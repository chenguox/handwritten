import React from 'react'
import { Navigate } from 'react-router'

import Home from '../pages/Home'
import About from '../pages/About'
import Detail from '../pages/Detail'
import User from '../pages/User'
import NotFound from '../pages/NotFound'

import HomeRanking from '../pages/HomeRanking'
import HomeRecommend from '../pages/HomeRecommend'

const Login = React.lazy(() => import("../pages/Login") )

const routes = [
  {
    path: '/',
    element: '<',
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/rank" />
      },
      {
        path: '/home/rank',
        element: <HomeRanking />
      },
      {
        path: '/home/recommend',
        element: <HomeRecommend />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/detail:id',
    element: <Detail />
  },
  {
    path: 'User',
    element: <User />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
