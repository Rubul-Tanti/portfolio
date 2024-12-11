import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/all'

const Texteffect = ({Text,css}) => {
  
  useGSAP(()=>{ 
    
   gsap.to("#text",{
     opacity:1,duration:1,y:0,delay:1.7
    })
   
 },[])
 
  return (
   <div  className='box overflow-hidden h-24 relative '
  >
<span id='text' className={`${css} opacity-0 absolute left-[25%] translate-y-[100%]  ]`}>{Text}</span>
   </div>
  )
}

export default Texteffect
