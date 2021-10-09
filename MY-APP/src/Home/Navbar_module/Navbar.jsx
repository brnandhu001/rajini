import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route, Switch, } from "react-router-dom";




import  Login from "../../Log-in/Login"
import Signup from '../../Log-in/Sign';
import Wallets from "../../Wallet_pg/Wallet"

import com_logo from "../../Home/Home_modules/Im/com_logo.png"
import "./navbar.css";
import Homemain from '../Home_modules/Main';
import About from '../../Pages/About/About';
import Collections from "../../Pages/Collections/Collections"
import Blog from "../../Pages/Blog/Blog";
import How_it_works from "../../Pages/How_it_works/How_it_works";
import Marketplace from '../../Pages/Marketplace/Marketplace';






export default function Navbar() {
     

  
    return (

        <Router>
            <nav className="nav-full">
                <div className="nav">
            
                    <div>
                    <ul>
                       <li><Link to="/"><img className="com-logo" src={com_logo} alt="Logo" /></Link></li>
                       </ul>
                        
                        
                    </div>
            
                  
                    
                    <div className="list">
                        <ul  >


                            <li className='li' ><Link to="/collections">COLLECTIONS</Link></li>



                            <li className='li ' ><Link to="/marketplace">MARKETPLACE</Link></li>

                            <li className='li ' ><Link to="/how it works">HOW IT WORKS</Link></li>
                            <li className='li' ><Link to="/blog">BLOG</Link></li>
                            <li className='li'><Link to="/about">ABOUT</Link></li>
                            {/* <li className='li'><i class='fas fa-wallet' id="wal-ic1" ></i></li> */}
                            <li className='li'><Link to="/wallet"><i class='fas fa-wallet' id="wal-ic" ></i></Link></li>
                            {/* <button className="mob">btn</button> */}
                            
                            
                             







                        </ul>

                        <div className="ton">
                            <div class="switch-button">
                                <input class="switch-button-checkbox" type="checkbox"></input>
                                <label class="switch-button-label"  for=""><span class="switch-button-label-span" >login</span></label>
                            </div>


                        </div>







                    </div>




                </div>


            </nav>






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





            <Switch>

                <Route exact path="/">
            <Homemain></Homemain>
            </Route>
            
            <Route exact path="/about">
            <About></About>
            </Route>
            <Route exact path="/collections">
            <Collections></Collections>
            </Route>
            <Route exact path="/how it works">
            <How_it_works/>
            </Route>
            <Route exact path="/blog">
            <Blog/>
            </Route>
            <Route exact path="/marketplace">
            <Marketplace></Marketplace>
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