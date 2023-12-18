
import React from 'react';
import Layout from './layout/Layout';
import Artwork from './GallaryPage/Artwork';
import ArtworkContainer from './GallaryPage/ArtworkContainer';
import { Helmet } from 'react-helmet';

const Gallery = () => {
  return (
    <>
    <Helmet>
        <title>Gallery - Santosh Subedi's Creative Designs and Visual Expressions</title>
        <meta
          name="description"
          content="Explore Santosh Subedi's Gallery, a showcase of captivating graphic designs and visual creations. Immerse yourself in a world where creativity knows no limits. Each design is meticulously crafted to tell a unique story, conveying messages through a blend of artistry and innovation. Witness the power of imagination in every pixel."
        />
        <meta
          name="keyword"
          content="Graphic Design Gallery, Visual Creations, Creative Designs, Artistic Expression, Santosh Subedi Portfolio, Innovative Graphics, Captivating Visuals, Design Showcase, Imagination in Design, Pixel Perfection.
        "
        />
      </Helmet>
    <Layout>
       <h1 className="cc" style={{
      color: 'wheat',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '30px',
    }}>
      MY ART PORTFOLIO
    </h1>
      
      <div id="gallery">
        {Artwork.map((artwork, index) => (
          <ArtworkContainer key={index} imageUrl={artwork.imageUrl} />
        ))}
      </div>
    </Layout>
    </>
  );
};

export default Gallery;
