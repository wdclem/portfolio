'use client'

import { motion } from 'framer-motion'
import { myFontOutline } from './layout'
import Socials from "./socials"
import Image from 'next/image'

const Landing = () => {
    return(
        <div className='grid grid-rows-5 grid-cols-7 max-w-[375px] h-screen w-screen min-w-full items-center bg-[#08090B]'> 
        <div className="row-start-1 col-start-1 col-span-2 row-span-1 mt-2 px-4 md:px-16">
          <a href="/">
              <Image 
                src='/logo3.png'
                alt="logo" 
                className="-rotate-12 hover:rotate-[360deg] transition-transform ease-in-out duration-500" 
                width={90}
                height={90}
              />
          </a>
        </div>
        <div className="hidden lg:mt-0 md:row-start-2 md:row-span-4 md:col-start-5 md:col-span-3 md:flex pl-10">
        <Image
          className="opacity-100 rounded-tl-extraLarge z-10"
          src="/mainpic4.png"
          alt=''
          width={350} 
          height={400} 
          object-fit='contain'
        />
        </div>
      <motion.div animate={{ x:[50, 50, 0], opacity: 1, scale: 1}}
                  transition={{
                    duration:1,
                    delay:0.2,
                    ease: [0.5, 0.71, 1, 1.5],}}
                  initial={{opacity:0}}
                  className="col-start-1 row-start-2 row-span-3 col-span-full md:col-start-1 md:col-span-5 px-4 md:ml-16 mx-auto py-4 text-justify max-w-[600px]">
          <h1 className={`${myFontOutline.className} max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white`}>HEY, I&apos;M</h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white text-center">CLEMENT</h1>
          <p className="md:text-md lg:text-lg text-gray-400 mt-10">
            I&apos;m a junior developer, exploring web technologies.
          </p>
          <p className="pb-12 md:text-md lg:text-lg text-gray-400">
            I enjoy pushing my limits and discovering creative solutions to real life problems.
          </p>
      </motion.div>
      <motion.div animate={{ x:[50, 50, 0], opacity: 1, scale: 1}}
                transition={{
                    duration:1.5,
                    delay:0.2,
                    ease: [0.5, 0.71, 1, 1.5],}}
                initial={{opacity:0}}
                className='col-start-1 row-start-4 row-span-1 col-span-4 px-4 py-4 md:ml-16 xl:gap-0 w-screen mt-10 md:mt-0'>
        <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 mr-2 text-base font-medium text-center text-white rounded-tr-extraLarge bg-[#3C3D3F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 w-[100px] h-[50]">
          work 
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
        </a>
        <a href="#cv" className="inline-flex items-center justify-center px-5 py-3 mr-2 text-base font-medium text-center text-white rounded-tr-extraLarge bg-[#3C3D3F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 w-[100px] h-[50]">
          cv 
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
        </a> 
        <a href="#about" className="inline-flex items-center justify-center px-5 py-3 mr-2 text-base font-medium text-center text-white rounded-tr-extraLarge bg-[#3C3D3F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 w-[100px] h-[50]">
          about 
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
        </a>
      </motion.div>
      <div  className="row-start-5 row-span-1 col-start-1 col-span-2 px-4 py-4 md:ml-16">
        <Socials/>
      </div>
    </div> 
    )
}

export default Landing