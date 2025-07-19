import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p>© 2025 Chadia Energy Systems Ltd</p>
                <div className="social-icons">
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaYoutube/></a>
                    <a href="#"><FaLinkedin/></a>
                </div>
            </div>

            <div className="footer-links">
                <div>
                    <h4>Topic</h4>
                    <p>Page</p>
                    <p>Page</p>
                    <p>Page</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <p>News</p>
                    <p>Careers</p>
                    <p>About</p>
                </div>
                <div>
                    <h4>Resources</h4>
                    <p>Sustainability</p>
                    <p>Privacy Policy</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;