import React from 'react';
import avatar from '../../img/avatar.JPEG';

const Showcase = () => {
  return (
    <div className='showcase-background flex flex-col justify-start items-center h-[93vh] text-white'>
      <img
        src={avatar}
        alt='Self Portrait'
        className='w-64 rounded-full mt-36 border-white border-solid border-[3px] mb-10'
      />
      <h2 className='lg:text-6xl md:text-4xl text-3xl uppercase'>
        &#60;Hi, I'm Garrett&#62;
      </h2>
      <p className='lg:text-3xl md:text-xl text-lg font-thin'>Full Stack Web Developer</p>
    </div>
  );
};

export default Showcase;
