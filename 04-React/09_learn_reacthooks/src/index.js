import React from 'react';
import ReactDOM from 'react-dom/client';
// import { UserContext, ThemeContext } from './03_useContext/context/index'
import { UserContext, TokenContext } from './10_自定义Hooks/context'
import { Provider } from 'react-redux'
import store from './11_redux-hooks/store'

// import App from './App_class'
// import App from './App';

// import App from './03_useContext/App'
// import App from './04_useReducer(了解)/App'
// import App from './05_useCallback/App'
// import App from './06_useMome/App'
// import App from './07_useRef/App'
// import App from './08_useImperativeHandle/App'
// import App from './09_useLayoutEffect/App'
// import App from './10_自定义Hooks/01_打印生命周期/App'
// import App from './10_自定义Hooks/02_Context获取数据/App'
// import App from './10_自定义Hooks/03_获取窗口滚动位置/App'
// import App from './10_自定义Hooks/04_获取本地缓存数据/App'
import App from './11_redux-hooks/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={{name: 'cgx', age: 18}}>
    <TokenContext.Provider value={'codercgx'}>
      <Provider store={store}>
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
      </Provider>
    </TokenContext.Provider>
  </UserContext.Provider>
);

// root.render(
//   <UserContext.Provider value={{name: 'cgx', age: 18}}>
//     <ThemeContext.Provider value={{color: 'red', size: 24}}>
//       {/* <React.StrictMode> */}
//         <App />
//       {/* </React.StrictMode> */}
//     </ThemeContext.Provider>
//   </UserContext.Provider>
// );

