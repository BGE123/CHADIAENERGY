import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>What We Do</h1>
        <p>
          At Chadia Energy, we deliver sustainable energy solutions, precise
          engineering services, and strategic consulting tailored for impact.
        </p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <img src="/src/assets/solar.jpg" alt="Energy Solutions" />
          <h2>Renewable Energy Solutions</h2>
          <p>
            Development and integration of renewable energy systems, including
            solar, wind, repair, maintenance, and bioenergy to help clients
            reduce their carbon footprint.
          </p>
        </div>

        <div className="service-card">
          <img src="/src/assets/engineer.jpeg" alt="Engineering Services" />
          <h2>Engineering Services</h2>
          <p>
            Precision-driven engineering project design, implementation, and
            project management tailored to meet complex energy sector needs.
          </p>
        </div>

        <div className="service-card">
          <img src="/src/assets/consult.jpg" alt="Consulting Services" />
          <h2>Consulting Services</h2>
          <p>
            Our expert advisory covers energy optimization strategies, sustainability goals,
            and operations planning to boost efficiency and compliance.
          </p>
        </div>

        <div className="service-card">
          <img src="/src/assets/audit.jpeg" alt="Energy Audits" />
          <h2>Energy Audits</h2>
          <p>
            Detailed assessments to identify energy-saving opporrtunities and
            enhance operational efficiency in existing systems.
          </p>
        </div>

        <div className="service-card">
          <img src="/src/assets/genserv.jpeg" alt="General Services" />
          <h2>General Services</h2>
          <p>
            Procurement services, importation, exportation, warehousing, general 
            supplies, distributors, purchasing, manufacturer's representatives...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
