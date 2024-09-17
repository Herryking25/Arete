import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import homepic from '../assets/images/homepic.jpg'
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <div name="hero" className='h-screen w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className=' font-bold text-black'>Special offers for first time customer</h2>
            <p className='text-gray-500 text-4xl sm:text-7xl py-4 max-w-md'>
                Build your own websites with us.
            </p>
            {/* <div>
                <Link to="contact" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer'>
                    Contact Me
                    <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                </Link>
            </div> */}
        </div>
        <div>
            <img src={homepic} alt="profile" className='rounded-2xl mx-auto w-2/3 md:w-[70%]' />
        </div>
      </div>
    </div>
  )
}

export default Hero