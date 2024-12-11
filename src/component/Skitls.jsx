import React from 'react'
import { FaReact } from "react-icons/fa";import { FaCss3Alt } from "react-icons/fa6";import { FaJs } from "react-icons/fa";import { RiTailwindCssFill } from "react-icons/ri";import { FaHtml5 } from "react-icons/fa";import { FaBootstrap } from "react-icons/fa";import { SiRedux } from "react-icons/si";import { IoIosGitBranch } from "react-icons/io";import { FaGithub } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
const Skitls = () => {
  gsap.registerPlugin(ScrollTrigger)
useGSAP(()=>{
  gsap.to("#skils",{
    y:0,opacity:1,duration:1
    ,stagger:.5
    ,scrollTrigger:{
      trigger:"#bex",
      start:"top 80%"
    }
  }
)
},[])

  return (
    <div className='h-[100vw] lg:h-[50vh] uppercase relative lg:mt-1 md:mt-5 mt-14 '>
<h1 className='md:pl-10 pl-5 lg:pl-20 text-gray-400'> things i can help with. </h1>
  <h1 className='md:pl-10 pl-5 lg:pl-20 font-fontas text-2xl '>
    web/ui&ux/frontend development.
    </h1>
    <div className='mt-10'>
      <h1 className='text-gray-400 md:pl-10 pl-5 lg:pl-20' >i have expertise in.</h1>
<div className='flex flex-row gap-3 md:pl-10 pl-5 lg:pl-20 pt-1 overflow-hidden '><FaReact id='skils' className='opacity-0 translate-y-[100%]' size={40}/><FaCss3Alt id='skils' className='opacity-0 translate-y-[100%]' size={40}/><FaJs id='skils' className='opacity-0 translate-y-[100%]' size={40}/><RiTailwindCssFill id='skils' className='opacity-1 translate-y-[100%]' size={40}/> <FaHtml5 id='skils' className='opacity-0 translate-y-[100%]' size={40}/><FaBootstrap id='skils' className='opacity-0 translate-y-[100%]' size={40}/><FaGithub id='skils' className='opacity-0 translate-y-[100%]' size={40}/><IoIosGitBranch id='skils' className='opacity-0 translate-y-[100%]' size={40}/><SiRedux size={40} id='skils' className='opacity-0 translate-y-[100%]'/></div>
      <div className='w-[80vw] absolute bottom-[10%] h-[1px] bg-gray-300 ml-[10vw]'></div>    
      </div>
    </div>
  )
}

export default Skitls
