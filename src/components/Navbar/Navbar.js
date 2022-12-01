import React, { useState } from 'react';
import logo from '../../img/logorec.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isActive, setActive] = useState(true);

  const handleChange = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className='flex flex-row justify-around items-center h-[7vh] bg-black sticky w-screen'>
        <Link to='/'>
          <img className='w-16' src={logo} alt='Personal Logo' />
        </Link>
        <nav className='custom-navbar'>
          <ul className='hide-navbar flex flex-row justify-center items-center'>
            <li className='m-4'>
              <Link
                to='/'
                className='text-white transition-all ease-in-out duration-200 hover:text-custom-accent'
              >
                ABOUT
              </Link>
            </li>
            <li className='m-4'>
              <Link
                to='/projects'
                className='text-white transition-all ease-in-out duration-200 hover:text-custom-accent'
              >
                PROJECTS
              </Link>
            </li>
            <li className='m-4'>
              <Link
                to='/contact'
                className='text-white transition-all ease-in-out duration-200 hover:text-custom-accent'
              >
                CONTACT
              </Link>
            </li>
            <li className='m-4'>
              <Link
                to='/resume'
                className='text-white transition-all ease-in-out duration-200 hover:text-custom-accent'
              >
                RESUME
              </Link>
            </li>
          </ul>
          <button onClick={handleChange} className='show-hamburger hidden text-2xl text-white'>
            <GiHamburgerMenu />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
