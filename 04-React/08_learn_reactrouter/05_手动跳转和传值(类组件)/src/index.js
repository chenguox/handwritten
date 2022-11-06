import ReactDOM from 'react-dom/client';
import App from './App';
// 1. 导入路由组件 HashRouter
import { HashRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // 2. 使用路由组件包裹 App 组件
  <HashRouter>
    <App />
  </HashRouter>
  // </React.StrictMode>
);
