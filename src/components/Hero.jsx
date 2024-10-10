import React from 'react'
import homepic from '../assets/images/homepic.jpg'

const Hero = () => {
  return (
    <div name="hero" className='h-screen w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:justify-between md:items-center md:gap-10'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className=' font-bold text-black text-[14px]'>Special offers for first time customer</h2>
            <p className='text-black font-bold text-4xl sm:text-[60px] py-4 max-w-max'>
                Build your own websites with us.
            </p>
        </div>
        <div>
            <img src={homepic} alt="profile" className='rounded-2xl mx-auto w-2/3 md:w-[70%]' />
        </div>
      </div>
      
    </div>
  )
}

export default Hero