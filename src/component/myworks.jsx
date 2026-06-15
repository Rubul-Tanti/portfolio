import React, { useRef, useState, useEffect } from 'react'
import workmanagementsystem from "../../public/arogya-desktop.png"
import cryptoworld from "../data/cryptoworld.png"
import workmanagementsystemmobile from "../../public/arogya-mobile.png"
import cryptoworldmobile from "../data/cryptoworldmobile.png"


import { RiGeminiFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaCss3Alt, FaJs, FaHtml5, FaBootstrap, FaGithub, FaNode, FaExternalLinkAlt } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiRedis, SiExpress, SiMongodb, SiSocketdotio, SiFramer, SiJsonwebtokens, SiVite, SiZod, SiStripe } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'
import { BiChevronDown } from 'react-icons/bi'
import { CgChevronUp } from 'react-icons/cg'

const projectsData = [
  {
    id: 1,
    title: "KindPot Platform",
    categories: ["Full Stack", "Backend"],
    image: "/kindpot-desktop.png",
    mobileImage: "/kindpot-mobile.png",
    link: "https://kind-pot.vercel.app",
    repo: "https://github.com/Rubul-Tanti/KindPot",
    used: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaNode },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis },
      { name: "Stripe", icon: SiStripe },
      { name: "Zod", icon: SiZod },
    ],
    desc: "Premium subscription platform for golf performance tracking via Stableford scoring, automated monthly prize draws, and charitable contributions with Stripe payments, Redis caching, and enterprise-grade security.",
    features: [
      "Secure Stripe subscription management with JWT authentication and role-based access control.",
      "Advanced 5-score rolling Stableford handicap system with custom algorithmic calculation and trending.",
      "Automated monthly prize draw engine with intelligent winner selection and email notifications.",
      "Real-time charity contribution tracking with aggregated impact metrics and admin dashboards.",
      "Express rate limiting with Redis caching, session management, and comprehensive Zod validation.",
      "PostgreSQL with Prisma ORM for robust data relationships and Winston logging for monitoring."
    ]
  },
  {
    id: 4,
    title: "Tanti",
    categories: ["Full Stack", "Backend"],
    image: "/Tanti.png",
    mobileImage: "/mobileTanti.png",
    link: "https://ecom-tanti-73xj.vercel.app/",
    repo: "https://github.com/Rubul-Tanti/Ecom_Tanti",
    used: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaNode },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TanStack Query", icon: FaReact },
      { name: "Razorpay", icon: FaJs },
      { name: "Zod", icon: SiZod },
    ],
    desc: "Full-stack e-commerce platform with secure Razorpay payments, real-time inventory management, dynamic promo codes, comprehensive order tracking, and an intuitive admin dashboard.",
    features: [
      "Secure JWT authentication with role-based access control and Zod validation.",
      "Complete product and inventory management with real-time stock tracking.",
      "Advanced shopping cart with dynamic promo codes and discount calculations.",
      "Integrated Razorpay payment gateway for secure transactions.",
      "Comprehensive order management with status tracking and fulfillment workflow.",
      "Responsive UI with Next.js, Tailwind CSS, Framer Motion animations, and TanStack Query caching."
    ]
  },
  {
    id: 2,
    title: "Study Sync",
    categories: ["Full Stack", "Backend"],
    image: "/study-sync-desktop.png",
    mobileImage: "/study-sync-mobile.png",
    link: "https://study-sync-sooty-seven.vercel.app",
    repo: "https://github.com/Rubul-Tanti/StudySync",
    used: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "WebRTC", icon: FaJs },
    ],
    desc: "Interactive e-learning platform featuring live video classrooms via WebRTC, real-time chat collaboration, secure tutor booking, and seamless payment processing.",
    features: [
      "Live video classrooms and screen sharing using LiveKit (WebRTC).",
      "Real-time chat functionality with Socket.io for instant communication.",
      "Secure tutor booking with role-based access control and JWT authentication.",
      "Seamless payment processing with comprehensive session management."
    ]
  },
    {
    id: 3,
    title: "Arogya",
    categories: ["Full Stack", "Frontend", "Backend"],
    image: "/arogya-desktop.png",
    mobileImage: "/arogya-mobile.png",
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
    desc: "Healthcare platform with real-time blood donation matching, instant WebSocket-based emergency SOS alerts, JWT authentication, Redis caching, and comprehensive donor/patient management.",
    features: [
      "Real-time blood donation matching with WebSocket-based emergency SOS alert system.",
      "JWT + RBAC authentication with Redis caching and MongoDB indexing for optimized performance."
    ]
  },

  {
    id: 6,
    title: "Elementum Landing Page",
    categories: ["Frontend"],
    image: "/elementum-desktop.png",
    mobileImage: "/elementum-mobile.png",
    link: "https://assigment-lac.vercel.app/",
    repo: "https://github.com/Rubul-Tanti/Elementum-Langing-page",
    used: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Framer Motion", icon: SiFramer },
    ],
    desc: "Modern responsive landing page with captivating Framer Motion animations, built with React, TypeScript, Vite, and Tailwind for blazing-fast performance.",
    features: [
      "Fully responsive design that works seamlessly across all devices.",
      "Smooth animations and transitions using Framer Motion.",
      "Modern tech stack: React, TypeScript, Vite, and Tailwind CSS.",
      "Fast performance with TypeScript type safety and clean codebase."
    ]
  }
];

