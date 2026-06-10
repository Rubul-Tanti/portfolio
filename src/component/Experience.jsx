import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

const Experience = () => {
  const expRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.exp-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: expRef.current,
          start: 'top 80%',
        },
        ease: 'power2.out'
      }
    )
  }, [])

  return (
    <section ref={expRef} id="experience" className='flex flex-col gap-2 min-h-screen pt-10 px-4 md:px-10 lg:px-20'>
      <AnimatedTitle
        title="Experience"
        subtitle="my professional journey"
        titleId="exp-title"
        subtitleId="exp-subtitle"
        className='mb-10'
      />

      <div className='flex flex-col gap-10 mt-10'>
        <div className='exp-item flex flex-col md:flex-row gap-5 border-l-4 border-[#DAA520] pl-5 md:pl-10 py-2'>
          <div className='w-full md:w-1/3 text-gray-500 uppercase font-semibold tracking-wide'>
            Jul 2024 - Jan 2025
          </div>
          <div className='w-full md:w-2/3 flex flex-col gap-3'>
            <h2 className='text-2xl md:text-3xl uppercase font-fontas'>Frontend Developer Intern</h2>
            <div className='flex items-center gap-3'>
              <img src="data:image/webp;base64,UklGRjwBAABXRUJQVlA4IDABAAAwBgCdASogACAAPtEutFooIagoGAEAGglsABwNxM0aQAuP/14My+3oqVYGXfZ4nJJoNVIPBvARs7VgAM4//cvx3ILG/hfMGgo1u6aSAxmEIO7tyedIlXb9c/6ruMg/i0VN17ULuvhCQXgnXesLQ/PlFkf//qmf+6a6r/OjALyHFNlGZo9+tH2ysvp6L9ojfmFi5qv4rb8BxI7FV9DJnUOpFrKwi7Q3bOKCAzw2AGwvJ6VS83hv//VM/9+36g/GiChNWaHS8DoNKMf+DObNLpJIKiBm/xExfXmMEs1Qfsjj4BEDoejbf80F40eQbF6F8Gp7/pM/ZicewTrGHTPN6P++bU+LHBokXDvWQbD/pjQWsPvwYufgsa+fEZmc4i6qBpj4cEaVI954ePXrmDEG9IAA" alt="PRNK INFOTECH Logo" className='w-10 h-10 shadow-sm rounded-full' />
              <h3 className='text-xl text-[#DAA520] uppercase font-semibold'>PRNK INFOTECH LLP</h3>
            </div>
            <ul className='list-disc pl-5 text-gray-400 text-sm md:text-base space-y-2'>
              <li>Built production-ready, responsive UIs using Next.js and React Native with code splitting and optimized rendering, reducing initial load time.</li>
              <li>Integrated REST APIs using Axios with JWT-based token management including refresh token flows across multiple modules.</li>
              <li>Delivered smooth animations using GSAP and Framer Motion; managed complex async state with Zustand and TanStack Query.</li>
              <li>Shipped scalable UI component systems with Tailwind CSS and Shadcn/ui end-to-end in an agile remote environment.</li>
            </ul>
          </div>
        </div>

        <div className='exp-item flex flex-col md:flex-row gap-5 border-l-4 border-[#DAA520] pl-5 md:pl-10 py-2'>
          <div className='w-full md:w-1/3 text-gray-500 uppercase font-semibold tracking-wide'>
            May 2024 - Jun 2024
          </div>
          <div className='w-full md:w-2/3 flex flex-col gap-3'>
            <h2 className='text-2xl md:text-3xl uppercase font-fontas'>Web Developer Intern</h2>
            <div className='flex items-center gap-3'>
              <img src="https://media.licdn.com/dms/image/v2/D560BAQFWILaMxgLvEA/company-logo_200_200/company-logo_200_200/0/1724759254608?e=1779926400&v=beta&t=-QH0uuBlFXMM0SSaIQAZnahd_Vb3LBtDtk99D6NH-tk" alt="GOIT PRIVATE Logo" className='w-10 h-10 shadow-sm border border-[#DAA520] rounded-full' />
              <h3 className='text-xl text-[#DAA520] uppercase font-semibold'>Turn2 Web</h3>
            </div>
            <ul className='list-disc pl-5 text-gray-400 text-sm md:text-base space-y-2'>
              <li>Converted Figma designs into pixel-perfect, cross-browser-compatible UIs using CSS Flexbox, Grid, and media queries.</li>
              <li>Built reusable components following BEM conventions; resolved cross-browser performance bugs improving visual consistency.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
