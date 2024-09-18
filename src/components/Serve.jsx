import React from 'react'
import service2 from '../assets/images/service2.png'
import service1 from '../assets/images/service1.png'
import { IoIosSearch } from "react-icons/io";


const Serve = () => {
  return (
    <div className='flex flex-row justify-center h-[600px] w-[1000px] '>
        <div className='' >
            <div className='font-bold mt-4 mb-4 text-lg'>
                <p>Grow with A Web <br /> Developing Team you Can  <br />Trust!</p>
            </div>
      
            <div>
                <h1 className='font-semibold text-sm'>Lorem ipsum dolor sit amet consectetur. Lectus <br />
                odio non hendrerit diam diam id sed elementum <br />
                facilisi. Ultrices tincidunt pretium at tempus sit <br />
                lectus nec sed. Lacus fringilla quam habitasse <br />
                condimentum vitae nulla nisi. Aliquam quam praesent quam <br />
                cras. Quis lobortis platea magna <br />
                vel mattis vulputate condimentum suspendisse. <br />
                Nec sit posuere sagittis enim morbi non. Purus <br />
                eget nullam non quis.</h1>
                <div className='w-[316px] h-[200px] mt-10'>
                <img src= {service2} alt="" />
                </div>
            </div>
        </div>
            {/* rightpart */}
            <div className='mt-6'>
                <div className='w-[280px] h-[950px]'>
                    <img src= {service1} alt="" />
                    <div>
                    <p className='font-bold mt-10 flex justify-center text-center w-[300px]'>Let Help you to Build and Mange your <br />
                    Website and social media handles</p>
                    <div>
                    <input type="Search" placeholder='Search'
                         className='border-2 border-black w-[300px] h-[36px] ml-2 mt-4' />
                    </div>
                        
                </div>
                </div>    

            </div>

     </div>
    
  )
}

export default Serve
