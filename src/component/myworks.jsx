import React, { useRef, useState, useEffect } from 'react'
import workmanagementsystem from "../../public/arogya-desktop.png"
import cryptoworld from "../data/cryptoworld.png"
import workmanagementsystemmobile from "../../public/arogya-mobile.png"
import cryptoworldmobile from "../data/cryptoworldmobile.png"

// Using existing images as placeholders for new projects
import kindpot from "../../public/kindpot-desktop.png"
import kindpotmobile from "../../public/kindpot-mobile.png"
import liveclass from "../../public/study-sync-desktop.png"
import liveclassmobile from "../../public/study-sync-mobile.png"

import { RiGeminiFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaCss3Alt, FaJs, FaHtml5, FaBootstrap, FaGithub, FaNode, FaExternalLinkAlt } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiRedis, SiExpress, SiMongodb, SiSocketdotio, SiFramer, SiJsonwebtokens } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

const projectsData = [
  {
    id: 1,
    title: "KindPot Platform",
    categories: ["Full Stack", "Backend"],
    image: kindpot,
    mobileImage: kindpotmobile,
    link: "https://kind-pot.vercel.app",
    repo: "https://github.com/Rubul-Tanti/KindPot",
    used: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaNode },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis },
    ],
    desc: "A premium subscription-based platform combining golf performance tracking, charitable giving, and an automated monthly prize draw engine.",
    features: [
      "Engineered a robust subscription and payment system with Stripe integration.",
      "Developed a 5-score rolling Stableford management system with custom algorithmic draw logic.",
      "Integrated seamless charity contribution tracking with dedicated user and admin dashboards."
    ]
  },
  {
    id: 2,
    title: "Study Sync",
    categories: ["Full Stack", "Backend"],
    image: liveclass,
    mobileImage: liveclassmobile,
    link: "https://study-sync-sooty-seven.vercel.app",
    repo: "https://github.com/Rubul-Tanti/StudySync",
    used: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "WebRTC", icon: FaJs },
    ],
    desc: "StudySync is an interactive online learning platform that connects students and teachers for seamless learning experiences. It features live classrooms, real-time chat, and personalized lessons, making learning engaging, flexible, and accessible anytime, anywhere.",
    features: [
      "E-learning platform using LiveKit (WebRTC) for video classrooms and screen sharing.",
      "Real-time chat functionality using Socket.io.",
      "Secure tutor hiring flow with session booking and role-based access control.",
      "Secure payment handling and authentication via JWT."
    ]
  },
  {
    id: 3,
    title: "Arogya",
    categories: ["Full Stack", "Frontend", "Backend"],
    image: workmanagementsystem,
    mobileImage: workmanagementsystemmobile,
    link: "https://arogya-frontend-eta.vercel.app",
    repo: "https://github.com/Rubul-Tanti/Arogya-frontend-",
    used: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Redux", icon: SiRedux },
      { name: "WebSockets", icon: SiSocketdotio },
      { name: "Framer Motion", icon: SiFramer },
      { name: "JWT", icon: SiJsonwebtokens }
    ],
    desc: "A modern web-based healthcare platform designed to simplify and enhance access to health services.",
    features: [
      "Engineered a full-stack platform with real-time blood donation matching and WebSocket-based emergency SOS alert system.",
      "Implemented JWT + RBAC authentication, Redis caching, and MongoDB indexing, improving API response times significantly."
    ]
  },
  {
    id: 5,
    title: "crypto world",
    categories: ["Frontend"],
    image: cryptoworld,
    mobileImage: cryptoworldmobile,
    link: "https://rubul-tanti.github.io/crypto-world/",
    repo: "https://github.com/Rubul-Tanti/crypto-world",
    used: [
      { name: "html", icon: FaHtml5 },
      { name: "css", icon: FaCss3Alt },
      { name: "javascript", icon: FaJs },
      { name: "react", icon: FaReact },
      { name: "tailwind", icon: RiTailwindCssFill },
      { name: "redux", icon: SiRedux },
    ],
    desc: "I created a cryptocurrency info website.",
    features: [
      "View detailed information about the latest cryptocurrencies.",
      "Stay updated with real-time news and updates from the crypto world.",
      "Explore market trends and individual coin data through a clean, user-friendly interface."
    ]
  }
];

const filters = ["All", "Frontend", "Backend", "Full Stack"];

