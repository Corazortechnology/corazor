import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import corazor from "../assets/corazor2.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const renderLink = (nav) => {
    // Check if the link is external
    if (nav.external) {
      return (
        <a 
          href={nav.route} 
          className='font-poppins font-normal cursor-pointer text-[16px]'
          target="_blank" // Open in new tab
          rel="noopener noreferrer" // Security for opening links in a new tab
        >
          {nav.title}
        </a>
      );
    } else {
      return (
        <ScrollLink 
          to={nav.id} // Use id from navLinks which corresponds to section IDs
          spy={true}
          smooth={true}
          offset={90}
          duration={500}
          className='font-poppins font-normal cursor-pointer text-[16px]'
        >
          {nav.title}
        </ScrollLink>
      );
    }
  };

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar z-50'>
      <div>
        <img 
          className="bg-transparent drop-shadow-2xl w-[20%] p-0 m-0 object-contain" 
          src={corazor} 
          alt="Corazor Logo" 
        />
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`mr-10 ${i === navLinks.length - 1 ? 'mr-0' : ''}`}
          >
            {renderLink(nav)}
          </li>        
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='Menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`mb-4 ${i === navLinks.length - 1 ? 'mb-0' : ''}`}
              >
                {renderLink(nav)}
              </li>        
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
