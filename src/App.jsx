import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainability";
import Services from "./pages/Services";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
