import React from 'react';
import L1 from './Im/L1.jpg'
import google from './Im/google.png'
import './Log.css';
import { Link, BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
// import Signup from './Sign';




function Login() {
  return (
    <Router>
      <div className="all">
        <img className="rajini" src={L1} alt="Logo" />;




        <div className="login">

          <button className="google-log"><img className="google" src={google} alt="Logo" /> login with google</button>


          <br></br><br></br><br></br>

          <form className="form">
            <label>Email</label>
            <br></br>
            <input className="textbox" type="text" placeholder="enter mail Id"></input>
            <br></br><br></br><br></br>
            <label>password</label>
            <br></br>
            <input className="textbox" type="password" placeholder="password"></input><br></br><br></br><br></br>



      
            <a href=""  className="forget">forgot password?</a>

            <Link className="forget" to="">signup</Link><br></br>
            
             <button className="bn632-hover bn21">SIGN IN</button>

           
          </form>
        </div>
      </div>


      {/* <Switch>
        <Route exact path="/">
          <Signup/>
        </Route>
      </Switch> */}
      


     

    </Router>)
}
export default Login

