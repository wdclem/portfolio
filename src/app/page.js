import Image from 'next/image'
import NavBar from "./NavBar"

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen items-center justify-between bg-[#08090B]">
        {/* <div className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-blue-800/30 dark:from-inherit lg:w-full lg:rounded-xl lg:border lg:bg-blue-800 lg:p-4 lg:dark:bg-blue-800/30"> */}
        <div className="fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-r from-zinc-800 pb-6 pt-6 backdrop-blur-2xl"> 
          <NavBar/>
      </div>

      {/* <div className="relative flex full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
      <div className='mx-auto px-4 pt-20 md:max-w-full h-full'>
      <div className=''>
        <div className=''>
          <Image
            // className="w-6/12 sm:w-4/12 px-4 pulse-1 drop-shadow-lg drop-shadow-blue-800/50" 
            className="mt-24 fixed right-2 shadow-xl shadow-white rounded-tl-extraLarge rounded-br-extraLarge border-4 border-yellow-600 hover:animate-spin pr-2 pl-1" 
            src="/mainpic2.jpg"
            alt=""
            width={150}
            height={90}
          />
        </div>
        <div className='relative text-shadow-black text-shadow-lg text-left w-full'>
          <p className="pt-28 text-lg font-light leading-7 text-white md:text-base">
            I'm a <span className="font-thin">Problem solver, Developer</span>
            <span className="text-gradient-red font-bold"> Bikini Specialist & Model</span>.
          </p>
          <h1 className="text-6xl font-bold text-md:text-8xl">Clement Cariou</h1>
        </div>
      </div>

      <div className="mt-10 pt-10 grid text-center bg-[#2758BA] lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Bscore
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Web app for sports</p>
        </a>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lem-in{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Solving algorithm</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Libft{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>il faut chaud</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Project4{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
        </a>

      </div>

      <div className="bottom-0 left-0 text-color-white z-10 h-28 w-full items-end text-center">
        <p>Clement Cariou</p>
        <p>Helsinki, Uusima, Finland</p>
      </div>
      </div>
    </main>
  )
}
