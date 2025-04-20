import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const AnimatedTitle = ({ title, subtitle, className, titleId, subtitleId }) => {
  const titleRef = useRef(null)
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate title when it comes into view
    gsap.fromTo(`#${titleId}`,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        ease: 'power2.out'
      }
    )
    
    // Animate subtitle when it comes into view
    if (subtitle) {
      gsap.fromTo(`#${subtitleId}`,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
          ease: 'power2.out'
        }
      )
    }
  }, [])
  
  return (
    <div ref={titleRef} className={className}>
      <h2 id={titleId} className="text-2xl md:text-3xl lg:text-4xl font-fontas uppercase mb-2">
        {title}
      </h2>
      {subtitle && (
        <p id={subtitleId} className="text-gray-400 text-sm md:text-base uppercase">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default AnimatedTitle
