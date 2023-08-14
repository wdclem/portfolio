import Image from 'next/image'

const NavBar = () => {
    return(
    <div className='flex items-center md:justify-between text-[#C4C5C5]'>
      <div className="flex items-center px-4">
        <a href="/">
            <Image 
              src='/logo3.png'
              alt="logo" 
              className="-rotate-12 object-contain hover:rotate-[360deg] transition-transform ease-in-out duration-500 w-auto" 
              width={100}
              height={20}
            />
        </a>
      </div>
        <a className="font-semibold w-auto md:mr-4" href="#about">
            
        </a>
  </div>
  )
}

export default NavBar