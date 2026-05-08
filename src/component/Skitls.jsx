import React, { useRef } from 'react'
import { FaReact, FaJs, FaHtml5, FaBootstrap, FaGithub, FaNode, FaPython, FaCode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiRedux, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiRedis, SiTypescript, SiGraphql, SiCplusplus, SiSocketdotio,
  SiReactquery, SiFramer, SiFigma, SiPostman, SiZod, SiOpenai,
  SiAxios, SiShadcnui, SiClaude
} from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { BsStars } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './AnimatedTitle';
import mePic from '../../public/profile.png';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: FaJs, name: "JavaScript" },
      { Icon: FaPython, name: "Python" },
      { Icon: SiCplusplus, name: "C++" }
    ]
  },
  {
    title: "Frontend & UI",
    skills: [
      { Icon: RiNextjsFill, name: "Next.js" },
      { Icon: FaReact, name: "React" },
      { Icon: RiTailwindCssFill, name: "Tailwind" },
      { Icon: SiRedux, name: "Redux" },
      { Icon: SiReactquery, name: "TanStack Query" },
      { Icon: "R", name: "React Router" }, // Fallback text or custom icon
      { Icon: SiFramer, name: "Framer Motion" },
      { Icon: BsStars, name: "GSAP" },
      { Icon: SiShadcnui, name: "Shadcn/UI" },
      { Icon: FaHtml5, name: "HTML5" },
      { Icon: FaCss3Alt, name: "CSS3" },
      { Icon: FaBootstrap, name: "Bootstrap" },
      { Icon: SiAxios, name: "Axios" },
      { Icon: SiZod, name: "Zod" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { Icon: FaNode, name: "Node.js" },
      { Icon: SiExpress, name: "Express.js" },
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: SiPrisma, name: "Prisma" },
      { Icon: SiRedis, name: "Redis" },
      { Icon: SiSocketdotio, name: "WebSockets" },
      { Icon: SiGraphql, name: "GraphQL" },
      { Icon: FaCode, name: "Microservices" }
    ]
  },
  {
    title: "Tools & AI Agents",
    skills: [
      { Icon: VscVscode, name: "VS Code" },
      { Icon: IoIosGitBranch, name: "Git" },
      { Icon: FaGithub, name: "GitHub" },
      { Icon: SiPostman, name: "Postman" },
      { Icon: SiFigma, name: "Figma" },
      { Icon: SiClaude, name: "Claude Code" },
      { Icon: SiOpenai, name: "ChatGPT" },
      { Icon: BsStars, name: "Kimi AI" }
    ]
  }
];

const SkillsAndAbout = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
      }
    });

    tl.from(".profile-box", { x: 100, opacity: 0, duration: 1.2, ease: "expo.out" })
      .to(".skill-node", {
        opacity: 1,
        y: 0,
        stagger: 0.01,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.8");

    gsap.to(".float-img", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <div ref={container} id="skills" className='min-h-screen bg-white text-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>

        {/* LEFT: FULL TECH STACK */}
        <div className='lg:col-span-8 order-2 lg:order-1'>
          <AnimatedTitle title="Technical Stack" subtitle="The complete toolkit" className='mb-12' />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10'>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="space-y-5">
                <h4 className='text-[10px] tracking-[0.4em] font-black uppercase text-zinc-400 border-b border-zinc-100 pb-2'>
                  {cat.title}
                </h4>
                <div className='flex flex-wrap gap-5'>
                  {cat.skills.map((skill, i) => (
                    <div key={i} className='skill-node group relative opacity-0 translate-y-4'>
                      <div className='p-3 rounded-xl bg-zinc-50 border border-zinc-100 transition-all duration-300 group-hover:bg-[#DAA520]/10 group-hover:border-[#DAA520] group-hover:scale-110'>
                        {typeof skill.Icon === 'string' ? (
                          <span className='font-bold text-lg'>{skill.Icon}</span>
                        ) : (
                          <skill.Icon size={24} className='text-zinc-700 group-hover:text-[#DAA520]' />
                        )}
                      </div>
                      <span className='absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-[9px] px-2 py-1 rounded font-bold whitespace-nowrap z-20'>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: ABOUT ME & PHOTO */}
        <div className='lg:col-span-4 order-1 lg:order-2 profile-box'>
          <div className='sticky top-24 space-y-8'>
            <div className='float-img relative w-full aspect-square max-w-[320px] mx-auto lg:ml-auto rounded-3xl overflow-hidden border-[6px] border-zinc-50 shadow-2xl group'>
              <img src={mePic} alt="Rubul Tanti" className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700' />
              <div className='absolute inset-0 bg-[#DAA520]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity' />
            </div>

            <div className='text-center lg:text-right space-y-4'>
              <h2 className='text-3xl font-black uppercase tracking-tighter'>About Me</h2>
              <p className='text-zinc-500 text-sm md:text-base leading-relaxed font-medium'>
                Self-taught Developer & BCA Dropout. I specialize in the JavaScript ecosystem,
                architecting robust backends and interactive frontends. Currently focused on
                integrating AI agents into production workflows and exploring robotics.
                I build for performance, scale, and the sheer joy of solving complex problems.
              </p>
              <div className='pt-6 flex flex-col items-center lg:items-end gap-2'>
                <span className='text-[10px] font-bold tracking-widest text-[#DAA520]'>BASED IN INDIA</span>
                <div className='h-1 w-20 bg-zinc-900'></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillsAndAbout