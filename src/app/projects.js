'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import { myFontOutline } from './layout'
import { useState } from "react";

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const handleProjectHover = (project) => {
      setHoveredProject(project);
    };

    return(
        <motion.div
        initial="hidden"
        whileInView="visible"
        animate="target"
        transition={{
          ease: 'easeInOut',
          duration: 4,
        }}
            id='projects' className='bg-gradient-to-t from-[#2758BA] h-screen grid grid-cols-5 max-w-screen md:grid-rows-5'>
        <div className="hidden md:flex md:col-span-3 md:col-start- md:row-start-3 md:items-center mx-auto">
            <Image
              className=""
              src={`/project${hoveredProject === 'Lem-in' ? '2' : hoveredProject === 'Libft' ? '3' : '1'}.png`}
              alt=''
              width={550} 
              height={400}
              object-fit='contain'
            />o
        </div>
      <h1 className={`${myFontOutline.className} h-[78px] pt-10 ml-5 text-4xl col-start-2 col-span-3 px-2 md:text-6xl mb-0 md:ml-0 text-center`}>PROJECTS</h1>
      <div className='col-start-5 text-sm md:col-start-5 mb-0 text-center flex flex-col items-end mr-4 pt-4'>
        <a href="#top">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
            <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.925l5.25-5.25 5.25 5.25m-10.5 4.2l5.25-5.25 5.25 5.25 M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </a>
      </div>
      {/* <hr className="col-start-2 col-span-3 h-0.5 bg-neutral-100 opacity-50 md:col-start-9 md:row-start-2 md:col-span-3"/> */}
      <motion.div
        className="grid grid-cols-5 w-screen md:w-fit lg:text-left md:col-start-4 md:col-span-4 md:row-start-2">
        <hr className="col-start-2 col-span-3 my-2 h-0.5 border-t-0 bg-neutral-100 opacity-50 md:col-start-1 md:col-span-5" />
        <div className="text-start mt-4 mb-4 col-start-2 col-span-3 rounded-lg px-4 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
              onMouseEnter={() => handleProjectHover('Bscore')}>
          <a href='https://betterscore.vercel.app/'>
            <h2 className={`mb-2 text-center text-2xl`}>
              Bscore
              {' '}
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span> */}
            </h2>
            <p className={`text-center text-sm opacity-50`}>Web app for sports</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center mx-auto mt-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
        <hr className="col-start-2 col-span-3 my-2 h-0.5 border-t-0 bg-neutral-100 opacity-50 md:col-start-1 md:col-span-5" />
        <div className="text-start mt-4 mb-4 col-start-2 col-span-3 rounded-lg px-4 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
               onMouseEnter={() => handleProjectHover('Lem-in')}> 
          <a href='https://github.com/wdclem/Lem-in'>
          <h2 className={`mb-3 text-center text-2xl`}>
            Lem-in{' '}
          </h2>
          <p className={`max-w-[50ch] text-center text-sm opacity-50`}>Solving algorithm</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center mx-auto mt-4 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
         </a>
        </div>
        <hr className="col-start-2 col-span-3 my-2 h-0.5 border-t-0 bg-neutral-100 opacity-50 md:col-start-1 md:col-span-5" />
        <div className="text-start mt-4 mb-4 col-start-2 col-span-3 rounded-lg py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
               onMouseEnter={() => handleProjectHover('Libft')}>
          <a href='https://github.com/wdclem/libft'>
            <h2 className={`mb-3 text-center text-2xl font-semibold`}>
              Libft{' '}
            </h2>
            <p className={`text-center text-sm opacity-50`}>Personnal C lib</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center mx-auto mt-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
        </motion.div>
      </motion.div>

    )
}

export default Projects