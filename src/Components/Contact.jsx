import React from 'react'
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a href="https://instagram.com/ur0.0b/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon instagram" />
        </a>
        <a href="mailto:aabiyah.uroob@gmail.com">
          <FaEnvelope className="social-icon gmail" />
        </a>
        <a href="https://www.linkedin.com/in/aabiyah-ahmed/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon linkedin" />
        </a>
        <a href="https://github.com/aabiyahahmed/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon github" />
        </a>
      </div>
    </section>

    </div>
  )
}
export default Contact