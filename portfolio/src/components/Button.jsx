import React from 'react';

const Button = (props) => {
  return (
    <div className="button-container">
      <button><a href=".">{props.name}</a></button>
    </div>
  )
}

export default Button;
