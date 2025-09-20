import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Portfolio from './Components/Portfolio.jsx'
import SocialBar from "./Components/SocialBar";
import {React, useState , useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      once: false,       // whether animation happens only once on scroll
      offset: 100,      // trigger offset (px)
    });
  }, []);

  return(
    <>
      
      <main>
        
          <div id= "home">
            <div id="navigation">
              <Header/>
            </div>
            <Home/>
          </div>
          <div id= "about"><About/></div>
          <div id= "portfolio"><Portfolio/></div>
          <div id= "contact"><Contact/></div>
      </main>
      
      

    </>
  )
}

export default App
