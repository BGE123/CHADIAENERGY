import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/chadia-logo-new.svg";
import { FaUsersRectangle, FaHandHoldingHand } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeOrJoin = ["/", "/careers"].includes(location.pathname);
  const defaultTextColor = !isSticky && isHomeOrJoin ? "#fff" : "#000";

  const tabMap = {
    "/": "home",
    "/services": "service",
    "/about": "contact",
    "/careers": "join",
  };
  const activeTab = tabMap[location.pathname] || "";

  return (
    <nav className={`nav ${isSticky ? "sticky" : ""}`}>
      <div className="nav-container">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="Chadia Energy" className="logo-img" />
          </div>
        </a>

        {/* 👇 Replacing default links with tab grid */}
        <div className="us-grid">
          <a href="/">
            <div
              className={`gr gr1 ${activeTab === "home" ? "active" : ""}`}
              onClick={() => {
                activeTab("home");
              }}
              style={{ color: defaultTextColor }}
            >
              <FaUsersRectangle />
              Home
            </div>
          </a>
          <a href="/services">
            <div
              className={`gr gr2 ${activeTab === "service" ? "active" : ""}`}
              onClick={() => {
                activeTab("service");
              }}
              style={{ color: defaultTextColor }}
            >
              <MdHomeRepairService />
              Our Services
            </div>
          </a>
          <a href="/about">
            <div
              className={`gr gr3 ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => {
                activeTab("contact");
              }}
              style={{ color: defaultTextColor }}
            >
              <IoIosCall />
              Contact Us
            </div>
          </a>
          <a href="/careers">
            <div
              className={`gr gr3 ${activeTab === "join" ? "active" : ""}`}
              onClick={() => {
                activeTab("join");
              }}
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
    </nav>
  );
};

export default Navbar;
