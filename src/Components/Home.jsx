import {React, useState, useEffect} from 'react'
import profilepic from '../assets/profile-pic.jpg'
import { FaAngleUp } from "react-icons/fa";
const name = "Aabiyah Ahmed"
const title ="Full-Stack Web Developer"

const Home = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="home-container">
          
          <div className="text">
              <h1 className="name typewriter"  data-aos= "fade-down">Hi, I'm {name}</h1>
              <h2 className="title"  data-aos= "fade-down">{title}</h2>
              <p id="intro" data-aos="fade-down">I'm an aspiring full-stack web developer with hands on experience building responsive, user friendly interfaces using 
                React, JavaScript, HTML, and CSS. Experienced in end-to-end project development using Java, MySQL, and 
                Firebase.
              </p>
               <a
                  href="/portfolio-abia/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn resumeBtn"
                >
                 Resume
              </a>

              <a
                  href="#contact"
                  className="btn contactBtn"
                >
                 Contact me
              </a>
          </div>
          <img className="profile" src={profilepic} alt="profile picture"  data-aos= "fade-left" />
      </div>
        <a href="#home" className="scrollCircle">
             <FaAngleUp className="scrollBtn" style={{
              opacity: visible ? "1" : "0",
              visibility: visible ? "visible" : "hidden",
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}/>
        </a>
       
      <br /><br /><br /><br /><br /><br />
    </>
    
  )
}
 
export default Home