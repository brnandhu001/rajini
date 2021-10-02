import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import "./Home.css";
import com_logo from "./Im/com_logo.png"
import flim from "./Im/flim.png"
import admin from "./Im/admit.png"
import showcase from "./Im/showcase.png"
import re_part2_1 from "./Im/re_part2_1.png"
import rebg from "./Im/rebg.png"
import re_beg2 from "./Im/re_beg2.png"
import singam from "./Im/singam.png"
import boss from "./Im/boss.png"
import sivaji from "./Im/sivaji.png";
import vijay from "./Im/vijay.png";
import telugu_h from "./Im/telugu_h.png"
import o_im from "./Im/o_im.png"
import ynot from "./Im/ynot.jpg"

import reliance from "./Im/reliance.png";
import avm from "./Im/avm.jpg"
import tsl from "./Im/tsl.png"
import mango from "./Im/mango.png"
import right from "./Im/right.png"



export default function Homepg() {
    return (<Router>
        <div className="home-full">
            {/* <div className="nav">
                <div>
                    <img className="com-logo" src={com_logo} alt="Logo" />
                </div>
                <div className="list">
                    <ul>


                        <li className='li'>COLLECTIONS</li>



                        <li className='li'>MARKETPLACE</li>

                        <li className='li'>HOW IT WORKS</li>
                        <li className='li'>BLOG</li>
                        <li className='li'>ABOUT</li>
                    </ul>
                </div>
            </div> */}

            {/* <div className="home-text">

                <div className="home-set">
                    <p className="home-heading">own a piece <br></br>of history</p>
                    <br></br>
                    <p className="para">Ever had a chill run down your spine when see "superstar  <br></br> Rajinikanth" in big bold words
                        at the cinima? what if you could own <br></br> that moment? If you're a fanof cinima this is the place for you. <br></br>
                        Diginoor lets you own the piece of your favourite movie and star, <br></br>
                        Sharukh khan or Rajinikanth a moment which you & only you will <br></br>
                        uniquely own.Want your share of history
                    </p>
                    <div className="home-bt">
                        <a href="/"><button className="bbn632-hover bn28">CLAIM NOW</button></a>
                    </div>

                </div>
            </div> */}

            {/* resourse starts their */}

            {/* <div className="resourse">

                <h2 className="re-heading">RESOURCES TO GET YOU STARTED</h2>
                <div className="re-cards">
                    <div className="re">
                        <img className="re_immg" src={flim} alt="Logo" />
                        <h3 className="re_menu1">view collections</h3>
                    </div>

                    <div className="re">
                        <img className="re_immg" src={admin} alt="Logo" />
                        <h3 className="re_menu2">Trade on the marketplace</h3>
                    </div>

                    <div className="re">
                        <img className="re_immg" src={showcase} alt="Logo" />
                        <h3 className="re_menu3">Build your showcase</h3>
                    </div>
                </div>

                <div className="re-part2">
                    <div className="re-everthing">
                        <img className="re_part2_1" src={re_part2_1} alt="Logo" />
                        <h1 className="re_part2_text1">everthing you need to known</h1>


                    </div>
                    <div className="re-beginers_guide">
                        <div className="re-beginers1">
                            <img className="re-img" src={rebg} alt="Logo" />
                            <div class="overlay">beginers guide for NFT</div>
                        </div>





                        <div className="re-beginers-2">
                            <img className="re-img" src={re_beg2} alt="Logo" />

                            <div class="overlay">beginers guide for NFT</div>

                        </div>
                    </div>

                </div>
            </div> */}

            {/* top selling collections */}

            <div className="top_selling">
                <h1 className="top-selling-heading">TOP SELLING COLLECTION</h1>

                <div className="marana_mass">
                    <p className="maranamass-text">marana mass<br></br> moment</p>
                    <p className="mass-para">collect them all at $299</p>


                </div>

                <div className="movies">

                    <div className="singam">
                        <img className="singam" src={singam} alt="Logo" />

                        <h1 className="singam-text">singam</h1>
                        <button className="load-bt"></button>
                        <button className="load-bt"></button>
                        <button className="load-bt"></button>
                        <button className="load-bt"></button>
                        <button className="load-bt"></button>
                        <button className="load-bt"></button>
                    </div>
                    <div className="movie-list">
                        <div className="movie-block" >
                            <img className="movie-block" src={telugu_h} alt="Logo" />
                            <h3 className="movie-text">Fear  him</h3>
                            <div className="time"><h3>20.9.9</h3></div>
                        </div>
                        <div className="movie-block">
                            <img className="movie-block" src={boss} alt="Logo" />
                            <h3 className="movie-text">Motta boss still</h3>
                            <div className="time"><h3>20.9.9</h3></div>
                        </div>
                        <div className="movie-block2">
                            <img className="movie-block" src={sivaji} alt="Logo" />
                            <h3 className="movie-text">rajini swag</h3>
                            <div className="time"><h3>20.9.9</h3></div>
                        </div>
                        <div className="movie-block2">
                            <img className="movie-block" src={vijay} alt="Logo" />
                            <h3 className="movie-text">romane 101</h3>
                            <div className="time"><h3>20.9.9</h3></div>
                        </div>





                    </div>
                </div>








                <div className="top-sellers">

                    <h1 className="thead">top seller</h1>
                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">

                           



                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>

                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>


                    </div>

                    <div className="top-card">
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <button className="lo"></button>
                        <div className="top-dot-menu">
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                            <button className="top-dot"></button>
                        </div>



                        <div className="top-im">


                        </div>
                        <div className="top-details">
                            <p className="top-card-title">shivaji</p>
                            <p className="top-card-title1">legendary</p>
                            <p className="top-card-title-price">$ 230  </p>

                        </div>
                        <div className="like">
                            <span className="glyphicon glyphicon-heart-empty"> </span>
                        </div>


                    </div>





                </div>




                <div className="offical-pattners">
                    <div>
                        <p className="o-head"> OFFICIAL PATTNERS</p>
                        <img className="o-img" src={o_im} alt="Logo" />
                    </div>

                    <div className="o-card-all">

                        <div className="o-card">
                            <img className="o-p-img" src={ynot} alt="Logo" />
                            <img className="o-right" src={right} alt="Logo" />
                            <p className="o-text"> YNOT studio</p>


                        </div>






                        <div className="o-card">
                            <img className="o-p-img" src={reliance} alt="Logo" />
                            <img className="o-right" src={right} alt="Logo" />
                            <p className="o-text"> Reliance Entertainment
                            </p>


                        </div>

                        <div className="o-card">
                            <img className="o-p-img" src={avm} alt="Logo" />
                            <img className="o-right" src={right} alt="Logo" />
                            <p className="o-text"> AVM Productions</p>


                        </div>

                        <div className="o-card">
                            <img className="o-p-img" src={tsl} alt="Logo" />
                            <img className="o-right" src={right} alt="Logo" />
                            <p className="o-text"> Thenandal Studios</p>


                        </div>

                        <div className="o-card">
                            <img className="o-p-img" src={mango} alt="Logo" />
                            <img className="o-right" src={right} alt="Logo" />
                            <p className="o-text"> Mango Mass Media </p>


                        </div>

                    </div>



                </div>



            </div>

        </div>






    </Router>
    )
}