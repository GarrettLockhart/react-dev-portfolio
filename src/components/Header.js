import React, { useState } from 'react';
import logo from '../img/logorec.png';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PagesContainer() {
  const [currentPage, setCurrentPage] = useState('About me');

  const renderPage = () => {
    if (currentPage === 'About me') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="bg-custom-black">
        <nav class="flex justify-between items-center px-4 py-8 xsm:mx-10 lg:mx-20">
          <div>
            <img src={logo} alt="Personal logo" className="w-20" />
          </div>
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </nav>
      </div>
      {renderPage()}
    </div>
  );
}
