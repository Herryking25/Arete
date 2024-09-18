import React from 'react'
import ava1 from '../assets/images/ava1.png'
import ava2 from '../assets/images/ava2.png'
import ava3 from '../assets/images/ava3.png'
import ava4 from '../assets/images/ava4.png'
import Serve from './Serve'

const Gallery = () => {
  return (
    <div className='flex justify-center '>
        <div className='bg-[#F2CDF9] h-[640px] w-[600px] '>
        <div className='font-bold  ml-6'>
            <p className='pt-2'>Lorem ipsum dolor sit <br /> amet consectetur.</p>
        </div>
      <div className='flex flex-row justify-center mt-4 gap-4'>  
        <div className='w-[260px] h-[150px] space-y-4'>
            <img src={ava1} alt="" />
            <img src={ava3} alt="" />
        </div>
        <div className='w-[260px] h-[150px] space-y-4'>
            <img src={ava2} alt=""  />
            <img src={ava4} alt="" />
        </div>
      </div>  
      </div>
    </div>
  )
}

export default Gallery
