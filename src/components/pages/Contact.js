import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-start items-center">
      <div className="text-4xl my-10 font-bold">
        <h2>Lets Chat!</h2>
      </div>
      <div className="text-center text-xl transition-all duration-300">
        <h3>
          Email:{' '}
          <a href="mailto:lockhartphotography1@gmail.com" className='hover:text-custom-accent'>
            lockhartphotography1@gmail.com
          </a>{' '}
        </h3>
        <h3>Phone: 801-792-9580</h3>
        <h3>
          Github:{' '}
          <a
            href="https://github.com/GarrettLockhart"
            className="hover:text-custom-accent text-custom-dark-gray"
          >
            Take me to Github
          </a>
        </h3>
        <h3>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/garrett-lockhart/"
            className="hover:text-custom-accent text-custom-dark-gray"
          >
            Take me to LinkedIn
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
