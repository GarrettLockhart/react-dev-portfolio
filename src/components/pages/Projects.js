import React, { Component } from 'react';
import projectCards from '../../assets/Projectcards/projectCards.json';

class Projects extends Component {
  render() {
    return (
      <div>
        {projectCards.map((card, index) => {
          return (
            <article className="card">
              <div className="image-container" id="card-two">
                <img
                  className="card-img"
                  id="card-img-two"
                  src={card.image}
                  alt="Demo screenshot of weather app"
                />
                <div className="card-header">
                  <h3 className="card-title">{card.title}</h3>
                </div>
              </div>
              <div className="card-content">
                <div className="btn-container">
                  <a
                    href="https://garrettlockhart.github.io/weather-app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card btn-demo"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/GarrettLockhart/weather-app"
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
