import React from 'react'
import Hero from '../componants/Hero'
import Portfolio from '../componants/Portfolio'
import Services from '../componants/Services'
import About from '../componants/About'
import Contact from '../componants/Contact'


const Home = () => {
  return (
    <div>
     <Hero />
     <Portfolio />
     <Services />
     <About />
     <Contact />
    </div>
  )
}

export default Home