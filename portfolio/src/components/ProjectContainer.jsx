import React, { useRef, useState, useEffect } from 'react';
import Project from './Project';
import girl from '../assets/girl.jpg';
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

const projects = {
  frontend: [
    {
      title: 'E-commerce website',
      description: 'E-commerce website, fetches product details from API',
      technologies: 'React, CSS, JavaScript',
      imageUrl: 'https://repository-images.githubusercontent.com/289382429/e9c6ec80-8902-11eb-9f55-5de819da8bf5',
      projectLink: 'https://github.com/Santosh079/daraz-clone',
    },
    {
      title: 'Basic Social Media',
      description: 'Provides uploading and displaying posts.',
      technologies: 'React, CSS, JavaScript',
      imageUrl: girl,
      projectLink: 'https://example.com/frontend-project1',
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio made to show project',
      technologies: 'React, CSS, JavaScript',
      imageUrl: girl,
      projectLink: 'https://github.com/Santosh079/Portfolio',
    },
    {
      title: 'Nepali Clock',
      description: 'Nepali Clock that displays time every second',
      technologies: 'React, CSS, JavaScript',
      imageUrl: girl,
      projectLink: 'https://example.com/frontend-project2',
    },
  ],
};

const ProjectContainer = () => {
  const projectContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const container = projectContainerRef.current;

    const handleScroll = () => {
      setIsAtStart(container.scrollLeft === 0);
      setIsAtEnd(container.scrollLeft + container.clientWidth === container.scrollWidth);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollLeft -= 300; // Adjust the scroll amount
    }
  };

  const scrollRight = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollLeft += 300; // Adjust the scroll amount
    }
  };

  return (
    
    <div className="project-container">
      <h1>Web Projects</h1>
      <hr />
      {/* Navigation buttons */}
      <button className="nav-button left-button" onClick={scrollLeft} disabled={isAtStart}>
      <FaCaretSquareLeft />
      </button>
      <div className="project-cards" ref={projectContainerRef}>
        {projects.frontend.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
     
      <button className="nav-button right-button" onClick={scrollRight} disabled={isAtEnd}>
      <FaCaretSquareRight />
      </button>
    </div>
  );
};

export default ProjectContainer;
