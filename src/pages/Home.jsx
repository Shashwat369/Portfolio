import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import ProjectCards from '../components/ProjectCards'
import Skills from '../components/Skills'
import Journey from '../components/Journey'
import Contact from '../components/Contact'
import Footer from '../components/Footer'




const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Experience/>
      <ProjectCards/>
      <Skills/>
      <Journey/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Home