import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  useGSAP(() => {
    // Initial animation for nav elements
    gsap.fromTo('#nav-logo',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' }
    )

    gsap.fromTo('#nav-links a',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.7, ease: 'power2.out' }
    )
  }, [])

  return (
    <div className={`fixed top-0 w-full z-20 transition-all duration-300 ${scrolled ? ' ' : 'bg-transparent'}`}>
      <nav>
        <div className='w-full h-24 text-center flex justify-between px-[5vw] py-[2vh] items-center'>
          <a id="nav-logo" href='#home' className={`uppercase text-xs flex flex-col border-b ${scrolled ? 'border-white text-white' : 'border-black text-black'}`}>
            rubul tanti
          </a>

          <div id="nav-links" className='flex items-center space-x-8'>
            <a href='#home' className={`text-sm uppercase hover:text-[#DAA520] transition-colors ${scrolled ? 'text-white' : 'text-black'}`}>Home</a>
            <a href='#works' className={`text-sm uppercase hover:text-[#DAA520] transition-colors ${scrolled ? 'text-white' : 'text-black'}`}>Works</a>
            <a href='#skills' className={`text-sm uppercase hover:text-[#DAA520] transition-colors ${scrolled ? 'text-white' : 'text-black'}`}>Skills</a>
            <a href='#contact' className={`text-sm uppercase hover:text-[#DAA520] transition-colors ${scrolled ? 'text-white' : 'text-black'}`}>Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
