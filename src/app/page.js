import PageHead from './PageHead'
import Landing from './landing'
import Projects from './projects'
import Cv from './cv'
import About from "./about"
import Footer from './footer'

export default function Home() {


  return (
    <main className="t5ext-white scrollbar-none">
      <PageHead/>
    <div className='overflow-x-auto overflow-y-auto scrollbar-none text-color-white'>
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
      <Footer/>
      </div>
    </main>
  )
}
