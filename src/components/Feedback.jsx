import React from 'react'

const Feedback = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center'>
      <div className='bg-[linear-gradient(295deg,#1F158C_-2.41%,rgba(90,14,91,0.43)_116.7%,rgba(140,21,114,0)_124.1%)]
       md:max-w-max md:max-h-max md:p-6'>
        <h2 className='text-[30px] mt-10 font-semibold  text-white flex justify-center mx- sm:mx-10 sm:justify-end sm:mt-[97px]'>Your Feedback</h2>
        <p className='text-[20px] text-center text-white mx-10 sm:text-right sm:text-[27px]'>
        Dear Valued Client, we welcome your sincere opinion.Please take a little time to fill out the feedback form. 
        Feel free to give us your Compliments, Criticisms, Complaintsor Suggestions. Arete Tech welcomes your feedback.
        </p>
        <div className='flex justify-center p-4 mx-10 text-white text-[25px] mt-8 sm:justify-end'>
            <button className='bg-[#5A0E5B6C] p-4 border-2 border-white'>Feedback</button>
        </div>
        
      </div>

      <div className=" max-h-max w-full bg-blue-400 mx-auto flex flex-col justify-center items-center md:max-w-max md:max-h-max md:p-28">
            <h2 className="text-[25px] p-4 mb-4 text-white font-semibold sm:text-[35px]">Sign Up For Our Newsletter</h2>
            <form>
                <div className="flex justify-center items-center mb-4">
                    <div className="relative">
                        <img alt="user-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className="absolute left-2 top-2" />
                        <input type="text" placeholder="Name" className="pl-10 pr-4 py-2 sm:w-[400px] border border-border rounded-lg focus:outline-none focus:ring focus:ring-ring" required />
                    </div>
                </div>
                <div className="flex justify-center items-center mb-4">
                    <div className="relative">
                        <img alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✉️" className="absolute left-2 top-2" />
                        <input type="email" placeholder="Email Address" className="pl-10 pr-4 py-2 sm:w-[400px] border border-border rounded-lg focus:outline-none focus:ring focus:ring-ring" required />
                    </div>
                </div>
                <div className='m-4 flex justify-center items-center'>
                <button type="submit" className="bg-[#FD1616] text-white text-[28px] w-full p-2 rounded-lg font-bold">SUBSCRIBE NOW</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Feedback
