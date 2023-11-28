import React from 'react';


const Project = ({ title, description, technologies, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">{technologies}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
