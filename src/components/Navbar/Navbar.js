import React from 'react';
import logo from '../../img/logorec.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-around items-center h-[7vh] bg-black sticky w-screen'>
        <Link to='/'>
          <img className='w-16' src={logo} alt='Personal Logo' />
        </Link>
        <nav className=''>
          <ul className='flex flex-row justify-center items-center'>
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
