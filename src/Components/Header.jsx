import React from 'react'
import { useState, useEffect } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

const Header = () => {

  const [activeSection, setActiveSection] = useState('home');

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
        
      <ul className="nav-list">
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection=== 'about' ? 'active' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === 'portfolio' ? 'active' : ''}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={activeSection=== 'contact' ? 'active' : ''}>
         <a href="#contact">Contact</a>
        </li>
      </ul>

    </div>
    
    </>
  )
}

export default Header
