import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/solar.jpg";
import img2 from "../assets/engineer.jpeg";
import img3 from "../assets/consult.jpg";
import img4 from "../assets/genserv.jpeg";
import img5 from "../assets/audit.jpeg";
const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};
const Services = () => {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="services-page">
        <section
          ref={heroRef}
          className={`services-hero new ${heroVisible ? "animate-in" : ""}`}
        >
          <h1>What We Do</h1>
          <p>
            At Chadia Energy, we deliver sustainable energy solutions, precise
            engineering services, and strategic consulting tailored for impact.
          </p>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <h2>Renewable Energy Solutions</h2>
            <div class="more">
              <img src={img1} alt="Energy Solutions" />
              <div>
                <p>
                  At Chadia Energy, we specialize in designing and installing
                  reliable power systems tailored to your specific needs.
                  <br></br>
                  Whether it’s a commercial facility, industrial plant, or
                  residential estate, our expert engineers ensure your
                  electrical infrastructure is robust, efficient, and
                  future-ready. From conceptual layout and load analysis to
                  equipment selection and full-scale implementation, we take a
                  hands-on approach to guarantee safe and compliant
                  installations.
                  <br></br>
                  Our designs prioritize energy efficiency, scalability, and
                  minimal downtime to keep your operations running smoothly.
                </p>
              </div>
            </div>
          </div>

          <div className="service-card1">
            <h2>Engineering Services</h2>
            <div class="more1">
              <img src={img2} alt="Engineering Services" />
              <div>
                <p>
                  At Chadia Energy, our engineering services are rooted in
                  precision, innovation, and reliability. We specialize in
                  designing and executing high-impact engineering projects
                  tailored to the unique challenges of the energy sector.
                  <br></br>
                  From initial concept and feasibility studies to detailed
                  design, implementation, and project management, our
                  multidisciplinary engineering team ensures every project is
                  delivered to the highest technical standards. We apply
                  industry best practices and cutting-edge technology to develop
                  sustainable and efficient systems for power generation,
                  distribution, infrastructure, and industrial development.
                  <br></br>
                  Whether it's electrical, mechanical, or civil engineering, we
                  provide solutions that align with regulatory requirements and
                  are optimized for performance, safety, and long-term value.
                </p>
              </div>
            </div>
          </div>

          <div className="service-card">
            <h2>Consulting Services</h2>
            <div class="more">
              <img src={img3} alt="Consulting Services" />
              <div>
                <p>
                  Our consultancy services are designed to support
                  infrastructure development and technical decision-making at
                  every stage of your project. From preliminary feasibility
                  studies to detailed engineering design and implementation
                  guidance, we work closely with clients to offer reliable,
                  data-driven insights.
                  <br></br>
                  Our team brings years of field experience in energy systems,
                  mechanical and electrical engineering, construction support,
                  and regulatory compliance.
                  <br></br>
                  We serve as your technical partner, helping you navigate
                  complex engineering challenges and achieve successful project
                  outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="service-card1">
            <h2>Energy Audits</h2>
            <div class="more1">
              <img src={img4} alt="Energy Audits" />
              <div>
                <p>
                  Our Energy Audit services offer comprehensive evaluations of
                  energy consumption patterns within facilities and systems. By
                  analyzing equipment performance, utility usage, and
                  operational behavior, we identify inefficiencies and recommend
                  actionable strategies to reduce energy waste and operating
                  costs.
                  <br></br>
                  Our audits cover everything from lighting and HVAC systems to
                  industrial processes and building envelopes. Using advanced
                  diagnostic tools and benchmarking techniques, we deliver
                  detailed reports that highlight potential improvements, cost
                  savings, and environmental impact reductions.
                  <br></br>
                  The goal is to help clients enhance energy efficiency, meet
                  sustainability goals, and comply with local and international
                  energy standards.
                </p>
              </div>
            </div>
          </div>

          <div className="service-card">
            <h2>General Services</h2>
            <div class="more">
              <img src={img5} alt="General Services" />
              <div>
                <p>
                  At Chadia Energy, we offer a broad range of general services
                  that support smooth operations across various industries and
                  sectors. Our procurement services ensure that clients receive
                  quality equipment, materials, and supplies—on time and within
                  budget.
                  <br></br>
                  We handle both importation and exportation processes, managing
                  all logistics, customs documentation, and compliance
                  requirements to simplify global trade for our partners. In
                  addition, our warehousing capabilities ensure secure and
                  organized storage of goods, with efficient inventory
                  management systems in place. We serve as trusted distributors
                  and purchasing agents, connecting clients with reliable
                  manufacturers and acting as their official representatives.
                  <br></br>
                  Whether you're sourcing specialized components or everyday
                  supplies, our expertise in supply chain management and vendor
                  relations guarantees a streamlined and dependable experience
                  from procurement to delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Services;
