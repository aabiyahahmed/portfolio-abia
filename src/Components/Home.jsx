import React from 'react'
import profilepic from '../assets/profile-pic.jpg'
const name = "Aabiyah Uroob Ahmed"
const title ="Front End Developer"
const Home = () => {
  return (
    <div className="home-container">
        <img className="profile" src={profilepic} alt="profile picture" />
        <div className="text">
            <h1 className="name">{name}</h1>
            <h2 className="title">{title}</h2>
        </div>
    </div>
  )
}
 
export default Home