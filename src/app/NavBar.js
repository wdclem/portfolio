import Image from 'next/image'

const NavBar = () => {
    return(
    <div className='flex items-center justify-between w-full text-[#C4C5C5]'>
        <a href="/">
            <Image 
              src='/logo2.png'
              alt="logo" 
              className="flex items-center object-contain hover:animate-spin" 
              width={90}
              height={20}
            />
        </a>
    <div className="flex items-center gap-4 text-[#C0F1ED] mr-2">
        <a className="font-semibold" href="/league-selector">
            Work
        </a>
        <a className="font-semibold" href="/about">
            About
        </a>
    </div>
  </div>
  )
}

export default NavBar