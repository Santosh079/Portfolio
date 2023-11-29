import React from 'react';

const ArtworkContainer = ({ imageUrl }) => {
  return (
    <div className="artwork">
      <img src={imageUrl} alt="Artwork" />
      <div className="likes">
        <button className="like-btn">Like</button>
        <span className="like-count">0</span>
      </div>
    </div>
  );
};

export default ArtworkContainer;
