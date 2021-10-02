import React from "react";
import "./check_out.css"
import { Link, BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import right from "../Im/right.png"
import twitter from "../Im/twitter.jpg"
import insta_logo from "../Im/insta_logo.png"

export default function Check_out() {


    return <div className="checkout">

        {/* heading */}

        <div className="box-head">


            <div className="box-heading">

                <p className="box-text">check out the Diginoor community at large<span><a className="anger">fellow them here</a></span>   </p>
            </div>


        </div>



        <div className="box-all">
            <div className="box-card1">

                <div className="user-img">
                    {/* user  img here */}


                </div>

                <div className="user-name">
                    <p className="tu">Twitter user <span><img className="user-right" src={right} alt="Logo" /></span> <span><img className="twitter-logo" src={twitter} alt="Logo" /></span></p>
                    <p className="tu-2">@Twitteruser</p>


                </div>
                <div className="t-top-text">
                    <p className="text-para">Grape a piece of indian cinema for sale</p>
                    <p className="para-link">@diginoor</p>

                </div>

                <div className="user-img-box">


                </div>

                <div className="like-box">
                    <p ><span className="glyphicon glyphicon-heart-empty">5,777</span>  <span > 11.08pm  may5 2014</span> <span className="glyphicon glyphicon-info-sign" id="i-symbal"></span> </p>
                    <p><span></span></p>

                </div>
                <hr></hr>

                <div className="box-bottom">
                    <p ><span className="glyphicon glyphicon-comment" id="cmt-symbol" >  </span> 4000 peoples talk about this</p>

                </div>



            </div>


            {/* cart2 starts here */}

            <div className="box-card2">
                <div className="user-img">
                    {/* user  img here */}


                </div>
                <div className="user-name">
                    <p className="insta-user1">@instagram user  <span><img className="user-right" src={right} alt="Logo" /></span> <button className="view-pro">view profile</button></p>
                    <p className="insta-user2">instagram user </p>
                </div>

                <div className="box-2-img">

                </div>
                <div className="view-more-text">
                    <p>view more on instagram</p>


                </div>
                <hr></hr>
                <div className="like-cmt-upload">

                    <p><span className="glyphicon glyphicon-heart-empty"> </span> <span className="glyphicon glyphicon-comment"></span> <span className="glyphicon glyphicon-open"></span> <span className="glyphicon glyphicon-bookmark" id="bookmark"></span></p>
                </div>

                <div className="like-text">
                    <p>222 likes <br></br>instagramers </p>




                </div>

                <div className="in-ppppra">
                    <p>lorem ipsum dolor sit amet,consuctetur<br></br>adipiscing elit. vivamus in elementum<br></br>tellus,quise rhoncus turpis,<span className="digi-colr">@diginoor</span></p>

                </div>
                <hr className="hr"></hr>
                <div className="cmmmt">
                    <p>Add a comment......<span><img className="insta_logo" src={insta_logo}></img></span></p>

                </div>





            </div>
            <div className="box-card3">
            <h2>blog post1</h2>


            </div>




            {/* card 4 start here */}

            <div className="box-card4">
                <div className="user-img">
                    {/* user  img here */}


                </div>

                <div className="user-name">
                    <p className="tu">Twitter user <span><img className="user-right" src={right} alt="Logo" /></span> <span><img className="twitter-logo" src={twitter} alt="Logo" /></span></p>
                    <p className="tu-2">@Twitteruser</p>


                </div>
                <div>
                    <p className="boxx-4-para">lorem ipsum dolor sit amel,
                        <br></br>
                        consuctetur adipiscing elit. vivamus in <br></br>
                        elementum tellus,quise rhoncus turpis,
                        <br></br>
                        Quiseque idam odio,elementum ut nisl
                        <br></br>
                        eget,euismod dapibus justo
                        <br></br>
                        <span className="digi-colr">@diginoor</span>

                    </p>
                </div>
                <br></br>
                <div className="like-box">
                    <p ><span className="glyphicon glyphicon-heart-empty">5,777</span>  <span > 11.08pm  may5 2014</span> <span className="glyphicon glyphicon-info-sign" id="i-symbal"></span> </p>
                    <p><span></span></p>

                </div>
                <hr></hr>
                <div className="box-bottom">
                    <p ><span className="glyphicon glyphicon-comment" id="cmt-symbol" >  </span> 4000 peoples talk about this</p>

                </div>



            </div>

            <div className="box-card5">
            <h2>blog post2</h2>
            <h2>blog post2</h2>
            <h2>blog post2</h2>


            </div>


            {/* car6 start here */}
            <div className="box-card6">

                <div className="user-img">
                    {/* user  img here */}


                </div>

                <div className="user-name">
                    <p className="tu">Twitter user <span><img className="user-right" src={right} alt="Logo" /></span> <span><img className="twitter-logo" src={twitter} alt="Logo" /></span></p>
                    <p className="tu-2">@Twitteruser</p>


                </div>
                <div>
                    <p className="boxx-4-para">lorem ipsum dolor sit amel,
                        <br></br>
                        consuctetur adipiscing elit. vivamus in <br></br>
                        elementum tellus,quise rhoncus turpis,
                        <br></br>
                        Quiseque idam odio,elementum ut nisl
                        <br></br>
                        eget,euismod dapibus justo
                        <br></br>
                        lorem ipsum dolor sit amel,
                        <br></br>
                        consuctetur adipiscing elit. vivamus in <br></br>
                        elementum tellus,quise rhoncus turpis,
                        <br></br>
                        Quiseque idam odio,elementum ut nisl
                        <br></br>
                        eget,euismod dapibus justo
                        <br></br>
                        <span className="digi-colr">@diginoor</span>

                    </p>
                </div>
                <div className="double-img-box" >
                    <div className="double-img1">
                        {/* <h3>hello</h3> */}

                    </div>
                    <div className="double-img-2">

                    </div>

                </div>
                <div className="like-box">
                    <p ><span className="glyphicon glyphicon-heart-empty">5,777</span>  <span > 11.08pm  may5 2014</span> <span className="glyphicon glyphicon-info-sign" id="i-symbal"></span> </p>
                    <p><span></span></p>

                </div>
                <hr className="hr"></hr>
                <div className="box-bottom">
                    <p ><span className="glyphicon glyphicon-comment" id="cmt-symbol" >  </span> 4000 peoples talk about this</p>

                </div>


            </div>

            <div className="box-card7">
                <div className="user-img">
                    {/* user  img here */}


                </div>
                <div className="user-name">
                    <p className="insta-user1">@instagram user  <span><img className="user-right" src={right} alt="Logo" /></span> <button className="view-pro">view profile</button></p>
                    <p className="insta-user2">instagram user </p>
                </div>

                <div className="box-2-img">

                </div>
                <div className="view-more-text">
                    <p>view more on instagram</p>


                </div>
                <hr></hr>
                <div className="like-cmt-upload">

                    <p><span className="glyphicon glyphicon-heart-empty"> </span> <span className="glyphicon glyphicon-comment"></span> <span className="glyphicon glyphicon-open"></span> <span className="glyphicon glyphicon-bookmark" id="bookmark"></span></p>
                </div>

                <div className="like-text">
                    <p>222 likes <br></br>instagramers </p>




                </div>

                <div className="in-ppppra">
                    <p>lorem ipsum dolor sit amet,consuctetur<br></br>adipiscing elit. vivamus in elementum<br></br>tellus,quise rhoncus turpis,<span>@diginoor</span></p>

                </div>
                <hr className="hr"></hr>
                <div className="cmmmt">
                    <p>Add a comment......<span><img className="insta_logo" src={insta_logo}></img></span></p>

                </div>



            </div>

            <div className="box-card8">

                <div className="user-img">
                    {/* user  img here */}


                </div>

                <div className="user-name">
                    <p className="tu">Twitter user <span><img className="user-right" src={right} alt="Logo" /></span> <span><img className="twitter-logo" src={twitter} alt="Logo" /></span></p>
                    <p className="tu-2">@Twitteruser</p>


                </div>
                <div className="t-top-text">
                    <p className="text-para">Grape a piece of indian cinema for sale</p>
                    <p className="para-link">@diginoor</p>

                </div>

                <div className="user-img-box">


                </div>

                <div className="like-box">
                    <p ><span className="glyphicon glyphicon-heart-empty">5,777</span>  <span > 11.08pm  may5 2014</span> <span className="glyphicon glyphicon-info-sign" id="i-symbal"></span> </p>
                    <p><span></span></p>

                </div>
                <hr></hr>

                <div className="box-bottom">
                    <p ><span className="glyphicon glyphicon-comment" id="cmt-symbol" >  </span> 4000 peoples talk about this</p>

                </div>




            </div>




            {/* card9 start here */}

            <div className="box-card9">

                <div className="user-img">
                    {/* user  img here */}


                </div>
                <div className="user-name">
                    <p className="insta-user1">@instagram user  <span><img className="user-right" src={right} alt="Logo" /></span> <button className="view-pro">view profile</button></p>
                    <p className="insta-user2">instagram user </p>
                </div>


                <div className="box-9-img">

                </div>

                <div className="view-more-text">
                    <p>view more on instagram</p>


                </div>
                <hr></hr>
                <div className="like-cmt-upload">

                    <p><span className="glyphicon glyphicon-heart-empty"> </span> <span className="glyphicon glyphicon-comment"></span> <span className="glyphicon glyphicon-open"></span> <span className="glyphicon glyphicon-bookmark" id="bookmark"></span></p>
                </div>

                <div className="like-text">
                    <p>222 likes <br></br>instagramers </p>




                </div>

                <div className="in-ppppra">
                    <p>lorem ipsum dolor sit amet,consuctetur<br></br>adipiscing elit. vivamus in elementum<br></br>tellus,quise rhoncus turpis,<span className="digi-colr">@diginoor</span></p>

                </div>
                <hr className="hr"></hr>
                <div className="cmmmt">
                    <p>Add a comment......<span><img className="insta_logo" src={insta_logo}></img></span></p>

                </div>


            </div>



        </div>

        <div className="check-loadmore">

        <a href="/"><button className="bbn632-hover bn28">loadmore</button></a>

        </div>


    </div>


}