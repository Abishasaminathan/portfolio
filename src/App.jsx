import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

export default function App(){
  const [isLight, setIsLight] = useState(document.documentElement.classList.contains("light"));
  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <>
<header className="navbar">
  <div className="container navbar-inner">
    <div className="brand">Abisha</div>

    <nav className="nav-links">
      <a href="#about" className={window.location.hash === "#about" ? "active" : ""}>About</a>
      <a href="#experience" className={window.location.hash === "#experience" ? "active" : ""}>Experience</a>
      <a href="#projects" className={window.location.hash === "#projects" ? "active" : ""}>Projects</a>
      <a href="#skills" className={window.location.hash === "#skills" ? "active" : ""}>Skills</a>
      <a href="#contact" className={window.location.hash === "#contact" ? "active" : ""}>Contact</a>
      <button className="theme-btn" onClick={toggleTheme}>{isLight ? "Dark" : "Light"}</button>
    </nav>
  </div>
</header>



      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
