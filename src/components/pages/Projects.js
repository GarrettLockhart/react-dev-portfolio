import React from 'react';
import projects from '../projectData.json';

const Projects = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center text-3xl h-20 mb-5'>
        <h2 className='uppercase'>Projects</h2>
      </div>
      <main className='w-[90vw]'>
        {projects.map((project, index) => {
          return (
            <div className='mb-40'>
              <div
                key={index}
                className='grid lg:grid-cols-2 grid-cols-1 mb-10'
              >
                <div className='mb-10 lg:mb-0'>
                  <img
                    src={project.image}
                    alt='Project Demo Screenshot'
                    className='contain'
                  />
                </div>
                <div className='flex flex-col justify-center items-center text-l px-10'>
                  <div className='flex flex-col justify-start'>
                    <h3 className='mb-4 text-4xl lg:text-left text-center'>
                      {project.title}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: project.built }}
                      className='mb-4'
                    ></p>
                    <p className='mb-4'>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center w-full mt-5'>
                <button className='mx-4 bg-custom-accent w-36 py-2 rounded-lg text-white antialiased font-bold transition-all ease-in-out duration-200 hover:bg-custom-accent-light'>
                  <a href={project.liveLink} target='_blank' rel='noreferrer'>
                    Live Site
                  </a>
                </button>
                <button className='mx-4 bg-custom-accent w-36 py-2 rounded-lg text-white antialiased font-bold transition-all ease-in-out duration-200 hover:bg-custom-accent-light'>
                  <a href={project.repo} target='_blank' rel='noreferrer'>
                    Repo
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Projects;
