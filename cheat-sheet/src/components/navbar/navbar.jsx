import React from 'react';
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assests/logo.png';


const navbar = () => {
  return (
    <div className= "cheatsheet__navbar">
      <div className="cheatsheet__navbar-links">
        <div className="cheatsheet__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="cheatsheet__navbar-links_container">
          <p><a href="#home"> Home </a></p>
          <p><a href="#note"> Tool </a></p>
          <p><a href="#possibility"> Template </a></p>
          <p><a href="#blog"> Explore</a></p>
        </div>
      </div>
      <div clasName="cheatsheet__navbar-sign">
        <p>Sign in</p>
        <button type="button"> Sign up</button>
      </div>
    </div>
  )
}

export default navbar