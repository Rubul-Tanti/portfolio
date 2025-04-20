import React, { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import { FaReact } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa6"
import { FaJs } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaHtml5 } from "react-icons/fa"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate footer elements when they come into view
    gsap.fromTo('#footer-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#footer-subtitle',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#footer-icons > *',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#footer-connect',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#footer-social > *',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        ease: 'back.out(1.7)'
      }
    )

    gsap.fromTo('#footer-copyright',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.6,
        scrollTrigger: {
          trigger: '#footer-divider',
          start: 'top 90%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#footer-links > *',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.8,
        scrollTrigger: {
          trigger: '#footer-divider',
          start: 'top 90%',
        },
        ease: 'power2.out'
      }
    )
  }, [])

  return (
    <footer ref={footerRef} id="contact" className="w-full bg-black text-white py-10 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-8 md:mb-0">
            <h2 id="footer-title" className="text-xl md:text-2xl font-fontas uppercase mb-3">Rubul Tanti</h2>
            <p id="footer-subtitle" className="text-gray-400 text-sm uppercase">Frontend Developer</p>
            <div id="footer-icons" className="mt-4 flex space-x-3">
              <FaHtml5 size={20} className="text-gray-400 hover:text-[#E34F26] transition-colors duration-300 cursor-pointer" />
              <FaCss3Alt size={20} className="text-gray-400 hover:text-[#1572B6] transition-colors duration-300 cursor-pointer" />
              <FaJs size={20} className="text-gray-400 hover:text-[#F7DF1E] transition-colors duration-300 cursor-pointer" />
              <FaReact size={20} className="text-gray-400 hover:text-[#61DAFB] transition-colors duration-300 cursor-pointer" />
              <RiTailwindCssFill size={20} className="text-gray-400 hover:text-[#06B6D4] transition-colors duration-300 cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 id="footer-connect" className="text-lg uppercase mb-4 font-medium">Connect with me</h3>
            <div id="footer-social" className="flex space-x-5">
              <a href="https://github.com/Rubul-Tanti" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#DAA520] transition-all duration-300 hover:scale-110">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rubul-tanti-213a6b2b5" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#DAA520] transition-all duration-300 hover:scale-110">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div id="footer-divider" className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p id="footer-copyright" className="text-gray-400 text-sm mb-6 md:mb-0 uppercase">
              &copy; {currentYear} Rubul Tanti. All rights reserved.
            </p>
            <div id="footer-links" className="flex space-x-8">
              <a href="#home" className="text-gray-400 hover:text-[#DAA520] text-sm uppercase transition-all duration-300 hover:-translate-y-1">
                Home
              </a>
              <a href="#works" className="text-gray-400 hover:text-[#DAA520] text-sm uppercase transition-all duration-300 hover:-translate-y-1">
                My Works
              </a>
              <a href="#skills" className="text-gray-400 hover:text-[#DAA520] text-sm uppercase transition-all duration-300 hover:-translate-y-1">
                Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
