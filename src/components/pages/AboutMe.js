import React from 'react';
import fernImage from '../../assets/img/bg-image-fern.jpg';

const AboutMe = () => {
  return (
    <div className="h-screen bg-custom-white">
      <section className="h-3/4" style={{backgroundImage: `url(${fernImage})]`}}>
        <h2 className="showcase-title">&#60;Hi, I'm Garrett&#62;</h2>
        <p className="showcase-desciption">Full Stack Web Developer</p>
        <a className="arrow-down" href="#about">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </section>

      <div className="container">
        <section className="about-me-header" id="about">
          <h3>About Me</h3>
        </section>

        <div className="about-me-main">
          <img
            src="./images/selfavatar-9472.jpg"
            alt="Self Portrait"
            className="avatar"
          />
          <p>
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
          <section className="tldr-header">
            <h4>TL;DR</h4>
          </section>
          <section className="tldr">
            <div className="tldr-content">
              <p>I'm a born creator, I love making and building new things.</p>
            </div>
            <div className="tldr-content">
              <p>
                I'm very persistent and will go any length to finish what I've
                started.
              </p>
            </div>
            <div className="tldr-content">
              <p>I'm addicted to coffee, but somehow still always tired.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
