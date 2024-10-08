import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll"

const NavBar = () => {
const [nav,setNav] = useState (false);

 const links = [
  {
    id: 1,
    link: "home"
  },
  {
    id: 2,
    link: "services"
  },
  {
    id: 3,
    link: "about"
  },
  {
    id: 4,
    link: "contact us"
  },
  {
    id: 5,
    link: "resources"
  },
 ]



  return (
    <div className='flex justify-between items-center bg-[#502cf0] text-white w-full h-15 px-2 md:px-20 fixed'>
       <div>
        <h1 className='text-5xl font-signature ml-2'>Arete.</h1>
       </div>


       <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
              <Link to={link} smooth duration={500}>{link}</Link>
            
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <IoClose size={30} /> : <MdMenu size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
                 <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
             
            </li>
          ))}
        </ul>
      )}
       
    </div>
  )
}

export default NavBar