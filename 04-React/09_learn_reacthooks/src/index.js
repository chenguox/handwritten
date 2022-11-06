import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContext, ThemeContext } from './03_useContext/context/index'

// import App from './App_class'
// import App from './App';

import App from './03_useContext/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={{name: 'cgx', age: 18}}>
    <ThemeContext.Provider value={{color: 'red', size: 24}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContext.Provider>
  </UserContext.Provider>
);

