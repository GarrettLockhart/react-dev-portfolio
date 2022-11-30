import React from 'react';

const Passion = () => {
  return (
    <section>
      <section class="skills-section-title">
        <h3>Skills</h3>
      </section>
      <article class="skills-section-content">
        <div class="skills-list-container">
          <div class="skills-title">
            <h5>Languages</h5>
            <ul class="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div class="skills-title">
            <h5>Frameworks</h5>
            <ul class="skills-list">
              <li>React</li>
              <li>Express.js</li>
              <li>Bootstrap</li>
              <li>Tailwindcss</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div class="skills-title">
            <h5>Tools</h5>
            <ul class="skills-list">
              <li>Git</li>
              <li>MongoDB</li>
              <li>Vscode</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Passion;
