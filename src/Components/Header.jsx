import React from 'react'
import { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

const userProps = {
    name: "Aabiyah Ahmed",
    title: "Front End Developer",
    email:"aabiyah.uroob@gmail.com",
    gitHub:"https://github.com/aabiyahahmed/",
    linkedIn: "https://www.linkedin.com/in/aabiyah-ahmed/",
    instagram: "https://www.instagram.com/ur0.0b/",
  }

const Header = () => {

    const [activePage, setActivePage] = useState("home");

  return (
    <div className="navbar">
        
            <ul className = "header-ul">
                <li className = "header-li"><a href="#" 
                    onClick={(e) => { e.preventDefault(); setActivePage("home"); }}>Home</a></li>
                <li className = "header-li"><a href="#"
                    onClick={(e) => { e.preventDefault(); setActivePage("about"); }}>About</a></li>
                <li className = "header-li"><a href="#"
                    onClick={(e) => { e.preventDefault(); setActivePage("portfolio"); }}>Portfolio</a></li>
                <li className = "header-li"><a href="#"
                    onClick={(e) => { e.preventDefault(); setActivePage("contact"); }}>Contact</a></li>
            </ul>

        {activePage === "home" && <Home name = {userProps.name} title = {userProps.title}/>}
        {activePage === "about" && <About />}
        {activePage === "portfolio" && <Portfolio />}
        {activePage === "contact" && <Contact />}

    </div>
  )
}

export default Header
