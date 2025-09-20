import React from 'react'

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "Simple weather web app using OpenWeather API.",
    link: "https://github.com/aabiyahahmed/weatherApp24",
  },
  {
    id: 2,
    title: "Courier Management",
    description: "A CRUD application made in Java/Swing to manage courier records.",
    link: "https://github.com/aabiyahahmed/Courier-management-java-crud",
  },
  {
    id: 3,
    title: "Weather app for Mobile",
    description: "A weather forecast app for mobile users using React Native.",
    link: "https://github.com/aabiyahahmed/weather-app-react-native",
  },
  {
    id: 4,
    title: "Kitty Notes",
    description: "A shopping list application made in JS and Firebase",
    link: "https://github.com/aabiyahahmed/kitty-notes",
  },
];


const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section">
      <h1 className="heading">Projects</h1>
      <div className="projects-container">

          {projects.map((project) => (

          <div key={project.id} className="project-card"  data-aos= "fade-up">

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>

          </div>
          ))}
      </div>
  </section>
   <br /><br /><br />
    </>
    
  )
}

export default Portfolio