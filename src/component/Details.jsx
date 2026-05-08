import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Details = () => {
  const container = useRef();
  const highlightRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#bex",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    // 1. Initial fade in for the whole block
    tl.from(".main-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

      // 2. TextPlugin effect for the highlight word
      // It will cycle through different things you build
      .to(highlightRef.current, {
        duration: 2,
        text: "performant",
        delay: 1,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        ease: "none"
      });

  }, { scope: container });

  return (
    <div
      id='bex'
      ref={container}
      className="w-full h-screen flex items-center justify-center bg-white text-black relative overflow-hidden"
    >
      <div className='w-full max-w-6xl px-6'>
        <h1 className='main-text font-fontas uppercase text-2xl md:text-5xl lg:text-7xl text-center leading-[1.1] tracking-tighter font-bold'>
          Hi, I am <span className="text-zinc-500">Rubul Tanti.</span><br />
          I build <span ref={highlightRef} className='font-name font-normal text-[#DAA520]'>scalable</span> <br />
          APIs & Full-Stack Systems.
        </h1>
      </div>

      {/* Optional subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 text-[20vw] font-bold select-none pointer-events-none">
        DEV
      </div>
    </div>
  )
}

export default Details