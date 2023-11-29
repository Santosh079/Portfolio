
import React from 'react';
import Layout from './layout/Layout';
import Artwork from './GallaryPage/Artwork';
import ArtworkContainer from './GallaryPage/ArtworkContainer';

const Gallery = () => {
  return (
    <Layout>
       <h1 className="cc" style={{
      color: 'wheat',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '30px',
    }}>
      MY ART PORTFOLIO
    </h1>
      <div className="hr-container">
        <hr className="styled-hr" />
      </div>
      <div id="gallery">
        {Artwork.map((artwork, index) => (
          <ArtworkContainer key={index} imageUrl={artwork.imageUrl} />
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
