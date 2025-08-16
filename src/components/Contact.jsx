import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    // Replace with Formspree or EmailJS
    alert("Thanks! Connect your email service to send messages.");
  };

  return (
    <section id="contact">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="section-header">
          <h2>Contact</h2>
        </div>

        <motion.form
          className="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <input className="input" placeholder="Your name" required />
          <input className="input" type="email" placeholder="you@example.com" required />
          <textarea className="textarea" placeholder="Tell me about your project..." required />
          <button className="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}
