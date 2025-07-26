import { useEffect, useRef } from "react";
import { useState } from "react";
import "./HomePage.css";
import { HiArrowSmRight } from "react-icons/hi";
import OurValue from "../components/ourValue";
import WhoWeAre from "../components/whoweare";
import Services from "../components/services";
import { motion } from "framer-motion";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};
const HomePage = () => {
  const valuesSectionRef = useRef(null);

  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-group");
          } else {
            entry.target.classList.remove("slide-group");
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = valuesSectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="homepage">
        <div class="hero-back">
          <section
            ref={heroRef}
            className={`hero ${heroVisible ? "animate-in" : ""}`}
          >
            <div class="overlay"></div>
            <div class="in-hero">
              <p>
                <span class="chadia">CHADIA</span>
                <span class="energy">ENERGY</span>
              </p>
              <h1>Powering the Future, Responsibly</h1>
              <p>
                Reliable, sustainable energy solutions for a greener tomorrow...
              </p>
              <div class="buttons">
                <a href="/services">
                  <button class="but2">
                    <div class="btn">
                      <a>Our Services</a>
                      <HiArrowSmRight />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>

        <section>
          {/* Render Selected Component */}
          <div id="who-we-are">
            <WhoWeAre />
          </div>
          <div id="serve">
            <Services />
          </div>
          <div id="our-value">
            <OurValue />
          </div>
        </section>

        <section className="why-chadia">
          <h2>Why Choose Chadia?</h2>
          <p>
            Chadia Energy combines technical expertise with a deep understanding
            of the energy landscape. Our team of professionals is passionate
            about delivering high-quality solutions that not only meet
            regulatory standards, but also foster economic growth and
            environmental sustainability.
          </p>
          <p>
            By choosing us, you gain a trusted partner committed to your success
            and the well-being of our planet.
          </p>
          <button style={{ display: "flex", justifyContent: "flex-end" }}>
            Read More
          </button>
        </section>
      </div>
    </motion.div>
  );
};

export default HomePage;
