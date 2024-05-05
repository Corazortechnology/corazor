import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import corazor from "../assets/corazor1.svg"

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <div
      
      > 
      <img 
      className="bg-transparent drop-shadow-2xl mt-2 w-[10%]  p-0 m-0 object-contain" 
      src={corazor} alt="" />


      </div>
      {/* <h3  className='w-[300px] p-[2px] h-[32px] text-[25px] font-poppins font-normal font-bold text-white'>Corazor <span className='text-gradient'>  Technology</span> </h3> */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
      {/* <LINK to={nav.route}> */}
        {navLinks.map((nav, i) => (
          
          <li 
          className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
          key={nav.id}
          >
            <a href={`${nav.route}`}>
              {nav.title}
            </a>
          </li>        
        ))}
        {/* </LINK> */}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                <a href={`${nav.route}`}>
                  {nav.title}
                </a>    
              </li>        
            ))}
            {/* <li>Swipemate</li> */}
          </ul>
         
        </div>
      </div>
    </nav>
  )
}

export default Navbar
