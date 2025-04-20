import React, { useRef } from 'react'
import workmanagementsystem from"../data/workmanagementsystem.png"
import cryptoworld from"../data/cryptoworld.png"
import workmanagementsystemmobile from"../data/workmanagementsystemmobile.png"
import cryptoworldmobile from"../data/cryptoworldmobile.png"
import noteswithaimobile from"../data/noteswithaimobile.png"
import noteswithai from"../data/noteswithai.png"
import { RiGeminiFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";import { FaCss3Alt } from "react-icons/fa6";import { FaJs } from "react-icons/fa";import { RiTailwindCssFill } from "react-icons/ri";import { FaHtml5 } from "react-icons/fa";import { FaBootstrap } from "react-icons/fa";import { SiRedux } from "react-icons/si";import { IoIosGitBranch } from "react-icons/io";import { FaGithub } from "react-icons/fa";
import { GiGemini } from 'react-icons/gi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

const MYWorks = () => {
  const worksRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Project 1 animations
    gsap.fromTo('#project1-title',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: project1Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project1-number',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: project1Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project1-image',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: project1Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project1-mobile',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          trigger: project1Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    // Project 2 animations
    gsap.fromTo('#project2-title',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: project2Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project2-number',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: project2Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project2-image',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: project2Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project2-mobile',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          trigger: project2Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    // Project 3 animations
    gsap.fromTo('#project3-title',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: project3Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project3-number',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: project3Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project3-image',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: project3Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    gsap.fromTo('#project3-mobile',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          trigger: project3Ref.current,
          start: 'top 70%',
        },
        ease: 'power2.out'
      }
    )

    // Animate project links with hover effect
    const projectLinks = document.querySelectorAll('.project-link')
    projectLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.05, duration: 0.3, ease: 'power1.out' })
      })
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: 'power1.out' })
      })
    })

  }, [])

  return (
    <section ref={worksRef} id="works" className='flex flex-col gap-2 min-h-screen pt-10'>
      <AnimatedTitle
        title="my works"
        titleId="works-title"
        className='text-center mb-10'
      />

      {/* Work Management System */}
      <div ref={project1Ref} className='flex flex-col lg:flex-row min-h-screen p-4 lg:p-8 gap-8'>
        <div className='w-full lg:w-1/2 text-black'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl uppercase pt-5 w-full'>
            <div className='flex justify-between w-full'>
              <div id="project1-title">work management system</div>
              <div id="project1-number" className='text-[#DAA520]'>01</div>
            </div>
          </h1>
          <div className='flex flex-col md:flex-row mt-5 gap-5'>
            <div className='w-full md:w-3/4 flex flex-col gap-4'>
              <img id="project1-image" src={workmanagementsystem} className='w-full rounded-lg shadow-sm shadow-gray-500 border' alt="Work Management System"/>
              <div className='flex flex-col sm:flex-row gap-3'>
                <a href='https://rubul-tanti.github.io/Work-management-system/' className='project-link flex-1 bg-white text-[#DAA520] p-2 text-center hover:bg-black transition duration-300 rounded-lg text-base md:text-lg font-semibold border-2 border-[#DAA520]'>visit</a>
                <a href='https://github.com/Rubul-Tanti/Work-management-system' className='project-link flex-1 bg-black text-white p-2 text-center hover:text-[#DAA520] transition duration-300 rounded-lg text-base md:text-lg font-semibold border-2 border-[#DAA520]'>repository</a>
              </div>
            </div>
            <div className='hidden md:block w-1/4'>
              <img id="project1-mobile" src={workmanagementsystemmobile} className='w-full rounded-lg shadow-lg shadow-gray-500 border' alt="Mobile View"/>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 border-t lg:border-t-0 lg:border-r pt-8 lg:pt-0'>
          <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
            what i used
            <ul className="text-sm pt-2 text-gray-500 flex flex-wrap gap-3 border-l pl-2">
              <li className='flex items-center gap-2 uppercase font-medium'><FaHtml5 size={20}/><span>html</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaCss3Alt size={20}/><span>css</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaJs size={20}/><span>javascript</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaReact size={20}/><span>react</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><RiTailwindCssFill size={20}/><span>tailwind</span></li>
            </ul>
          </div>

          <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
            WHAT I MADE
            <div className='pl-2 text-sm md:text-base text-gray-500 space-y-2'>
              <p>I developed a corporate task management website using React, HTML, CSS, JavaScript, and TailwindCSS.</p>
              <h3 className='uppercase font-medium'>The platform features two separate dashboards:</h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='uppercase font-medium'>Admin Dashboard</h4>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>Assigns tasks to employees</li>
                    <li>Monitors task progress and statuses</li>
                  </ul>
                </div>
                <div>
                  <h4 className='uppercase font-medium'>Employee Dashboard</h4>
                  <ul className='list-disc pl-4 text-sm'>
                    <li>Views assigned tasks</li>
                    <li>Updates task status to Active, Completed, or Failed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes with AI */}
      <div ref={project2Ref} className='flex flex-col lg:flex-row-reverse min-h-screen p-4 lg:p-8 gap-8'>
        <div className='w-full lg:w-1/2 text-black'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl uppercase pt-5 w-full'>
            <div className='flex justify-between w-full'>
              <div id="project2-title">notes with ai</div>
              <div id="project2-number" className='text-[#DAA520]'>02</div>
            </div>
          </h1>
          <div className='flex flex-col md:flex-row mt-5 gap-5'>
            <div className='w-full md:w-3/4 flex flex-col gap-4'>
              <img id="project2-image" src={noteswithai} className='w-full rounded-lg shadow-sm shadow-gray-500 border' alt="Notes with AI"/>
              <div className='flex flex-col sm:flex-row gap-3'>
                <a href='https://rubul-tanti.github.io/Notes-with-ai/' className='project-link flex-1 bg-white text-[#DAA520] p-2 text-center hover:bg-black transition duration-300 rounded-lg text-base md:text-lg font-semibold border-2 border-[#DAA520]'>visit</a>
                <a href='https://github.com/Rubul-Tanti/Notes-with-ai' className='project-link flex-1 bg-black text-white p-2 text-center hover:text-[#DAA520] transition duration-300 rounded-lg text-base md:text-lg font-semibold border-2 border-[#DAA520]'>repository</a>
              </div>
            </div>
            <div className='hidden md:block w-1/4'>
              <img id="project2-mobile" src={noteswithaimobile} className='w-full rounded-lg shadow-lg shadow-gray-500 border' alt="Mobile View"/>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 border-t lg:border-t-0 lg:border-r pt-8 lg:pt-0'>
          <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
            what i used
            <ul className="text-sm pt-2 text-gray-500 flex flex-wrap gap-3 border-l pl-2">
              <li className='flex items-center gap-2 uppercase font-medium'><FaHtml5 size={20}/><span>html</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaCss3Alt size={20}/><span>css</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaJs size={20}/><span>javascript</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaReact size={20}/><span>react</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><RiGeminiFill size={20}/><span>gemini</span></li>
            </ul>
          </div>

          <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
            WHAT I MADE
            <div className='pl-2 text-sm md:text-base text-gray-500 space-y-2'>
              <p>i built a smart notes app using React, HTML, CSS, JavaScript, and TailwindCSS.</p>
              <h3 className='uppercase font-medium'>The app allows users to:</h3>
              <ul className='list-disc pl-4 text-sm'>
                <li>Generate notes using AI for fast and efficient content creation</li>
                <li>Extract text from images using OCR (Optical Character Recognition)</li>
                <li>Create and manage notes with a clean, responsive UI</li>
              </ul>
              <p>It’s designed to simplify note-taking by combining AI and image-based text recognition in one intuitive interface.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto World */}
      <div ref={project3Ref} className='flex flex-col lg:flex-row min-h-screen p-4 lg:p-8 gap-8'>
        <div className='w-full lg:w-1/2 text-black'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl uppercase pt-5 w-full'>
            <div className='flex justify-between w-full'>
              <div id="project3-title">crypto world</div>
              <div id="project3-number" className='text-[#DAA520]'>03</div>
            </div>
          </h1>
          <div className='flex flex-col md:flex-row mt-5 gap-5'>
            <div className='w-full md:w-3/4 flex flex-col gap-4'>
              <img id="project3-image" src={cryptoworld} className='w-full rounded-lg shadow-sm shadow-gray-500 border' alt="Crypto World"/>
              <div className='flex flex-col sm:flex-row gap-3'>
                <a href='https://rubul-tanti.github.io/crypto-world/' className='project-link flex-1 bg-white text-[#DAA520] p-2 text-center hover:bg-black transition duration-300 rounded-lg text-base md:text-lg font-semibold border-2 border-[#DAA520]'>visit</a>
                <a href='https://github.com/Rubul-Tanti/crypto-world' className='project-link flex-1 bg-black text-white p-2 text-center hover:text-[#DAA520] transition duration-300 rounded-lg text-base md:text-lg font-semibold border-2 border-[#DAA520]'>repository</a>
              </div>
            </div>
            <div className='hidden md:block w-1/4'>
              <img id="project3-mobile" src={cryptoworldmobile} className='w-full rounded-lg shadow-lg shadow-gray-500 border' alt="Mobile View"/>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 border-t lg:border-t-0 lg:border-r pt-8 lg:pt-0'>
          <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
            what i used
            <ul className="text-sm pt-2 text-gray-500 flex flex-wrap gap-3 border-l pl-2">
              <li className='flex items-center gap-2 uppercase font-medium'><FaHtml5 size={20}/><span>html</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaCss3Alt size={20}/><span>css</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaJs size={20}/><span>javascript</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><FaReact size={20}/><span>react</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><RiTailwindCssFill size={20}/><span>tailwind</span></li>
              <li className='flex items-center gap-2 uppercase font-medium'><SiRedux size={20}/><span>redux</span></li>
            </ul>
          </div>

          <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
            WHAT I MADE
            <div className='pl-2 text-sm md:text-base text-gray-500 space-y-2'>
              <p>I created a cryptocurrency info website using React, HTML, CSS, JavaScript, and TailwindCSS.</p>
              <h3 className='uppercase font-medium'>The app allows users to:</h3>
              <ul className='list-disc pl-4 text-sm'>
                <li>View detailed information about the latest cryptocurrencies</li>
                <li>Stay updated with real-time news and updates from the crypto world</li>
                <li>Explore market trends and individual coin data through a clean, user-friendly interface</li>
              </ul>
              <p>It’s built to help users stay informed and make better decisions in the fast-paced crypto space.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MYWorks
