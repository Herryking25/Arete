import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import LogoSlide from '../components/LogoSlide'
import Work from '../components/Work'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'
import Feedback from '../components/Feedback'
import About from '../pages/About'
import List from '../pages/List'

const Home = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <LogoSlide />
    <Work />
    <WhyChooseUs />
    <Feedback />
    <Footer />
    <About />
    <List />
    </>
  )
}

export default Home
