import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} <span>Abisha</span>. All rights reserved.
      {/* Optional: Add social links here */}
      {/* <div>
        <a href="https://github.com/abisha" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/abisha" target="_blank" rel="noreferrer">LinkedIn</a>
      </div> */}
    </footer>
  );
}
