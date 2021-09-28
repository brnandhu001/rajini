import React from 'react';
import Navbar from '../Navbar_module/Navbar';
import Home_top from './Home_top';
import Top_selling from './Home_middle';


export default function Homemain(){
    return<><Navbar/>     {/*navbar*/}
    <Home_top/>   {/*main heading  and paragraph and button*/}

    <Top_selling/>    {/*topsellings to top sellers ----pls refer home_middle.jsx file*/}
    
    
    </>

       
   

} 