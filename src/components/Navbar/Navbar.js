import React, { useState } from 'react';
import logo from '../../img/logorec.png';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleChange = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className='flex flex-row md:justify-around justify-between items-center h-[7vh] bg-black sticky w-screen'>
        <Link to='/'>
          <img className='w-16 lg:ml-0 ml-10' src={logo} alt='Personal Logo' />
        </Link>
        <nav className='custom-navbar'>
          <ul
            className={
              isActive
                ? 'show-navbar flex flex-row justify-center items-center'
                : 'hide-navbar flex flex-row justify-center items-center'
            }
          >
            <li className='m-4'>
              <Link
                to='/'
                className='text-white transition-all ease-in-out duration-200 hover:text-custom-accent'
                onClick={handleChange}
              >
                ABOUT
              </Link>
            </li>
            <li className='m-4'>
              <Link
                to='/projects'
                className='text-white transition-all ease-in-out duration-200 hover:text-custom-accent'
                onClick={handleChange}
              >
                PROJECTS
              </Link>
            </li>
            <li className='m-4'>
              <Link
                to='/contact'
                className='text-white transition-all ease-in-out duration-200 hover:text-custom-accent'
                onClick={handleChange}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <button
            onClick={handleChange}
            className='show-hamburger hidden text-2xl text-white md:mr-0 mr-7 p-2 rounded-lg hover:'
          >
            <AiOutlineMenu />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
