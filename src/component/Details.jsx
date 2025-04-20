import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { TextPlugin } from 'gsap/TextPlugin'

const Details = () => {


  return (
    <div id='bex'  className="w-full md:text-3xl text-black text-sm lg:text-4xl flex justify-between flex-row relative">
      <div className='w-full flex '>
        <h1   className='uppercase p-[20%] text-center leading-none tracking-wide'>
          Hi,I am Rubul Tanti. I create visually <span className=' font-name font-normal text-[#DAA520] highlight-word'>stunning</span> yet interactive and responsive websites.
        </h1>
      </div>
    </div>
  )
}

export default Details
