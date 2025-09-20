import React from 'react'
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
const gmail = "aabiyah.uroob@gmail.com"
const linkedIn = "linkedin.com/in/aabiyah-ahmed/"

const Contact = () => {
  return (
    <>
    <section id="contact" className="contact-section">
    <div className="contact-container">

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>If you have any inquiries or just want to say hi, feel free to use the contact form!</p>
        <form action="https://formspree.io/f/mqadjqlg" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>

      </div>
    
    {/* Contact Details */}
    <div className="contact-details">
      <h3>Reach Me At</h3>
      <p>
        Email: <a href="mailto:aabiyah.uroob@gmail.com">{gmail}</a>
      </p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/aabiyah-ahmed/" target="_blank" rel="noopener noreferrer">
          {linkedIn}
        </a>
      </p>
    </div>
  </div>
  </section>
  <br />

  <footer className="footer">
      <div className="social-links">
         <a href="mailto:aabiyah.uroob@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/aabiyahahmed" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/aabiyah-ahmed" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Aabiyah Ahmed. All Rights Reserved.</p>
    </footer>
  <br /><br /><br />
   </>
  )
}
export default Contact