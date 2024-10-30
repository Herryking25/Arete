import React from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Footer from '../components/Footer';



export const List = () => {
  return (
   <div> 
   <div className='flex justify-center'> 
    <div className='w-[600px] h-[1000px] border border-black border-2px '>
        <div className='pl-8'>
        <div>
            <div className='flex flex-row justify-between pt-4 pr-4 '>
                <div className='flex'>
                <IoChevronBackSharp />
                <p className='font-semibold text-[12px]'>Back</p>
                </div>
            <div><RxCross2 /></div>
            </div>
            <ul className='space-y-6 pt-6'>
                <li className='font-bold text-[16px]'>Blog</li>
                <li className='text-sm font-semibold'>All Topics</li>
                <li className='text-sm font-semibold'>Designs only</li>
                <li className='text-sm font-semibold'>Teams</li>
                <li className='text-sm font-semibold pb-8'>Collaboration</li>
            </ul>

        </div>
        <div class="border-t border-[#OOOOOO] w-full pt-8"></div>

        <div>
        <ul className='space-y-6'>
                <li className='font-bold text-[16px]'>Help</li>
                <li className='text-sm font-semibold'>FQA</li>
                <li className='text-sm font-semibold'>What would you like to know</li>
                <li className='text-sm font-semibold pb-8'>Support Us</li>
            </ul>
        </div>
        <div class="border-t border-[#OOOOOO] w-full pt-8"></div>

        <div>
        <ul className='space-y-6'>
                <li className='font-bold text-[16px]'> Events</li>
                <li className='text-sm font-semibold'>All Event</li>
                <li className='text-sm font-semibold'>Webinars</li>
                <li className='text-sm pb-8 font-semibold'>Online Events</li>
            </ul>
        </div>
        <div class="border-t border-[#OOOOOO] w-full pt-8 "></div>

        <div>
        <ul className='space-y-5 '>
                <li className='font-bold text-[16px]'>Our Squads</li>
                <li className=' font-semibold text-sm'>Designers</li>
                <li className='text-sm font-semibold'>Developers</li>
                <li className='text-sm font-semibold'>Photo Smarts</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default List