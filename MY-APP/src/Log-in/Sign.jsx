import React from 'react';
import Signlo from './Im/Signlo.jpg'
import google from './Im/google.png'
import './Sign.css';
import { Link, BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";





function Signup() {
  return (<div className="all">
        <img className="rajini" src={Signlo} alt="Logo" />;




        <div className="login">

          <button className="google-log"><img className="google" src={google} alt="Logo" /> signup with google</button>


          <br></br><br></br><br></br>

          <form className="form">
            <label>Email</label>
            <br></br>
            <input className="textbox" type="text" placeholder="enter mail Id"></input>
            <br></br><br></br><br></br>
            <label>password</label>
            <br></br>
            <input className="textbox" type="password" placeholder="password"></input><br></br><br></br><br></br>



      
            
            
             <button className="bn632-hover bn21">SIGN UP</button>

           
          </form>
        </div>
      </div>


      
      


     
  )
    
}
export default Signup