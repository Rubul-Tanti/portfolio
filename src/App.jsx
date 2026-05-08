import React from 'react'
import "./App.css"
import Hero from './component/Hero'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Intro from './component/Intro'
import "./App.css"
import Details from './component/Details'
import Skitls from './component/Skitls'
import MYWorks from './component/myworks'
import Footer from './component/Footer'
import Experience from './component/Experience'
import Nav from './component/Nav'

const App = () => {
  return (
    <div id='app' className='overflow-hidden max-w-[1440px] mx-auto'>
      <Nav />
    <div className="section-animate">
      <Details />
    </div>
    <div className="section-animate">
      <Skitls />
    </div>
    <div className="section-animate">
      <Experience />
    </div>
    <div className="section-animate">
      <MYWorks />
    </div>
    <div className="section-animate">
      <Footer />
    </div>
  </div>

  )
}

export default App
