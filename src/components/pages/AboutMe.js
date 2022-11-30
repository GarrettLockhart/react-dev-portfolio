import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar.JPEG';
import Showcase from '../Showcase/Showcase';

const AboutMe = () => {
  return (
    <>
      <Showcase />
      <div className="container mx-auto w-[90vw] h-[80vh]">
        <section className="flex justify-center items-center text-3xl h-20">
          <h3 className="uppercase">About Me</h3>
        </section>

        <div className="flex flex-col justify-center items-center">
          <img src={avatar} alt="Self Portrait" className="w-48 rounded-full border-black border-solid border-[3px]" />
          <p>
            It's me, <strong>Garrett Lockhart</strong> and i'm a very dedicated
            full stack web developer, I love coding and everything that comes
            along with it, I'm learning the <strong>MERN</strong> stack and bit
            more which you can see below. I am currently enrolled in the
            University of Utah's coding bootcamp. I've lived in utah my whole
            life and have also found success in being a&nbsp;
            <Link
              className="text-custom-accent"
              to="https://garrettlockhart.github.io/photography-portfolio/"
              target="_blank"
            >
              professional landscape photographer.
            </Link>
          </p>
          <section className="">
            <h4>TL;DR</h4>
          </section>
          <section className="">
            <div className="">
              <p>I'm a born creator, I love making and building new things.</p>
            </div>
            <div className="">
              <p>
                I'm very persistent and will go any length to finish what I've
                started.
              </p>
            </div>
            <div className="">
              <p>I'm addicted to coffee, but somehow still always tired.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
