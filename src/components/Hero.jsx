import React from 'react'
import homepic from '../assets/images/homepic.jpg'
import { Link } from "react-scroll"
import LogoSlide from './LogoSlide';
import image1 from '../assets/images/image 15.jpg'
import image2 from '../assets/images/image 20.jpg'
import image3 from '../assets/images/image 21.jpg'
import image4 from '../assets/images/image 23.jpg'
import image5 from '../assets/images/image 24.jpg'
import image6 from '../assets/images/image 25.jpg'

const Hero = () => {
  return (
    <div name="hero" className='h-full w-full'>
      <div className='max-w-screen-lg mx-auto py-20 flex flex-col items-center justify-center h-full mb-4 px-4 md:flex-row'>
        <div className='flex flex-col justify-center'>
            <h2 className=' font-bold text-black'>Special offers for first time customer</h2>
            <p className='text-black font-bold text-[36px] sm:text-5xl py-4 max-w-md'>
                Build your own websites with us.
            </p>
        </div>
        <div>
            <img src={homepic} alt="profile" className='rounded-2xl  w-[100%] md:w-[100%]' />
        </div>
      </div>
      <div className=''>
          <div className='hidden sm:flex gap-10'>
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
          </div>
        
      </div>
      
    </div>
  )
}

export default Hero