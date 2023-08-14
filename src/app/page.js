import Landing from './landing'
import ImageFlipper from "./imgflipper"
import About from "./about"
import Projects from './projects'
import PageHead from './PageHead'
import { myFontOutline } from './layout'

export default function Home() {


  return (
    <main className="text-white scrollbar-none">
    <div className='overflow-x-auto overflow-y-auto scrollbar-none'>
      <Landing/>
      {/*       
        *********** 
          PROJECTS
        ************
       */}
      <Projects/> 
      {/* 
        ***************
           CV 
        ***************
        colors consider :
        bg-[#08090B]
         bg-[#009900]
       */}
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
        <div className='row-start-2 row-span-4 col-start-1 md:col-start-3 col-span-7 mx-4'><ImageFlipper className=""/></div>
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
