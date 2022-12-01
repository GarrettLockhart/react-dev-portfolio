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
      <h2 className='md:text-6xl text-4xl uppercase'>
        &#60;Hi, I'm Garrett&#62;
      </h2>
      <p className='md:text-3xl text-xl font-thin'>Full Stack Web Developer</p>
    </div>
  );
};

export default Showcase;
