'use client'

import Image from "next/image";
import { useState } from 'react';

const ImageFlipper = () => {
    const [flipped, setFlipped] = useState(false);

    const flipImage = () => {
      setFlipped(!flipped);
    };

    return(
        <div
            className={`page ${flipped ? 'flipped' : 'active'} 
            ${flipped ? '-rotate-y-180' : 'rotate-y-0'} 
            transition-transform items-center row-span-5 col-start-1 col-span-5 relative mr-4 ml-4 md:mr-0 md:ml-0`} 
            onClick={flipImage}>
          <Image
            className='transform opacity-80 hover:cursor-pointer' 
            src={flipped ? '/cv2.jpg' : '/cv1.jpg'}
            alt={flipped ? 'cv2' : 'cv1'}
            fill
            style={{objectFit:"contain"}}
            />
          </div>
    )
}

export default ImageFlipper