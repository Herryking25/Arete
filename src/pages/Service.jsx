import React from 'react'
import service2 from '../assets/images/service2.png'
import service1 from '../assets/images/service1.png'
import { IoIosSearch } from "react-icons/io";
import Gallery from '../components/Gallery';



const Service = () => {
  return (
    <div>
    <div className='flex flex-row justify-center h-[600px] mt-8'>
        <div className=' ' >
            <div className='font-bold mt-4 mb-4 text-lg '>
                <p>Grow with A Web <br /> Developing Team you Can  <br />Trust!</p>
            </div>
      
            <div>
                <h1 className='font-semibold text-sm w-[350px]'>Lorem ipsum dolor sit amet consectetur. Lectus <br />
                odio non hendrerit diam diam id sed elementum <br />
                facilisi. Ultrices tincidunt pretium at tempus sit <br />
                lectus nec sed. Lacus fringilla quam habitasse <br />
                condimentum vitae nulla nisi. Aliquam quam praesent quam <br />
                cras. Quis lobortis platea magna <br />
                vel mattis vulputate condimentum suspendisse. <br />
                Nec sit posuere sagittis enim morbi non. Purus <br />
                eget nullam non quis.</h1>
                <div className='w-[290px] h-[200px] mt-6'>
                <img src= {service2} alt="" />
                </div>
            </div>
        </div>
            {/* rightpart */}
            <div className=''>
                <div className='w-[270px] h-[950px]'>
                    <img src= {service1} alt="" />
                    <div>
                    <p className='font-bold mt-10 flex justify-center text-center w-[290px]'>Let Help you to Build and Mange your <br />
                    Website and social media handles</p>
                    <div className="relative w-full max-w-md">
            <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-[280px] h-[40px] border-2 border-black mt-3 rounded-md p-3 pl-8 text-lg
                 bg-white focus:outline-none focus:border-blue-500"
            />
            <IoIosSearch className="absolute left-3 top-6 text-[#000000] size-5" />
        </div>
                        
                </div>
                </div>    

            </div>
            
        

     </div>
     <Gallery />
     </div>
  )
}

export default Service
