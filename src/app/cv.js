'use client'
import ImageFlipper from "./imgflipper"
import { myFontOutline } from './layout'
import { motion } from "framer-motion"

const Cv = () => {

    return (
    <div id='cv' className='bg-[#2758BA] w-screen h-screen grid grid-cols-7 grid-rows-7 items-center'>
    <h1 className={`${myFontOutline.className} h-[78px] pt-4 text-4xl col-start-4 col-span-1 px-2 md:text-6xl mb-0 md:ml-0 text-center`}>CV</h1>
    <div className='h-[78px] col-start-7 text-sm  mb-0 text-center flex flex-col items-end mr-4 pt-4'>
      <a href="#top">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.925l5.25-5.25 5.25 5.25m-10.5 4.2l5.25-5.25 5.25 5.25 M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </a>
      <a href="#projects">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M6.6 13.925l5.25-5.25 5.25 5.25 M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </a>
      </div>
    <motion.div 
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={{
       visible: {
         x: [150, 0, 0],
         opacity: 1,
         scale: 1,
         transition: {
           duration: 1,
           ease: [0.5, 0.71, 1, 1.5],
         },
       },
       hidden: {
         opacity:0,
         scale: 1
       }}}
     className='row-start-2 row-span-4 col-start-1 md:col-start-3 col-span-3 mx-4'>
        <ImageFlipper className=""/>
    </motion.div>
  </div>
    )
}

export default Cv