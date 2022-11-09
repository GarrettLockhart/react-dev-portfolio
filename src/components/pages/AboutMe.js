import React from 'react';
import avatar from '../../assets/img/avatar.JPEG';
import '../../index.css';

const AboutMe = () => {
  return (
    <div className="text-center leading-relaxed mb-32 bg-custom-white">
      <section className="h-screen flex flex-col justify-center items-center text-custom-white showcase-background">
        <h2 className="text-custom-white text-5xl">
          &#60;Hi, I'm Garrett&#62;
        </h2>
        <p className="text-custom-gray text-xl mb-60">
          Full Stack Web Developer
        </p>
      </section>

      <div className="container mx-auto flex flex-col items-center mt-10">
        <section className="text-4xl text-center" id="about">
          <h3>About Me</h3>
        </section>

        <div className="flex flex-col items-center mt-10 text-xl">
          <img
            src={avatar}
            alt="Self Portrait"
            className="rounded-full border-4 mb-10 max-w-sm"
          />
          <p className="mb-10 lg:w-1/2">
            It's me, <strong>Garrett Lockhart</strong> and i'm a very dedicated
            full stack web developer, I love coding and everything that comes
            along with it, I'm learning the <strong>MERN</strong> stack and bit
            more which you can see below. I am currently enrolled in the
            University of Utah's coding bootcamp. I've lived in utah my whole
            life and have also found success in being a 
            <a
              className="about-me-link"
              href="https://garrettlockhart.github.io/photography-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              professional landscape photographer.
            </a>
          </p>
          <div className='bg-custom-gray p-2 lg:w-2/6'>
            <section className="text-2xl">
              <h4>TL;DR</h4>
            </section>
            <section className="text-lg flex flex-row justify-center items-center text-center">
              <div className="p-2">
                <p>
                  I'm a born creator, I love making and building new things.
                </p>
              </div>
              <div className="p-2">
                <p>
                  I'm very persistent and will go any length to finish what I've
                  started.
                </p>
              </div>
              <div className="p-2">
                <p>I'm addicted to coffee, but somehow still always tired.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
