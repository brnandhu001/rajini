import React from 'react';
import Navbar from '../Navbar_module/Navbar';
import Home_top from './Home_top';
import Top_selling from './Home_middle';
import Check_out from './home_bottom/check_out';
import Footer from './Footerr/Footer_main';


export default function Homemain(){
    return(<>

    <Navbar/>     
    <Home_top/>   {/*main heading  and paragraph and button*/}

    <Top_selling/>    

    <Check_out/>
    <Footer/>
    
    
    </>)

       
   

} 