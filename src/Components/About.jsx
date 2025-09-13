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
  "things...",
  "petting cars",
  "procastination babyyyy",
  "Team player",
]

const About = () => {
  return (
    <>
      <h1 className="heading" style={{textAlign:"center", width: "100%", margin:"0px"}}>About me</h1>
      <hr />
      <div className="container-about">
      <p className="desc" style={{paddingLeft: "20px", width: "70%"}}>{description1}
        <br /> {description2}
      </p>

      <hr />
      <ul className="skills">
        {skillList.map((skill)=>(
          <li key={skill} className="li-skill">{skill}</li>
        ))}
      </ul>
    </div>
    <br /><br /> <br /><br /> 
    
  </>
  )
}
export default About