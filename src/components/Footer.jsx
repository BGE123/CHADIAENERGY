import React from "react";
import "./Footer.css";
import { ImFacebook2 } from "react-icons/im";
import {
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import logo from "../assets/chadia-logo-new.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" id="logo">
        <img src={logo} alt="Chadia Energy" className="logo-img" />
      </Link>
      <div class="main-footer">
        <div class="left-side">
          <div class="in-left">
            <h3>Address</h3>
            <p>123, Wall Street</p>
          </div>
          <div class="in-left">
            <h3>Contact</h3>
            <p>444-021-901</p>
            <p>chadiaenergyltd@gmail.com</p>
          </div>
          <div className="social-icons">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaYoutubeSquare />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <p>News</p>
            <p>Careers</p>
            <p>About</p>
          </div>
          <div>
            <p>Sustainability</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div>
          <p>© 2025 Chadia Energy Systems Ltd</p>
        </div>
        <div class="resources">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
