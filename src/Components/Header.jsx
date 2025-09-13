import React from 'react'
import { useState, useEffect } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

const Header = () => {

  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false); // for mobile menu

  useEffect(()=>{

    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact']

      let currentSection = 'home'

      for (let id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          console.log(rect)
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id
            break;
          }
        }
      }

      setActiveSection(currentSection)
    };

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <div className="navbar">
       {/* Logo / Brand */}
      <div className="logo">Aabiyah Ahmed</div>

      {/* Hamburger icon (mobile only) */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

        
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li className={activeSection === 'home' ? 'active' : ''}
        onClick={() => setIsOpen(false)}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection=== 'about' ? 'active' : ''}
        onClick={() => setIsOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === 'portfolio' ? 'active' : ''}
        onClick={() => setIsOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={activeSection=== 'contact' ? 'active' : ''}
        onClick={() => setIsOpen(false)}>
         <a href="#contact">Contact</a>
        </li>
      </ul>


    </div>
    
    </>
  )
}

export default Header
