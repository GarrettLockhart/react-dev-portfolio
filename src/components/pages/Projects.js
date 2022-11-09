import React, { Component } from 'react';
import projectCards from '../../projectCards.json';

class Projects extends Component {
  render() {
    return (
      <div className='grid grid-cols-1'>
        <h2 className='flex justify-center items-center text-4xl my-10'>Projects</h2>
        {projectCards.map((card, index) => {
          return (
            <article className="flex flex-col bg-custom-gray m-4 my-6 rounded-lg p-4 shadow-lg" key={index}>
              <div className="flex flex-col h-80" id="card-two">
                <img
                  className="card-img"
                  id="card-img-two"
                  src={card.image}
                  alt="Demo screenshot"
                />
                <div className="card-header">
                  <h3 className="card-title">{card.title}</h3>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="btn-container">
                  <a
                    href={card.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card btn-demo"
                  >
                    Live Demo
                  </a>
                  <a
                    href={card.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card btn-repo"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Projects;
