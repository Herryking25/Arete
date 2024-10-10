import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='bg-[#404040] text-white pb-20 pt-10'>
      <div className=''>
             <h1 className='text-[40px] font-semibold flex justify-center items-center'>
                Why Choose Us?
            </h1>
            <div className='flex flex-col justify-center items-center gap-10 sm:flex-row mx-5 mt-10'>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[30px] font-semibold'>Trusted</h1>
                    <p className='text-[22] font-medium text-center'>
                    With years of experience in the digital space, we have built a reputation for delivering reliable solutions. 
                    Our clients trust us to meet their goals because we consistently prioritize their success. 
                    Every project is handled with professionalism, transparency, and dedication.
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[30px] font-semibold'>Affordability</h1>
                    <p className='text-[22] font-medium text-center'>
                    We believe that high-quality digital services should be accessible to businesses of all sizes. 
                    That’s why we offer cost-effective solutions tailored to your needs. 
                    Our affordable pricing ensures you get the best value without compromising on quality, 
                    allowing you to focus on growth without stretching your budget.
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[30px] font-semibold'>Internships</h1>
                    <p className='text-[22] font-medium text-center'>
                    We're committed to nurturing the next generation of digital professionals. 
                    Through our internship programs, we provide aspiring talents with hands-on experience, mentorship, 
                    and the opportunity to work on real projects. 
                    Our interns gain valuable industry knowledge, 
                    preparing them for successful careers while contributing fresh perspectives to our team.
                    </p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
