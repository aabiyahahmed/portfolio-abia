import React from 'react'
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
const gmail = "aabiyah.uroob@gmail.com"
const linkedIn = "linkedin.com/in/aabiyah-ahmed/"

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
  <div className="contact-container">
    {/* Contact Form */}
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form action="https://formspree.io/f/mqadjqlg" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
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

  )
}
export default Contact