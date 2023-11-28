import React from 'react';
import Project from './Project';
import girl from '../assets/girl.jpg'; 

const projects = {
  frontend: [
    {
      title: 'E-commerce website',
      description: 'E-commerce website that fetch product details from Api',
      technologies: 'React, CSS, JavaScript',
      imageUrl: 'https://repository-images.githubusercontent.com/289382429/e9c6ec80-8902-11eb-9f55-5de819da8bf5',
      projectLink: 'https://github.com/Santosh079/daraz-clone',
    },
    {
        title: 'Basic Social Media',
        description: 'Basic Social media project that provide uploding and displaying posts.',
        technologies: 'React, CSS, JavaScript',
        imageUrl: 'https://via.placeholder.com/300',
        projectLink: 'https://example.com/frontend-project1',
      },
      {
        title: 'Nepali Clock',
        description: 'Nepali Clock that display time every second',
        technologies: 'React, CSS, JavaScript',
        imageUrl: 'https://via.placeholder.com/300',
        projectLink: 'https://example.com/frontend-project1',
      },
   
  ],
};

const ProjectContainer = () => {
  return (
    <div className="project-container">
        <h1>Projects</h1>
        <hr />
      {Object.keys(projects).map((category, index) => (
        <div key={index} className="category-container">
          <h2 className="category-title">{category}</h2>
          <div className="project-cards">
            {projects[category].map((project, projectIndex) => (
              <Project key={projectIndex} {...project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectContainer;
