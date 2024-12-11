import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Texteffect from './Texteffect'
const Intro = () => {

  useGSAP(()=>{ 
    var tl=gsap.timeline()
    tl.to('#name',{
      opacity:1, duration:0.5,
      x:0,
      ease:'power.inOut'
    })
    gsap.to('#title',{duration:1, delay:1,height:0, opacity:1})
  
    tl.to('#title',{y:-100,duration:.5,delay:.5})
    gsap.to('#banner',{
      top:0,duration:1.25 ,delay:1,ease:"power3"})
      gsap.to('#banner',{
        height:0,duration:1.5,delay:1.25,ease:"power3"
      })
      gsap.to('#name',{
        opacity:0,fontSize:0,height:0,
      duration:0,delay:1.3 
      })   
  gsap.to('#main',{
    height:0,delay:1.3,duration:1,ease:"power3"
  })
  },[])
  

  return (
    <div id='main' className='relative h-screen bg-black w-full justify-center flex-col gap-5  flex items-center overflow-hidden '>
     <div className={`text-white bg-black absolute top-5 font-name md:text-xl text-sm lg:text-2xl  font-semibold  overflow-hidden`} >
  <h1 id='title' >

    <span id='name' className={`opacity-0`}>Namastay</span></h1>
  
  </div>
    <div className='overflow-hidden w-full flex justify-center items-center italic ' >
      <h1 id='title' className='flex  gap-5   '>
    
        <span id='name' className=' md:text-4xl text-2xl lg:text-6xl  text-white font-semibold font-fontas  translate-x-20 opacity-0 '>Rubul Tanti</span>
      <span id='name' className=' opacity-0 text-6xl translate-x-16 font-name text-green-500'>is</span><span id='name' className='text-4xl opacity-0 translate-x-20 text-white'>a</span>
      </h1>
      
      </div>
    <div id='banner' className='absolute top-[100%] w-full h-screen bg-green-600'></div>
        
        </div>
  )
}

export default Intro
