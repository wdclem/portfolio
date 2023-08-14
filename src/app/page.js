import Landing from './landing'
import Projects from './projects'
import Cv from './cv'
import About from "./about"
import PageHead from './PageHead'

export default function Home() {


  return (
    <main className="t5ext-white scrollbar-none">
      <PageHead/>
    <div className='overflow-x-auto overflow-y-auto scrollbar-none'>
      {/*       
        *********** 
        LANDING 
        ************
        todo:
      */}
      <Landing/>
      {/*       
        *********** 
        PROJECTS
        ************
        todo:
      */}
      <Projects/> 
      {/* 
        ***************
        CV 
        ***************
        todo:
        colors consider :
        bg-[#08090B]
        bg-[#009900]
      */}
      <Cv/> 
      {/* 
        ***************
        About 
        ***************
        todo : change pictures
      */}
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
