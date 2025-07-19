import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/chadia-logo-new.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
  <div className="nav-container">
    <div className="logo">
      <a href="/" id='logo'><img src={logo} alt="Chadia Energy" className='logo-img'/></a></div>
    <ul className="nav-links">
      
      <li><a href="/about">Who we are</a></li>
      <li><a href="/services">What we do</a></li>
      <li><a href="/sustainability">Sustainability</a></li>
      <li><a href="/careers">Join us</a></li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
