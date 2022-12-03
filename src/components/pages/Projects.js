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
            <div key={index} className='grid lg:grid-cols-2 grid-cols-1 mb-40'>
              <div>
                <img
                  src={project.image}
                  alt='Project Demo Screenshot'
                  className='contain'
                />
              </div>
              <div className='flex flex-col justify-center items-center text-l px-10'>
                <div className='flex flex-col justify-start'>
                  <h3 className='mb-4 text-5xl'>{project.title}</h3>
                  <p className='mb-4'>{project.built}</p>
                  <p className='mb-4'>{project.description}</p>
                </div>
                <div>
                  <button>Live Site</button>
                  <button>Repo</button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Projects;
