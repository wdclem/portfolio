import Image from 'next/image'

const NavBar = () => {
    return(
    <div className='flex items-center justify-between w-full text-[#C4C5C5]'>
        <a href="/">
            <Image 
              src='/logo2.png'
              alt="logo" 
              className="object-contain hover:rotate-[360deg] transition-transform ease-in-out duration-500" 
              width={100}
              height={20}
            />
        </a>
        <a className="hidden font-semibold" href="">
            Work
        </a>
        <a className="font-semibold mr-6" href="/about">
            About
        </a>
        <a className="hidden font-semibold" href="">
           cv 
        </a>
  </div>
  )
}

export default NavBar