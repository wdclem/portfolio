'use client'

import Image from "next/image";
import { useState } from 'react';

const ImageFlipper = () => {
    const [flipped, setFlipped] = useState(false);

    const flipImage = () => {
      setFlipped(!flipped);
    };

    return(
    <div className="group h-[65vw] w-[45vw] [perspective:1000px]">
    <div className="h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 shadow-black/40">
      <Image
                className='opacity-80 hover:cursor-pointer' 
                src={flipped ? '/cv2.jpg' : '/cv1.jpg'}
                alt={flipped ? 'cv2' : 'cv1'}
                fill
                style={{objectFit:"contain"}}
            />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Download my cv</h1>
          <p className="text-lg">for more information</p>
          <a 
          href="/CVdl.pdf" 
          download="ccariou-cv" className="mt-2 rounded-md bg-neutral-800 py-1 px-3 text-sm hover:bg-neutral-900">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
         Download
          </a>
        </div>
      </div>
    </div>
  </div>
        // <div
        //     className={`page ${flipped ? 'flipped' : 'active'} 
        //     ${flipped ? '-rotate-y-180' : 'rotate-y-0'} 
        //     transition-transform items-center row-span-5 col-start-1 col-span-5 md:col-start-2 md:col-span-3 relative mr-4 ml-4 md:mr-0 md:ml-0`}
        //     onClick={flipImage}>

        //   </div>

    )
}

export default ImageFlipper