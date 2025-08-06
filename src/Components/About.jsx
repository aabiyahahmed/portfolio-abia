import React from 'react'

const description1 = "I am a student FrontEnd Developer studying at Savitribai Phule Pune University."
const description2 = "I am passionate about developing web applications and learning and refining my skills in web development."
const skillList = [
  "Html",
  "JavaScript",
  "CSS",
  "React",
  "Web Designing",
  "Problem Solving",
  "doing ur mom",
  "petting cars",
  "procastination babyyyy",
  "Team player",
]

const About = () => {
  return (
    <div className="container-about">
      <h1 className="heading">About me</h1>
      <hr />
      <p className="desc">{description1}
        <br /> {description2}
      </p>

      <hr />
      <ul className="skills">
        {skillList.map((skill)=>(
          <li key={skill} className="li-skill">{skill}</li>
        ))}
      </ul>
    </div>
  )
}
export default About