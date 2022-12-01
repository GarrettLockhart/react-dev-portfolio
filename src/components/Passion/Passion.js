import React from 'react';

import { FaCode, FaPaintBrush, FaUserCheck } from 'react-icons/fa';

const Passion = () => {
  return (
    <section class='container mx-auto my-32 grid w-[90vw] lg:grid-cols-3 justify-center text-center'>
      <article class=''>
        <div class='flex flex-col justify-center items-center p-4'>
          <FaCode className='text-5xl mb-2 text-custom-accent ' />
          <h4 className='text-2xl mb-4'>Development</h4>
          <p className='leading-relaxed'>
            I am very passionate about web development, I love solving logical
            problems and writing clean code that can be utilized across
            applications. I also love working in a team to come up with new
            ideas or features that will benefit a user.
          </p>
        </div>
      </article>

      <article class=''>
        <div class='flex flex-col justify-center items-center p-4'>
          <FaPaintBrush className='text-5xl mb-2 text-custom-accent ' />
          <h4 className='text-2xl mb-4'>Design</h4>
          <p className='leading-relaxed'>
            Design is more than the way a site looks but how it comes alive when
            the user interacts with it. I am very passionate about web design, I
            love creating and perfecting design elements that have meaningful
            interaction and flow while also maintaining a users interest.
          </p>
        </div>
      </article>

      <article class=''>
        <div class='flex flex-col justify-center items-center p-4'>
          <FaUserCheck className='text-5xl mb-2 text-custom-accent' />
          <h4 className='text-2xl mb-4'>User Experience</h4>
          <p className='leading-relaxed'>
            I find that user experience can trump all, you can have the most
            functional site, but if it is clunky, and convoluted you've done a
            lot of great programming that is never used. I strive to have simple
            but effective functionality that benefits the user instead of
            prohibiting them.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Passion;
