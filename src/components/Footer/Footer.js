import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center py-4 bg-black'>
      <h2 className='flex justify-center items-center text-white'>
        Made with <FaHeart className='mx-1' /> by Garrett Lockhart
      </h2>
      <div className='flex justify-center items-center text-2xl text-white mt-4'>
        <a
          href='https://github.com/GarrettLockhart'
          target='_blank'
          rel='noreferrer'
        >
          <BsGithub className='mx-4 cursor-pointer  transition-all ease-in-out duration-200 hover:text-custom-accent-light' />
        </a>
        <a
          href='https://www.linkedin.com/in/garrett-lockhart/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin className='mx-4 cursor-pointer  transition-all ease-in-out duration-200 hover:text-custom-accent-light' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
