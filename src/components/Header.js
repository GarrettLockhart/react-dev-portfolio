import React, { useState } from 'react';
import logo from './img/logorec.png';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PagesContainer() {
  const [currentPage, setCurrentPage] = useState('About me');

  const [menuStage, setMenu] = useState('Close');

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

  const handleMenu = (stage) => setMenu(stage);

  return (
    <div className="overflow-hidden">
      <div className="bg-custom-black h-auto">
        <nav class="flex justify-between items-center px-4 p-3 xsm:mx-10 lg:mx-20">
          <div>
            <a href="/index">
              <img src={logo} alt="Personal logo" className="w-20" />
            </a>
          </div>
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            menuStage={handleMenu}
          />
        </nav>
      </div>
      {renderPage()}
    </div>
  );
}
