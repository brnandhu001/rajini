import React  from 'react';
import {Link,BrowserRouter as Router, Route,Switch,} from "react-router-dom";
import About from './About';
import All_about from './All_about';
import Collections from './Collections';
import  How_it_works from './How';

import  Homepg from './Home';

import  Market from "./Market";
import  Login from "../Log-in/Login"
import Signup from '../Log-in/Sign';
import Wallets from "../Wallet_pg/Wallet"
import Home from './Home';

export default function Main(){
    return(
        
        <Router>
        <div className="home-all">
        {/* <div className="list">
            <ul>
                <li  className="li"><Link to="/about">ABOUT</Link></li>
                <li className="li">
                <Link to="/collections">COLLECTIONS</Link>
                </li>
                <li className="li">
                
                <Link to="/how it works">HOW IT WORKS</Link>
                </li>
                <li className="li">
                <Link to="/allaboutnfts">ALLABOUTNFTS</Link>
                
                </li>
                <li className="li">
                <Link to="/marketplace">MARKETPLACE</Link>
                
                </li>
                <li className="li">
                <Link to="/login">LOGIN</Link>
                
                </li>
                 <li className="li">
                <Link to="/signup">SIGNUP</Link>
                
                </li> 
                <li className="li">
                <Link to="/wallet">WALLET</Link>
                
                </li> 
            </ul>
        </div> */}
       
       
    
        </div>

        <Switch>
       
            <Route exact path="/">
            <Home/>
            </Route>
            
            <Route exact path="/about">
            <About/>
            </Route>
            <Route exact path="/collections">
            <Collections/>
            </Route>
            <Route exact path="/how it works">
            <How_it_works/>
            </Route>
            <Route exact path="/allaboutnfts">
            <All_about/>
            </Route>
            <Route exact path="/marketplace">
            <Market/>
            </Route>
            <Route exact path="/login">
            <Login/>
            </Route>
             <Route exact path="/signup">
             <Signup/>
        
            </Route> 
            <Route exact path="/wallet">
             <Wallets/>
        
            </Route> 
         </Switch>
            </Router>
            
        
    )
}