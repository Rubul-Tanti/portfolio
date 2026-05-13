import React, { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { FaReact } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 85%',
      }
    });

    tl.fromTo('.footer-animate', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    )
    .fromTo('.footer-line',
      { width: 0 },
      { width: '100%', duration: 1, ease: 'power3.inOut' },
      "-=0.6"
    )
    .fromTo('.footer-bottom-animate',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      "-=0.4"
    );

  }, { scope: footerRef })

  return (
    <footer ref={footerRef} id="contact" className="w-full bg-black text-white pt-24 pb-8 relative overflow-hidden">
      
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-[#DAA520] opacity-[0.03] blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-3xl footer-animate">
            <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Let's build <br/> <span className="text-[#DAA520] font-name font-normal lowercase tracking-normal">something great.</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-md font-medium leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          
          <div className="footer-animate flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
             <a href="https://www.linkedin.com/in/rubul-tanti-213a6b2b5" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full lg:w-auto gap-6 bg-zinc-900 border border-zinc-800 rounded-full pl-6 pr-2 py-2 hover:bg-[#DAA520] hover:border-[#DAA520] transition-all duration-500">
                <span className="text-sm md:text-base font-bold uppercase tracking-wider group-hover:text-black transition-colors">Start a Conversation</span>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-45">
                  <FaArrowRight />
                </div>
             </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-zinc-800 mb-16 footer-line"></div>

        {/* Links & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-6 footer-bottom-animate space-y-4">
            <h3 className="text-2xl font-fontas uppercase font-black tracking-tighter">Rubul Tanti</h3>
            <p className="text-[#DAA520] text-sm uppercase font-bold tracking-[0.2em]">Full Stack Developer</p>
          </div>

          <div className="md:col-span-3 footer-bottom-animate space-y-5">
            <h4 className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black">Navigation</h4>
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-zinc-300 hover:text-[#DAA520] w-fit transition-colors uppercase text-xs tracking-wider font-semibold">Home</a>
              <a href="#skills" className="text-zinc-300 hover:text-[#DAA520] w-fit transition-colors uppercase text-xs tracking-wider font-semibold">Skills</a>
              <a href="#experience" className="text-zinc-300 hover:text-[#DAA520] w-fit transition-colors uppercase text-xs tracking-wider font-semibold">Experience</a>
              <a href="#works" className="text-zinc-300 hover:text-[#DAA520] w-fit transition-colors uppercase text-xs tracking-wider font-semibold">Works</a>
            </div>
          </div>

          <div className="md:col-span-3 footer-bottom-animate space-y-5">
            <h4 className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Rubul-Tanti" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-[#DAA520] hover:text-black hover:border-[#DAA520] transition-all duration-300 hover:-translate-y-1">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/rubul-tanti-213a6b2b5" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-[#DAA520] hover:text-black hover:border-[#DAA520] transition-all duration-300 hover:-translate-y-1">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:rubultanti440@gmail.com" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-[#DAA520] hover:text-black hover:border-[#DAA520] transition-all duration-300 hover:-translate-y-1">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 footer-bottom-animate gap-4 md:gap-0">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
            &copy; {currentYear} Rubul Tanti. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
             <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">Built with</span>
             <div className="flex items-center gap-3 text-zinc-400">
               <FaReact size={14} className="hover:text-[#61DAFB] transition-colors" />
               <SiNextdotjs size={14} className="hover:text-white transition-colors" />
               <RiTailwindCssFill size={14} className="hover:text-[#06B6D4] transition-colors" />
             </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
