import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Images from '../components/Images'
const Home = () => {
  return (
        <>
    <Header />
    <Hero />
    <Images />
    <About />
    <Skills />
    <Projects />  
    <Contact />
    
    </>
  )
}

export default Home
