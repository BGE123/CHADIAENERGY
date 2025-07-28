import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/chadia-logo-new.svg";
import { Link, useLocation } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

function About() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = `${firstName} ${lastName}`;
    const formData = { name, email, message };

    try {
      const res = await fetch("https://chadiaenergy.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Message sent successfully!");

      // Clear form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="about-page">
        <div class="get-in-touch">
          <h1>Get In Touch With Our Friendly Team</h1>
        </div>
        <div class="two">
          <div>
            <div className="logo1">
              <img src={logo} alt="Chadia Energy" />
            </div>
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Enter your question or message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
