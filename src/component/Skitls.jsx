import React, { useRef } from 'react'
import { FaReact } from "react-icons/fa";import { FaCss3Alt } from "react-icons/fa6";import { FaJs } from "react-icons/fa";import { RiTailwindCssFill } from "react-icons/ri";import { FaHtml5 } from "react-icons/fa";import { FaBootstrap } from "react-icons/fa";import { SiRedux } from "react-icons/si";import { IoIosGitBranch } from "react-icons/io";import { FaGithub } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import AnimatedTitle from './AnimatedTitle';

const Skitls = () => {
  const skillsRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate skills icons
    gsap.to("#skils", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%"
      },
      ease: 'back.out(1.2)'
    })

    // Animate the divider line
    gsap.fromTo("#skills-divider",
      { width: 0 },
      {
        width: '80vw',
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%"
        }
      }
    )

    // Add hover animations to skill icons
    const skillIcons = document.querySelectorAll('#skills-container > *')
    skillIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          y: -10,
          scale: 1.2,
          color: '#DAA520',
          duration: 0.3,
          ease: 'power1.out'
        })
      })
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          color: 'currentColor',
          duration: 0.3,
          ease: 'power1.out'
        })
      })
    })
  }, [])

  return (
    <div ref={skillsRef} id="skills" className='h-[100vw] lg:h-[50vh] uppercase relative lg:mt-1 md:mt-5 mt-14'>
      <div className='md:pl-10 pl-5 lg:pl-20'>
        <AnimatedTitle
          title="Skills & Expertise"
          subtitle="things i can help with"
          titleId="skills-title"
          subtitleId="skills-subtitle"
          className='mb-8'
        />
      </div>

      <div className='mt-10'>
        <h1 id="skills-tech" className='text-gray-400 md:pl-10 pl-5 lg:pl-20 opacity-0'>i have expertise in.</h1>
        <div id="skills-container" className='flex flex-row flex-wrap gap-5 md:pl-10 pl-5 lg:pl-20 pt-3 overflow-hidden'>
          <FaReact id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <FaCss3Alt id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <FaJs id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <RiTailwindCssFill id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <FaHtml5 id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <FaBootstrap id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <FaGithub id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <IoIosGitBranch id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <SiRedux id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <SiExpress id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <FaNode id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
          <SiMongodb id='skils' className='opacity-0 translate-y-[100%] cursor-pointer transition-colors duration-300' size={40}/>
        </div>
        <div id="skills-divider" className='w-0 absolute bottom-[10%] h-[2px] bg-[#DAA520] ml-[10vw]'></div>
      </div>
    </div>
  )
}

export default Skitls
