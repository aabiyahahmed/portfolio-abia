import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Portfolio from './Components/Portfolio.jsx'
import React from 'react';

function App() {

  return(
    <>
      <Header />
      <main>
          <div id= "home"><Home/></div><br /><br /><br /><br /><br />
          <div id= "about"><About/></div>
          <div id= "portfolio"><Portfolio/></div>
          <div id= "contact"><Contact/></div>
      </main>
      

    </>
  )
}

export default App
