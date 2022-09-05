import  './headerStyl.css';

import {FaBars, FaTimes} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import React from "react";
import { useRef } from "react";

function Header  () {
  const navRef = useRef(); 
  
  const showNavBar =() =>{
    navRef.current.classList.toggle('responsive_nav');
  }
  
  return (
    <header>
      
      <h3 >Stark Track</h3>
        
      <nav ref={navRef}>
        <ul >
            <NavLink className="menuBar" to='/'>Home</NavLink>
            <NavLink className="menuBar" to='/userpage'>Workstation</NavLink>
            <NavLink className="menuBar" to='/support'>CTDI</NavLink>
        </ul>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}><FaTimes/></button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}><FaBars/></button>
  
      </header>
  );
}
  
export default Header;