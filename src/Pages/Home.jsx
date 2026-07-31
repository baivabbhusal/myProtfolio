import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Header from '../components/header'
const Home = () => {
  return (
        <>
        <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />  
    <Contact />
    
    </>
  )
}

export default Home
