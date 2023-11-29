import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';


const Project = ({ title, description, technologies, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">{technologies}</p>

        <Button href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link" name="View Project" />
         
      </div>
    </div>
  );
}

export default Project;
