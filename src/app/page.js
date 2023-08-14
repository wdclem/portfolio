import Image from 'next/image'
import Head from 'next/head'
import NavBar from "./NavBar"
import Socials from "./socials"
import ImageFlipper from "./imgflipper"
import About from "./about"
import { myFontOutline } from './layout'

export default function Home() {
  return (
    <main className="text-white scrollbar-none">
    <div className='overflow-x-auto overflow-y-auto scrollbar-none'>
      <div className='grid grid-rows-5 grid-cols-7 max-w-[375px] h-screen w-screen min-w-full items-center justify-between bg-[#08090B]'> 
          <div className="row-start-1 col-start-1 col-span-1 row-span-1 mt-2 px-4 md:px-16">
            <a href="/">
                <Image 
                  src='/logo3.png'
                  alt="logo" 
                  className="-rotate-12 object-contain hover:rotate-[360deg] transition-transform ease-in-out duration-500 w-auto" 
                  width={60}
                  height={20}
                />
            </a>
          </div>
          <div className="hidden lg:mt-0 md:row-start-2 md:row-span-4 md:col-start-5 md:col-span-3 md:flex">
          <Image
            className="opacity-75 rounded-tl-extraLarge"
            src="/mainpic3.png"
            alt=''
            width={350} 
            height={400} 
            object-fit='contain'
          />
          </div>
        <div className="col-start-1 row-start-2 row-span-3 col-span-4 px-4 md:ml-16 mx-auto xl:gap-0 md:py-4">
          <div className="max-w-[600px]">
            <h1 className={`${myFontOutline.className} max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white`}>HEY, I&apos;M</h1>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">CLEMENT</h1>
            <p className="md:text-md lg:text-lg text-gray-400">
              I&apos;m a junior developer, exploring web technologies.
            </p>
            <p className="pb-12 md:text-md lg:text-lg text-gray-400">
              I enjoy pushing my limits and discover creative solutions to real life problems.
            </p>
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
          </div>
        </div>
        <div  className="row-start-5 px-4 md:px-16 py-24 mx-auto lg:gap-8 xl:gap-0 md:py-4">
          <Socials/>
        </div>
      </div> 
      {/*       
        *********** 
          PROJECTS
        ************
       */}
      <div id='projects' className='flex bg-gradient-to-t from-[#2758BA] h-screen grid grid-cols-5 max-w-screen md:grid-rows-5'>
        <div className="hidden md:flex md:col-span-3 md:col-start- md:row-start-3 md:items-center mx-auto">
            <Image
              className=""
              src="/project1.png"
              alt=''
              width={550} 
              height={400}
              object-fit='contain'
            />o
        </div>
      <h1 className={`${myFontOutline.className} h-[78px] pt-4 ml-5 text-4xl col-start-2 md:col-start-2 col-span-3 px-2 md:text-6xl mb-0 md:ml-0 text-center`}>PROJECTS</h1>
      <div className='col-start-5 text-sm md:col-start-5 mb-0 text-center flex flex-col items-end mr-4 pt-4'>
        <a href="#top">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
            <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.925l5.25-5.25 5.25 5.25m-10.5 4.2l5.25-5.25 5.25 5.25 M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </a>
      </div>
      {/* <hr className="col-start-2 col-span-3 h-0.5 bg-neutral-100 opacity-50 md:col-start-9 md:row-start-2 md:col-span-3"/> */}
      <div className="grid grid-cols-5 w-screen md:w-fit lg:text-left md:col-start-4 md:col-span-4 md:row-start-2">
        <hr className="col-start-2 col-span-3 my-2 h-0.5 border-t-0 bg-neutral-100 opacity-50 md:col-start-1 md:col-span-5" />
        <div className="text-start mt-4 mb-4 col-start-2 col-span-3 rounded-lg px-4 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
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
        <div className="text-start mt-4 mb-4 col-start-2 col-span-3 rounded-lg px-4 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"> 
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
        <div className="text-start mt-4 mb-4 col-start-2 col-span-3 rounded-lg py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
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
        </div>
      </div>
      {/* 
        ***************
           CV 
        ***************
        colors consider :
        bg-[#08090B]
         bg-[#009900]
       */}
      <div id='cv' className='bg-[#2758BA] h-screen grid grid-cols-7 grid-rows-5'>
        <h1 className={`${myFontOutline.className} h-[78px] pt-4 ml-5 text-4xl col-start-4 col-span-1 px-2 md:text-6xl mb-0 md:ml-0 text-center`}>CV</h1>
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
        <div className='col-start-2 col-span-3 md:col-start-3 md:col-span-4'><ImageFlipper className=""/></div>
      </div>
      <About/>
      <div className="border-t border-[#3C3D3F] bg-[#08090B] text-color-white h-28 w-full flex justify-center items-center text-center">
        <div className=''>
          <p>Clement Cariou</p>
          <p>Helsinki, Uusima, Finland</p>
        </div>
      </div>  
      </div>
    </main>
  )
}
