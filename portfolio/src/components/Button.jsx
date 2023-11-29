// Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <div className="button-container">
      <button>
      <Link to={props.href}>{props.name}</Link>
      </button>
    </div>
  )
}

export default Button;
