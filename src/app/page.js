import Image from 'next/image'
import NavBar from "./NavBar"
import Socials from "./socials"
import { myFontOutline } from './layout'

export default function Home() {
  return (
    <main className="overflow-y-auto">
      <div id="circle" className="circle z-10"></div>
      <div className='min-h-screen min-w-screen items-center justify-between bg-[#08090B]'> 
        <div id='top' className="left-0 top-0 w-full border-b border-[#3C3D3F] bg-gradient-to-r from-[#2758BA] pb-2 pt-2 backdrop-blur-2xl"> 
        {/* <div className="fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-r from-zinc-800 pb-6 pt-6 backdrop-blur-2xl">  */}
          <NavBar/>
        </div>
        <div className='contents'></div>
        <div class="grid md:grid-cols-5 max-w-[375px] h-full md:w-screen md:min-w-full px-4 md:px-16 py-24 mx-auto lg:gap-8 xl:gap-0 md:py-4">
          <div class="mr-auto place-self-center lg:col-span-6">
          {/* <div className="relative flex full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
          {/* <div className='flex mx-auto px-4 pt-0 max-w-full '> */}
          <h1 class={`${myFontOutline.className} max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white`}>HEY, I&apos;M</h1>
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">CLEMENT</h1>
          <p class="md:text-md lg:text-lg text-gray-400">
            I&apos;m a Junior Developper, exploring web technologies.
          </p>
          <p class="mb-6 lg:mb-8 md:text-md lg:text-lg text-gray-400">
            I enjoy pushing my limits and discover creative solutions to real life problems.
          </p>
          <a href="#projects" class="inline-flex items-center justify-center px-5 py-3 mr-3 mt-4 text-base font-medium text-center text-white rounded-tr-extraLarge bg-[#3C3D3F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 w-[110px] h-[50]">
           work 
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="#cv" class="inline-flex items-center justify-center px-5 py-3 mr-3 mt-4 text-base font-medium text-center text-white rounded-tr-extraLarge bg-[#3C3D3F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 w-[110px] h-[50]">
             my cv 
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
          {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 mt-4 text-base text-center text-white border border-gray-300 rounded-tl-extraLarge hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
            Check my cv 
          </a>  */}
            <Socials/>
          </div>
          <div class="hidden lg:mt-0 md:col-start-8 md:col-span-6 md:flex">
          <Image
            className="opacity-75 rounded-tl-extraLarge"
            src="/mainpic3.png"
            alt=''
            width={400} // Adjust the width to make the picture bigger
            height={450} // Adjust the height to make the picture bigger
            />
          </div>
        </div>
      </div> 
      {/*       
        *********** 
          PROJECTS
        ************
       */}
      <div id='projects' className='flex bg-[#2758BA] h-screen w-screen grid grid-cols-5 max-w-screen md:grid-rows-5'>
        <div className="hidden md:flex md:col-span-3 md:col-start- md:row-start-3 md:items-center mx-auto">
            <Image
              className=""
              src="/project1.png"
              alt=''
              width={550} 
              height={400}
              object-fit='contain'
            />
        </div>
      <h1 className={`${myFontOutline.className} ml-5 text-4xl col-start-2 md:col-start-2 col-span-3 px-2 md:text-6xl mb-0 md:ml-0 text-center`}>PROJECTS</h1>
      <div className='col-start-5 text-sm md:col-start-5 mb-0 text-center mr-2 flex flex-col items-center'>
        <a href="#top">
          <p className=''>top</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
       */}
      <div id='cv' className='flex bg-[#009900] h-screen w-screen grid grid-cols-5 max-w-screen <div class="grid grid-rows-[max-content_1fr] gap-x-4'>
        <h1 className={`${myFontOutline.className} h-[78px] ml-5 text-4xl col-start-2 md:col-start-2 col-span-3 px-2 md:text-6xl mb-0 md:ml-0 text-center`}>CV</h1>
        <div className='col-start-5 text-sm md:col-start-5 text-center mr-2 flex flex-col items-center'>
          <a href="#top">
            <p className=''>top</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path href="#top" strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
        <div className='items-center row-span-5 col-start-1 col-span-5 relative mb-4'>
        <Image
          alt='cv1'
          src='/cv1.jpg'
          layout='fill'
          objectFit='contain'
          />
        </div>
      </div>
      <div className="bottom-0 left-0 text-color-white z-10 h-28 w-full items-end text-center">
        <p>Clement Cariou</p>
        <p>Helsinki, Uusima, Finland</p>
      </div>
    </main>
  )
}
