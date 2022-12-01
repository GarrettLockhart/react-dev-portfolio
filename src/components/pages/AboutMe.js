import React from 'react';
import avatar from '../../img/avatar.JPEG';
import Showcase from '../Showcase/Showcase';
import Passion from '../Passion/Passion';

const AboutMe = () => {
  return (
    <>
      <Showcase />
      <div className='container mx-auto w-[90vw] h-auto mb-10'>
        <section className='flex justify-center items-center text-3xl h-20'>
          <h3 className='uppercase'>About Me</h3>
        </section>

        <div className='flex flex-col justify-center items-center'>
          <p className='md:w-1/2 text-center mb-10'>
            It's me, <strong>Garrett Lockhart</strong> and i'm a very dedicated
            full stack web developer, I love coding and everything that comes
            along with it, I'm learning the <strong>MERN</strong> stack and bit
            more which you can see below. I am currently enrolled in the
            University of Utah's coding bootcamp. I've lived in utah my whole
            life and have also found success in being a&nbsp;
            <a
              className='text-custom-accent'
              href='https://garrettlockhart.github.io/photography-portfolio/'
              target='_blank'
              rel='noreferrer'
            >
              professional landscape photographer.
            </a>
          </p>
          <div className='flex flex-col justify-center items-center bg-custom-gray lg:w-1/3 p-4 rounded-lg'>
            <section className='flex justify-center items-center text-2xl mb-2'>
              <h4>TL;DR</h4>
            </section>
            <section className='flex flex-col lg:flex-row w-full text-center'>
              <div className='m-2 lg:mx-2'>
                <p>
                  I'm a born creator, I love making and building new things.
                </p>
              </div>
              <div className='m-2 lg:mx-2'>
                <p>
                  I'm very persistent and will go any length to finish what I've
                  started.
                </p>
              </div>
              <div className='m-2 lg:mx-2'>
                <p>I'm addicted to coffee, but somehow still always tired.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Passion />
    </>
  );
};

export default AboutMe;
