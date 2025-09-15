import React from "react";

const About = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "MobiOT Technologies",
      period: "Feb 2023 – July 2023",
      details: "Built responsive React components and improved UI/UX.",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      school: "Savitribai Phule Pune University",
      year: "2023 – 2025",
      cgpa:"7.67"
    },
    {
      degree: "B.Sc. in Computer Science",
      school: "Savitribai Phule Pune University",
      year: "2022-2023",
      cgpa:"9.54"
    },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Java", "MySql", "Firebase",
    "Reponsive Web Design", "Git/GitHub"
  ];

  return (
    <>
    <section id="about" className="about-section">
      <h1 className="heading">About Me</h1>
      <p className="intro">
        I’m a student Frontend Developer passionate about building interactive web applications, 
        constantly learning new tools and refining my craft.
      </p>

      {/* Experience + Education side by side */}
      <div className="about-grid">
        <div className="about-card">
          <h2>Experience</h2>
          <ul className="timeline">
            {experiences.map((exp, index) => (
              <li key={index} className="timeline-item">
                <h3>{exp.role} <span>@ {exp.company}</span></h3>
                <span className="period">{exp.period}</span>
                <p>{exp.details}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h2>Education</h2>
          <ul className="timeline">
            {education.map((edu, index) => (
              <li key={index} className="timeline-item">
                <h3>{edu.degree}</h3>
                <span>{edu.school} • {edu.year} </span>
                <p className="cgpa">CGPA: {edu.cgpa}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="about-block">
        <h2 className="skills">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
    <br /><br /><br /><br /><br /><br />
    </>
  );
};

export default About;
