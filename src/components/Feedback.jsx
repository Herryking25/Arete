import React from 'react'

const Feedback = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-[linear-gradient(295deg,#1F158C_-2.41%,rgba(90,14,91,0.43)_116.7%,rgba(140,21,114,0)_124.1%)]
      w-[859px] h-[539px]'>
        <h2 className='text-[30px] font-semibold mt-[97px] text-white flex justify-end mx-10'>Your Feedback</h2>
        <p className='text-[27px] text-right text-white mx-10'>
        Dear Valued Client, we welcome your sincere opinion.Please take a little time to fill out the feedback form. 
        Feelfree to give us your Compliments, Criticisms, Complaintsor Suggestions. Arete Tech welcomes your feedback.
        </p>
        <div className='flex justify-end mx-10 text-white text-[25px] mt-10'>
            <button className='bg-[#5A0E5B6C] p-4 border-2 border-white'>Feedback</button>
        </div>
        
      </div>

      <div className="w-[800px] h-[539px] bg-blue-400 mx-auto flex flex-col justify-center items-center">
            <h2 className="text-[35px] mb-4 text-white font-semibold">Sign Up For Our Newsletter</h2>
            <form>
                <div className="flex items-center mb-4">
                    <div className="relative">
                        <img alt="user-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className="absolute left-2 top-2" />
                        <input type="text" placeholder="Name" className="pl-10 pr-4 py-2 w-[400px] border border-border rounded-lg focus:outline-none focus:ring focus:ring-ring" required />
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="relative">
                        <img alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✉️" className="absolute left-2 top-2" />
                        <input type="email" placeholder="Email Address" className="pl-10 pr-4 py-2 w-[400px] border border-border rounded-lg focus:outline-none focus:ring focus:ring-ring" required />
                    </div>
                </div>
                <button type="submit" className="bg-[#FD1616] text-white text-[28px] w-full p-2 rounded-lg font-bold">SUBSCRIBE NOW</button>
            </form>
        </div>
    </div>
  )
}

export default Feedback
