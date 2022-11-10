import React, { Component } from 'react';
import projectCards from './projectCards.json';

class Projects extends Component {
  render() {
    return (
      <div className="">
        <h2 className="flex justify-center items-center text-4xl my-10 font-bold">
          Projects
        </h2>
        <div className=' container mx-auto grid grid-cols-1 grid-rows-1 lg:grid-cols-2'>
          {projectCards.map((card, index) => {
            return (
              <article
                className="flex flex-col bg-custom-gray m-4 my-6 rounded-lg p-4 shadow-lg"
                key={index}
              >
                <div className="flex flex-col" id="card-two">
                  <img
                    className="card-img mb-10"
                    id="card-img-two"
                    src={card.image}
                    alt="Demo screenshot"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="card-header">
                    <h3 className="flex justify-center items-start text-2xl mb-5">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex justify-center items-center">
                    <a
                      href={card.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 m-2 bg-custom-accent rounded-md"
                    >
                      Live Demo
                    </a>
                    <a
                      href={card.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 m-2 bg-custom-accent rounded-md"
                    >
                      View Repo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
