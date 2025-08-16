import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Smartphone } from "lucide-react";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner container">
        <header className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-tagline" aria-hidden>
            React · Next.js · React Native
          </div>
        </header>

        <motion.p
          className="about-intro"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          I’m a <strong className="accent">frontend developer</strong> with 3+ years of experience building modern,
          accessible, and high-performance web & mobile interfaces using React.js, Next.js, and React Native.
        </motion.p>

        {/* Modern & professional links */}
        <motion.div
          className="about-links"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <span className="about-links-text">Explore my work and connect:</span>
          <a
            href="https://linkedin.com/in/s-abisha"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-link"
          >
            LinkedIn
          </a>
          <span className="separator">•</span>
          <a
            href="https://github.com/Abishasaminathan"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-link"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          className="about-cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div className="about-card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
            <Code2 className="about-icon" />
            <h4>React Development</h4>
            <p className="muted">Reusable components, state & performance optimizations.</p>
          </motion.div>

          <motion.div className="about-card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
            <Rocket className="about-icon" />
            <h4>Next.js (SEO + Speed)</h4>
            <p className="muted">SSR/SSG, image & route optimizations, production readiness.</p>
          </motion.div>

          <motion.div className="about-card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
            <Smartphone className="about-icon" />
            <h4>React Native Apps</h4>
            <p className="muted">Cross-platform UIs with near-native performance.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
