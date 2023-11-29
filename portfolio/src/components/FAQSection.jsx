import React, { useState } from 'react';
import PropTypes from 'prop-types';


const FAQSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-section ${isOpen ? 'open' : ''}`} onClick={toggleAnswer}>
      <h2 className="section-title">{title}</h2>
      {isOpen && <div className="answers">{children}</div>}
    </div>
  );
};

FAQSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FAQSection;
