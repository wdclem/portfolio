import { myFontOutline } from './layout'
import Image from 'next/image'


const About = () => {

    return(
    <div id='about' className='flex bg-[#2758BA] h-auto w-screen grid grid-cols-5 md:h-screen'>
      <h1 className={`${myFontOutline.className} h-[78px] ml-5 text-4xl col-start-2 md:col-start-2 col-span-3 px-2 md:text-6xl md:ml-0 text-center row-end-1`}>ABOUT</h1>
      <div className='col-start-5 text-sm md:col-start-5 mb-0 text-center mr-2 flex flex-col items-center'>
        <a href="#top">
          <p className=''>top</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>
      <div className="hidden lg:mt-0 md:col-start-3 md:col-span-1 row-span-2 md:flex items-center">
          <Image
            className="opacity-75 rounded-tr-full rounded-tr-full rounded-bl-full drop-shadow-xl -rotate-12 mt-6"
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
        <div className="col-start-2 col-span-3 ">
            <p>
                "I am a developer with a background that spans over a decade in the hospitality industry, 
                where I had the pleasure of crafting tailor-made solutions to ensure people had unforgettable experiences at high-end cocktail bars worldwide."
            </p>
            <br/>
            <p>
                "I decided to pursue a career change and dive into the world of computer science. At Hive Helsinki, I discovered the boundless creativity and problem-solving potential that technology offers.
                I'm thrilled to continue exploring and expanding my knowledge in full stack and front-end development, all while keeping an eye on design and creative coding."
            </p>
            <br/>
            <p>
                "As a junior developer career shifter, I bring a diverse background, attention to detail, and a passion for problem-solving.
                I thrive in dynamic environments and am always eager to take on new challenges."
            </p>
            <br/>
            <p> 
                "I love a good talk so if you want to know any more about the work I'm doing,
                 drop me a message on linkedin or an email at <a href="mailto:clementpierre.cariou@gmail.com<"><span>clementpierre.cariou@gmail.com</span></a>."
            </p>
            <br/>
            <br/>
        </div>
    </div>
    )
}

export default About 