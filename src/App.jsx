import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainability";
import Services from "./pages/Services"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/services" element={<Services />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
