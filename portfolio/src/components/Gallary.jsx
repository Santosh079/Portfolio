import React from 'react';
import Layout from './layout/Layout';

const Gallery = () => {
  return (
    <Layout>
      <h1>MY ART PORTFOLIO</h1>
      <div className="hr-container">
        <hr className="styled-hr" />
      </div>
      <div id="gallery">
        <div className="artwork">
          <img
            src="jdishu0283_create_an_abstract_art_of_a_bike_racing_in_dirt_sand_030b0fdf-0146-4f6a-80bf-107d08c447b8.png"
            alt="Abstract art for wall wall art, designed in Nepal Artwork 15"
            id="15"
          />
          <div className="likes">
            <button className="like-btn">Like</button>
            <span className="like-count">0</span>
          </div>
        </div>
 
      </div>
    
    </Layout>
  );
};

export default Gallery;
