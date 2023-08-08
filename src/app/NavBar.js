import Image from 'next/image'

const NavBar = () => {
    return(
    <div className='flex items-center md:justify-between w-screen text-[#C4C5C5] px-4 md:px-16'>
        <a href="/">
            <Image 
              src='/logo2.png'
              alt="logo" 
              className="-rotate-12 object-contain hover:rotate-[360deg] transition-transform ease-in-out duration-500 w-auto" 
              width={100}
              height={20}
            />
        </a>
        <a className="font-semibold md:pr-44" href="#about">
            About
        </a>
  </div>
  )
}

export default NavBar