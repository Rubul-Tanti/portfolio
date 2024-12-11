import React from 'react'
import "./App.css"
import Hero from './component/Hero'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Intro from './component/Intro'
import "./App.css"
import Details from './component/Details'
import Skitls from './component/Skitls'
const App = () => {


  return (<div id='app' className='overflow-hidden'>
  <Intro/>
    <Hero/>
    <Details/>
  <Skitls/>
  </div>
  
  )
}

export default App