const MYWorks = () => {
  const worksRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeFilter));

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projects = gsap.utils.toArray('.project-section');

    // Refresh ScrollTrigger when layout changes (filter updates)
    ScrollTrigger.refresh();

    projects.forEach((project) => {
      const title = project.querySelector('.project-title');
      const number = project.querySelector('.project-number');
      const image = project.querySelector('.project-image');
      const mobile = project.querySelector('.project-mobile');

      gsap.fromTo(title,
        { x: -100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: project, start: 'top 70%' },
          ease: 'power2.out'
        }
      );

      gsap.fromTo(number,
        { x: 100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: project, start: 'top 70%' },
          ease: 'power2.out'
        }
      );

      if (image) {
        gsap.fromTo(image,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, delay: 0.3,
            scrollTrigger: { trigger: project, start: 'top 70%' },
            ease: 'power2.out'
          }
        );
      }

      if (mobile) {
        gsap.fromTo(mobile,
          { y: 100, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, delay: 0.5,
            scrollTrigger: { trigger: project, start: 'top 70%' },
            ease: 'power2.out'
          }
        );
      }
    });

    const projectLinks = document.querySelectorAll('.project-link')
    projectLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.05, duration: 0.3, ease: 'power1.out' })
      })
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: 'power1.out' })
      })
    })

  }, [activeFilter]) // Re-run animation logic when filter changes

  return (
    <section ref={worksRef} id="works" className='flex flex-col gap-2 min-h-screen pt-10'>
      <AnimatedTitle
        title="my works"
        titleId="works-title"
        className='text-center mb-6'
      />

      {/* Filter Options */}
      <div className="flex flex-wrap justify-center gap-4 px-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-3 rounded-full text-xs tracking-[0.2em] font-black uppercase transition-all duration-500 ${activeFilter === filter
              ? 'bg-black text-[#DAA520] shadow-[0_10px_30px_rgba(218,165,32,0.3)] scale-105'
              : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-black hover:scale-105'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredProjects.map((project, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div key={project.id} className={`project-section flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-screen p-4 lg:p-8 gap-8`}>
            <div className='w-full lg:w-1/2 text-black'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl uppercase pt-5 w-full'>
                <div className='flex justify-between w-full'>
                  <div className="project-title font-fontas font-bold">{project.title}</div>
                  <div className="project-number text-[#DAA520]">0{index + 1}</div>
                </div>
              </h1>
              <div className='flex flex-col md:flex-row mt-5 gap-5'>
                <div className='w-full md:w-3/4 flex flex-col gap-4'>
                  <img src={project.image} className='project-image w-full rounded-lg shadow-sm shadow-gray-500 border' alt={project.title} />
                  <div className='flex flex-col sm:flex-row gap-4 mt-2'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link group flex-1 flex items-center justify-center gap-3 bg-black text-[#DAA520] py-4 px-6 transition-all duration-500 rounded-xl text-xs md:text-sm font-black uppercase tracking-[0.2em] border border-black hover:bg-transparent hover:text-black hover:border-[#DAA520] hover:shadow-[0_10px_20px_rgba(218,165,32,0.2)]'>
                      <span>Visit Live</span>
                      <FaExternalLinkAlt className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
                    </a>
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className='project-link group flex-1 flex items-center justify-center gap-3 bg-transparent text-black py-4 px-6 transition-all duration-500 rounded-xl text-xs md:text-sm font-black uppercase tracking-[0.2em] border-2 border-zinc-200 hover:border-black hover:bg-black hover:text-white'>
                        <span>Source Code</span>
                        <FaGithub size={18} className='group-hover:rotate-12 transition-transform duration-300' />
                      </a>
                    )}
                  </div>
                </div>
                <div className='hidden md:block w-1/4'>
                  <img src={project.mobileImage} className='project-mobile w-full rounded-lg shadow-lg shadow-gray-500 border' alt="Mobile View" />
                </div>
              </div>
            </div>

            <div className={`w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 border-t lg:border-t-0 ${isReversed ? 'lg:border-l' : 'lg:border-r'} pt-8 lg:pt-0`}>
              <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
                what i used
                <ul className="text-sm pt-2 text-gray-500 flex flex-wrap gap-3 border-l pl-2">
                  {project.used.map((tech, i) => (
                    <li key={i} className='flex items-center gap-2 uppercase font-medium'>
                      <tech.icon size={20} /><span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='text-xl md:text-2xl font-semibold uppercase mb-4'>
                WHAT I MADE
                <div className='pl-2 text-sm md:text-base text-gray-500 space-y-2 mt-2'>
                  <p>{project.desc}</p>
                  <h3 className='uppercase font-medium text-black'>Key features include:</h3>
                  <ul className='list-disc pl-4 text-sm'>
                    {project.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  )
}

export default MYWorks
