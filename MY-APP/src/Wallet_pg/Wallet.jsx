import React from 'react';
import vj from './Im/vj.jpg';
import meta from './Im/meta.png';
import  torous from './Im/torous.png';
import coinboss from './Im/coinboss.png';
import portis from './Im/portis.png';

// import google from './Im/google.png'
import './Wallet.css';
import { Link, BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { Card } from 'react-bootstrap';
// import Signup from './Sign';




function Wallets() {
  return (
    <Router>
      <div className="all_wallet">
        <img className="rajini" src={vj} alt="Logo" />;




        <div className="topic">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">connect your wallet</h1>
              <p className="explain">connect with any one of available wallet provaider or create new.</p>
            </div>
          </div>


          <div className="ca-all">
            <div className="card">
              <div className="card-body">
              <img className="walletlogo" src={meta} alt="Logo" />

                
                <div className="wallet-text">
                <h1>metamask</h1>
                <p className="explain">the most trested way to access store and swape the eth</p>
              </div>
              </div>
              </div>
            <div className="card">
              <div className="card-body">
              <img className="walletlogo" src={torous} alt="Logo" />
                
                <div className="wallet-text">
                <h1>Torus</h1>
                <p className="explain">connect with your google,facebook,discard,twitter</p>
              </div>

              </div>
            </div>
            <div className="card">
              <div className="card-body">
              <img className="walletlogo" src={coinboss} alt="Logo" />
              <div className="wallet-text">
              <h1 >coinbase</h1>
              <p className="explain">connect via app on your phone</p>
              </div>
                

              </div>
            </div>
            <div className="card">
              <div className="card-body">
              <img className="walletlogo" src={portis} alt="Logo" />
                
                <div className="wallet-text">
                <h1>Portis</h1>
                <p className="explain">connect with your email and password</p>
              </div>

              </div>
            </div>
            

          </div>


        </div>


      </div>


      {/* <Switch>
        <Route exact path="/">
          <Signup/>
        </Route>
      </Switch> */}





    </Router>)
}
export default Wallets