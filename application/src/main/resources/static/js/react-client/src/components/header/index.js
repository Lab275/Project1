import { NavLink } from "react-router-dom";
import React from "react";
import style from './headerStyle.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      
      <h1 className={style.title}>Stark Track</h1>
     
      
    
      <nav className={style.navList}>
        <ul className={style.navList}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/support'>CTDI</NavLink>
            <NavLink to='/userpage'>Associate</NavLink>
        </ul>
      </nav>
  
      </header>
  );
}
  
export default Header;