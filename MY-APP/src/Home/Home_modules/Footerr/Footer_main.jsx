import React from "react";
import "./Footer.css"


export default function Fotter() {
    return <footer>
    
        <div className="foot-list-all">
            <div className="foot-list">
                <ul className="fooot-ul">
                    <li className="list-head-ftr">Dignoor</li>
                    <li className="ftr-li">explore</li>
                    <li className="ftr-li">help center</li>
                    <li className="ftr-li">blog</li>
                    <li className="ftr-li">jobs</li>
                    <li className="ftr-li">become a partner</li>
                </ul>

            </div>

            <div className="foot-list">

                <ul className="fooot-ul" >
                    <li className="list-head-ftr" >Community</li>

                    <li className="ftr-li">discussion</li>
                    <li className="ftr-li">suggest feature</li>
                    <li className="ftr-li">subscribe</li>
                    <li className="ftr-li">FAQS</li>
                    <li className="ftr-li">All about NFTs</li>
                </ul>

            </div>
        </div>
        <div className="foot-rightt">


            <div>

                <h3 className="subs-ftr">subscribe to our newletter</h3>
            </div>

            <div className="foot-tong">
                <div class="switch-buttonn">
                    <input class="switch-buttonn-checkbox" type="checkbox"></input>
                    <label class="switch-buttonn-label" for=""><span class="switch-buttonn-label-span" >your mail id</span></label>
                </div>

            </div>


            <div>
                <h3 className="fot-join">  join diginoor Community</h3>


            </div>
            <br></br>

            <div className="footer-ic" >


                <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <a class="gplus-ic">
                    <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <a class="li-ic">
                    <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <a class="pin-ic">
                    <i class="fab fa-whatsapp fa-lg white-text fa-2x"> </i>
                </a>
            </div>
            
            




        </div>
        <div className="line-fot">
      
            
        </div>
        <br></br>

        <div className="cpy-fot">
        <div className="footer-copyright text-left py-3">© 2020 Copyright:
   
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  <span className="terms-fot">Terms privacy policy</span>
  
  </div>
 
  </div>





    </footer>

}