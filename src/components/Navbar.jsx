import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/chadia-logo-new.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaHandsHelping, FaUserFriends } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const isMobile = window.innerWidth <= 768;
  const isHomeOrJoin = ["/", "/careers"].includes(location.pathname);
  const defaultTextColor =
    !isMobile && !isSticky && isHomeOrJoin ? "#fff" : "#000";

  const tabMap = {
    "/": "home",
    "/services": "service",
    "/about": "contact",
    "/careers": "join",
  };
  const activeTab = tabMap[location.pathname] || "";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${isSticky ? "sticky" : ""}`}>
      <div className="nav-container">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="Chadia Energy" className="logo-img" />
          </div>
        </a>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes size={24} color={defaultTextColor} />
          ) : (
            <FaBars size={24} color={defaultTextColor} />
          )}
        </div>

        {/* Grid Navigation */}
        <div className={`us-grid ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={closeMenu}>
            <div
              className={`gr gr1 ${activeTab === "home" ? "active" : ""}`}
              style={{ color: defaultTextColor }}
            >
              <FaUserFriends />
              Home
            </div>
          </a>
          <a href="/services" onClick={closeMenu}>
            <div
              className={`gr gr2 ${activeTab === "service" ? "active" : ""}`}
              style={{ color: defaultTextColor }}
            >
              <MdHomeRepairService />
              Our Services
            </div>
          </a>
          <a href="/about" onClick={closeMenu}>
            <div
              className={`gr gr3 ${activeTab === "contact" ? "active" : ""}`}
              style={{ color: defaultTextColor }}
            >
              <IoIosCall />
              Contact Us
            </div>
          </a>
          <a href="/careers" onClick={closeMenu}>
            <div
              className={`gr gr3 ${activeTab === "join" ? "active" : ""}`}
              style={{ color: defaultTextColor }}
            >
              <FaHandsHelping />
              Join Us
            </div>
          </a>
        </div>

        <div className="eng" style={{ color: defaultTextColor }}>
          <p>English</p>
        </div>
      </div>
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
