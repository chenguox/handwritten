import ReactDOM from 'react-dom/client';
import App from './App';
// 1. 导入路由组件 HashRouter
import { HashRouter } from 'react-router-dom'

import { Suspense } from 'react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // 2. 使用路由组件包裹 App 组件
  <HashRouter>
    <Suspense fallback={<h3>Loading....</h3>}>
      <App />
    </Suspense>
  </HashRouter>
  // </React.StrictMode>
);