const filters = ["All", "Frontend", "Backend", "Full Stack"];

const MYWorks = () => {
  const worksRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeFilter));

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  const toggleProjectExpand = (id) => {
    setExpandedProjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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

  }, [activeFilter, showAllProjects]) // Re-run animation logic when filter or showAllProjects changes

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

      {displayedProjects.map((project, index) => {
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
                <div className={`pl-2 text-sm md:text-base text-gray-500 space-y-2 mt-2 transition-all duration-300 ${!expandedProjects[project.id] && 'md:block hidden'}`}>
                  <p>{project.desc}</p>
                  <h3 className='uppercase font-medium text-black'>Key features include:</h3>
                  <ul className='list-disc pl-4 text-sm'>
                    {project.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Collapsed View */}
                <div className={`md:hidden pl-2 text-sm text-gray-500 space-y-2 mt-2 ${expandedProjects[project.id] ? 'block' : 'block'}`}>
                  {expandedProjects[project.id] ? (
                    <>
                      <p>{project.desc}</p>
                      <h3 className='uppercase font-medium text-black mt-3'>Key features include:</h3>
                      <ul className='list-disc pl-4 text-sm'>
                        {project.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className='line-clamp-2'>{project.desc}</p>
                  )}
                </div>

                {/* Expand/Collapse Button - Mobile Only */}
                <button
                  onClick={() => toggleProjectExpand(project.id)}
                  className='md:hidden mt-6 w-8 h-8 mx-auto rounded-full flex items-center justify-center  text-[#DAA520] border-2 border-[#DAA520] hover:shadow-[0_8px_20px_rgba(218,165,32,0.3)] transition-all duration-300 group hover:scale-110'
                >
                  {expandedProjects[project.id] ? <CgChevronUp size={24} className='group-hover:-translate-y-1 transition-transform duration-300'/> : <BiChevronDown size={24} className='group-hover:translate-y-1 transition-transform duration-300'/>}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {filteredProjects.length > 3 && (
        <div className='flex justify-center py-10'>
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className='px-8 py-3 rounded-full text-sm tracking-[0.2em] font-black uppercase transition-all duration-500 bg-black text-[#DAA520] shadow-[0_10px_30px_rgba(218,165,32,0.3)] hover:scale-105'
          >
            {showAllProjects ? 'Show Less Projects' : 'Show More Projects'}
          </button>
        </div>
      )}
    </section>
  )
}

export default MYWorks
