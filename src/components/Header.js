import React from 'react';
import logo from '../img/logorec.png';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="container mx-auto bg-black">
      <div className="container flex flex-col justify-center items-center m-4 md:flex-row md:justify-between">
        <a href="/">
          <img
            src={logo}
            alt="Personal Logo"
            className="flex justify-center w-20 m-4"
          />
        </a>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
