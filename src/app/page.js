import Image from 'next/image'
import NavBar from "./NavBar"
import Socials from "./socials"

export default function Home() {
  return (
    <main className="overflow-y-auto">
      <div id="circle" className="circle z-10"></div>
      {/* <div className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-blue-800/30 dark:from-inherit lg:w-full lg:rounded-xl lg:border lg:bg-blue-800 lg:p-4 lg:dark:bg-blue-800/30"> */}
      <div className='min-h-screen min-w-screen items-center justify-between bg-[#08090B]'> 
        <div className="left-0 top-0 w-full border-b border-[#3C3D3F] bg-gradient-to-r from-[#2758BA] pb-6 pt-6 backdrop-blur-2xl"> 
        {/* <div className="fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-r from-zinc-800 pb-6 pt-6 backdrop-blur-2xl">  */}
          <NavBar/>
        </div>
        <div class="grid max-w-screen-xl px-4 py-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
          {/* <div className="relative flex full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
          {/* <div className='flex mx-auto px-4 pt-0 max-w-full '> */}
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I'm a <span className="font-thin">Problem solver, Developer & foremost the world most successful DJ body model</span>
            </p>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">CLEMENT LE CARIOU</h1>
            <a href="#projects" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-tr-extraLarge bg-[#3C3D3F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
               check my work 
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base text-center text-white border border-gray-300 rounded-tl-extraLarge hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
               Check my cv 
            </a> 
            <Socials/>
          </div>
          <div class="hidden lg:mt-0 md:col-span-5 md:flex">
          <Image
            className="relative"
            src="/mainpic3.png"
            width={350} // Adjust the width to make the picture bigger
            height={400} // Adjust the height to make the picture bigger
            />
          </div>
        </div>
      </div> 
      <div id='projects' className='flex bg-[#2758BA] h-screen grid grid-cols-5 max-w-screen-xl mx-auto md:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12 md:grid-rows-5'>
        <div class="hidden md:flex  md:col-span-6 md:col-start-2 md:row-start-3 md:items-center">
            <Image
              className=""
              src="/project1.png"
              width={550} 
              height={400}
              objecti-fit='contain'

            />
        </div>
      <h1 className='col-start-3 md:col-start-8 col-span-2 px-2 mb-0'>MY PROJECTS</h1>
        <p className='col-start-5 text-sm md:col-start-12 mb-0'>top</p>
      <hr class="ml-10 w-[80vw] my-2 h-0.5 border-t-0 bg-neutral-100 opacity-80" />
      <div className="text-center lg:mb-0 lg:text-left md:col-start-8 md:col-span-4 md:row-start-2">
        <div className="mt-4 col-start-3 rounded-lg px-2 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
          <h2 className={`mb-2 text-2xl font-semibold`}>
            Bscore
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>Web app for sports</p>
        </div>
        <hr class="ml-10 w-3/4 my-12 h-0.5 border-t-0 bg-neutral-100 opacity-80" />
        <div className="col-start-3 rounded-lg px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lem-in{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>Solving algorithm</p>
        </div>
        <hr class="ml-10 w-3/4 my-12 h-0.5 border-t-0 bg-neutral-100 opacity-80" />
        <div className="col-start-3 rounded-lg px-5 py-4 transition-colorshover:border-neutral-700 hover:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Libft{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>il faut chaud</p>
        </div>
        <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        </div>
      </div>

      <div className="bottom-0 left-0 text-color-white z-10 h-28 w-full items-end text-center">
        <p>Clement Cariou</p>
        <p>Helsinki, Uusima, Finland</p>
      </div>
    </main>
  )
}
