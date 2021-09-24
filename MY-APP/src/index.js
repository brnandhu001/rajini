import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Log-in/Login';
import Main from "./Home/Navb"
import Signup from "./Log-in/Sign"
import Wallets from "./Wallet_pg/Wallet"


ReactDOM.render(
  <React.StrictMode>
  {/* <Wallets/> */}
    {/* <Login /> */}
    <Main/>
    {/* <Signup/> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

