import React from 'react';
import { BiCloudDownload } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const handleButton = () => {
    fetch('../../resume/GarrettLockhartresume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'GarrettLockhartresume.pdf';
        alink.click();
      });
    });
  };
  return (
    <>
      <section className='bg-white  h-auto'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 className=' flex flex-col mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900'>
            Let's Chat!
          </h2>
          <button
            onClick={handleButton}
            className='flex flex-row justify-center items-center w-full mb-8 lg:mb-16 text-center text-dark-300 hover:text-dark-500  sm:text-xl transition-all ease-in-out duration-200'
          >
            Click to download my resume
            <BiCloudDownload className='ml-2 text-2xl' />
          </button>
          <form className='space-y-8'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 '
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Your message
              </label>
              <textarea
                id='message'
                rows='6'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              ></textarea>
            </div>
            <button
              type='submit'
              className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-custom-accent transition-all ease-in-out duration-200 hover:bg-custom-accent-light'
            >
              Send message
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center text-5xl text-custom-accent transition-all ease-in-out duration-200 hover:test-custom-accent-light pb-52'>
          <BsGithub className='mx-4 cursor-pointer' />
          <BsLinkedin className='mx-4 cursor-pointer' />
        </div>
      </section>
    </>
  );
};

export default Contact;
