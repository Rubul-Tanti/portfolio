import React from 'react'
import gsap from 'gsap'
import Me from"../data/me.jpg"
import insta from"../data/Insta.jpg"
import linkdin from"../data/ld.png"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
const Details = () => {
gsap.registerPlugin(ScrollTrigger)
useGSAP(()=>{
  gsap.to('#box',{rotate:"0deg",
    ease:"power1",
    scrollTrigger:{
      trigger:"#bex",
      start:"-150% 90%",
      end:"bottom top",
      scrub:true,
    
    
    },
  })
},[])
  return (
    <div id='bex' className=" w-full md:text-3xl text-sm lg:text-4xl flex justify-between flex-row relative  ">
      <div className='w-full flex justify-center'><h1 className='uppercase p-[20%]'>Hi I am Rubul Tanti, I create visually  <span className='font-name italic text-[#DAA520]'>stunning</span> yet intaractive and responsive website.  </h1></div><div className='w-full flex justify-center relative '>
      <div id='box'  className='w-[60%] absolute left-0 -top-[10%] flex justify-center h-[250px] lg:h-[600px]  -rotate-[40deg] rounded-3xl bg-black overflow-hidde  '><img className='rounded-3xl opacity-80' width={"100%"} height={"100%"} src={insta}></img> </div>
      <div id='box'  className='overflow-hidden w-[60%] absolute left-[20%] top-0 justify-center  flex h-[250px] lg:h-[600px] -rotate-[30deg] bg-black rounded-3xl   '><img className='rounded-3xl opacity-80' width={"100%"} height={"100%"} src={linkdin}></img> </div>
      <div id='box'  className='w-[60%] absolute overflow-hidden left-[40%] top-[10%] h-[250px] lg:h-[600px] flex justify-center bg-black -rotate-[25deg] rounded-3xl  '><img className='opacity-90' width={"100%"} height={"100%"} src={Me}></img> </div>
      </div>
    </div>
  )
}

export default Details
