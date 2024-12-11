import React, { useRef } from 'react'
import Nav from './Nav'
import Texteffect from './Texteffect'

const Hero = () => {

  return (
    <div  id="home" className='md:h-screen h-[100vw] lg:h-screen overflow-hidden'>
<Nav/>
<div className='flex flex-row justify-between mt-[15vh] '> <h1 className=' leading-none md:text-[100px] text-5xl lg:text-[150px] font-fontas pl-5 md:pl-10  lg:pl-20'><span className='text-[70px] md:text-[100px] lg:text-[200px] leading-none'>F</span>rontend </h1><div className='flex flex-row w-full justify-between items-center'><div className='text-gray-400 pl-5 text-sm text-center lg:text-xl md:text-lg'>Currently Available FOR
Freelance Worldwid</div><div></div></div></div>
<div className='flex flex-row w-full  '><div className='  w-1/3 text-center pl-5 md:lg-pl-10 lg:pl-20 '><Texteffect  Text={"WEB"} css={'text-[#DAA520] md:text-6xl text-4xl lg:text-8xl'}/></div>
<div className=''><h1 className=' leading-none md:text-[100px] text-5xl lg:text-[150px] font-fontas '><span className='md:text-[100px] text-[70px] lg:text-[200px] leading-none'>D</span>eveloper </h1></div></div>

    </div>
  )
}

export default Hero
