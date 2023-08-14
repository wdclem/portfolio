'use client'

import { myFontOutline } from './layout'
import { myFontLight} from './layout'
import { myFont } from './layout'
import { motion } from 'framer-motion'
import Image from 'next/image'


const About = () => {
    return(
    <div id='about' className='bg-gradient-to-b from-[#2758BA] to-[#08090B] h-fit grid grid-cols-7 md:h-fit'>
      <h1 className={`${myFontOutline.className} h-[78px] pt-2 text-4xl col-start-3 col-span-3 md:ml-0 md:mr-2 md:text-6xl text-center`}>ABOUT</h1>
      <div className='h-[78px] col-start-7 text-sm  mb-0 text-center flex flex-col items-end mr-4 pt-2'>
          <a href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.925l5.25-5.25 5.25 5.25m-10.5 4.2l5.25-5.25 5.25 5.25 M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </a>
          <a href="#cv">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M6.6 13.925l5.25-5.25 5.25 5.25 M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </a>
      </div>
      <div className="hidden mt-2 md:col-start-4 md:col-span-1 row-span-2 md:flex items-center">
          <Image
            className="opacity-75 rounded-tr-full rounded-bl-full drop-shadow-xl -rotate-0 mb-4"
            src="/about2.png"
            alt=''
            width={400} 
            height={500} 
            />
       </div>
        {/* <div className="flex-start pt-[50px] md:mr-[50px] md:relative md:h-[80vh]">
            <div className="">
            </div>
            <div className="">
            </div>
        </div> */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className={`${myFontLight.className} text-justify-center col-start-2 col-span-5 md:col-start-3 md:col-span-3 max-w-[310px] md:max-w-[650px] ml-2`}>
            <p>
                I am a developer with a background that spans over a decade in the hospitality industry, 
                where I had the pleasure of crafting tailor-made solutions to ensure people had unforgettable experiences at high-end cocktail bars worldwide.
            </p>
            <br/>
            <p>
                I decided to pursue a career change and dive into the world of computer science. At Hive Helsinki, I discovered the boundless creativity and problem-solving potential that technology offers.
                I'm thrilled to continue exploring and expanding my knowledge in full stack and front-end development, all while keeping an eye on design and creative coding.
            </p>
            <br/>
            <p>
                As a junior developer career shifter, I bring a diverse background, attention to detail, and a passion for problem-solving.
                I thrive in dynamic environments and am always eager to take on new challenges.
            </p>
            <br/>
            <p> 
                I love a good talk so if you want to know any more about the work I'm doing,
                drop me a message on linkedin or an email at
            </p>
            <p>
            <a href="mailto:clementpierre.cariou@gmail.com<"><span className={`${myFont.myFont} text-black`}>clementpierre.cariou@gmail.com</span></a>
            </p>
            <br/>
            <br/>
        </motion.div>
    </div>
    )
}

export default About 