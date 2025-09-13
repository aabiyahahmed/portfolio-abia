import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export const SocialBar = () => {
     const [open, setOpen] = useState(false);
    return (
    <>
      {/* Desktop Fixed Bar */}
      <div className="social-bar">
        <a href="https://github.com/aabiyahahmed/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aabiyah-ahmed/"  target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:aabiyah.uroob@gmail.com">
          <FaEnvelope />
        </a>
       
        <div className="line"></div>
      </div>

    </>
  );
}
export default SocialBar;