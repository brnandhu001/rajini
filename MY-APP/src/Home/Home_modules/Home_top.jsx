import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import "./home_top.css";
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

export default function Home_top() {
    return<div className="home-full">
    <div className="home-text">

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
</div>

<div className="resourse">

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
</div>
</div>

}