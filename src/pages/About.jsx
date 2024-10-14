import React from 'react'
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'

export const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-[700px] '>
        <img src={about1} alt="" />
        </div>
        <div className='bg-[#F2CDF9] w-[700px] h-[210px]'>
          <div className=' pt-8'>
            <p className='font-bold  text-[20px] pl-16'>About Us</p>
            <h1 className='flex justify-center pt-4 font-bold text-sm pr-4'>Lorem ipsum dolor sit amet consectetur. Lectus odio non hendrerit diam diam id <br />
                sed elementum facilisi. Ultrices tincidunt pretium at tempus sit lectus nec sed. <br />
                Lacus fringilla quam habitasse condimentum vitae nulla nisi. Aliquam quam <br />
                praesent quam cras. Quis lobortis platea magna vel mattis vulputate condimentum <br />
                suspendisse. Nec sit posuere sagittis enim morbi non. Purus eget nullam non quis.</h1>
          </div>      
        </div>
        <div className='bg-[#FFFFFF] w-[700px] h-[300px] pl-8 pt-12'>
            <p className='font-bold text-[16px]'>Fast facts </p>
            <div className='flex flex-row gap-4 pt-10'>
                <div className='w-[120px] h-[120px] bg-[#E9E8E8]'>
                    <p className='flex justify-center font-bold text-[40px] pt-4'>7M</p>
                </div>
                <div className='w-[120px] h-[120px] bg-[#E9E8E8]'>
                    <p className='flex justify-center font-bold text-[40px] pt-4'>100K</p>
                </div>
            </div>
        </div>
        <div className='bg-[#BEBCBC] w-[700px] h-[300px] pl-8'>
            <div>
                <p className='font-bold text-[20px] pt-6'>Founder</p>
            </div>
            <div className='flex flex-row gap-6 items-center'>
                <img src={about2} alt="" className='w-[160px] pt-4 '/>
                <div>
                <p className='font-bold text-xs'>Lorem ipsum dolor sit amet consectetur. Lectus odio non <br />
                    hendrerit diam diam id sed elementum facilisi. Ultrices <br />
                    tincidunt pretium at tempus sit lectus nec sed. Lacus fringilla quam habitasse condimentum vitae nulla nisi. <br />
                     Aliquam quam praesent quam cras. Quis lobortis platea <br />
                     magna vel mattis vulputate condimentum suspendisse. Nec <br />
                     sit posuere sagittis enim morbi non. Purus eget nullam non <br /> quis.</p>
                     <div className='border-[#0C0B0B] border-2 w-[100px] h-[30px] flex justify-center mt-4 font-bold text-sm'>
                     <button>See More</button>
                     </div>
                 </div>    
            </div>
            
        </div>
    </div>
  )
}

export default About
