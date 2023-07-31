import Image from 'next/image'

const NavBar = () => {
    return(
    <div className='flex items-center md:justify-between w-screen text-[#C4C5C5] ml-5'>
        <a href="/">
            <Image 
              src='/logo2.png'
              alt="logo" 
              className="object-contain hover:rotate-[360deg] transition-transform ease-in-out duration-500" 
              width={100}
              height={20}
            />
        </a>
        <a className="font-semibold md:pr-24" href="/about">
            About
        </a>
  </div>
  )
}

export default NavBar