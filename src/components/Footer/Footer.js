import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <h2 className='flex flex-row justify-center items-center uppercase bg-black text-white h-16'>
        Made with <FaHeart className='mx-1' /> by Garrett Lockhart
      </h2>
    </div>
  );
};

export default Footer;
