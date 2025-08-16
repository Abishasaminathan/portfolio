import React from "react";
import { motion } from "framer-motion";
import "./hero.css";
// import heroImage from "../../public/image.png";

export default function Hero() {
  return (
    <section className="section hero" id="hero">
      {/* <div className="hero-content">
        <img src={heroImage} alt="Abisha" className="hero-image" />
      </div> */}
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I’m Abisha
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Frontend Developer — React.js • Next.js • React Native
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="ctas"
        >
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
