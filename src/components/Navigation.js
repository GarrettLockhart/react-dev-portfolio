import React, { useState } from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
  const [isActive, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className={isActive ? "space-x-8 flex flex-col lg:flex text-custom-white" : "hidden space-x-8 lg:flex text-custom-white"}>
        <a
          className={
            currentPage === 'About me'
              ? 'text-custom-accent hover:text-custom-accent transition-all duration-300'
              : 'hover:text-custom-accent transition-all duration-300'
          }
          href="#about-me"
          onClick={() => handlePageChange('About me')}
        >
          ABOUT ME
        </a>
        <a
          className={
            currentPage === 'Projects'
              ? 'text-custom-accent hover:text-custom-accent transition-all duration-300'
              : 'hover:text-custom-accent transition-all duration-300'
          }
          href="#projects"
          onClick={() => handlePageChange('Projects')}
        >
          PROJECTS
        </a>
        <a
          className={
            currentPage === 'Contact'
              ? 'text-custom-accent hover:text-custom-accent transition-all duration-300'
              : 'hover:text-custom-accent transition-all duration-300'
          }
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        >
          CONTACT
        </a>
        <a
          className={
            currentPage === 'Resume'
              ? 'text-custom-accent hover:text-custom-accent transition-all duration-300'
              : 'hover:text-custom-accent transition-all duration-300'
          }
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        >
          RESUME
        </a>
      </div>
      <div className='flex lg:hidden mr-2' onClick={handleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
