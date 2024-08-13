import React from 'react';

const ExampleCarouselImage = ({ text, src }) => {
  const imageStyle = {
    width: '100%',
    height: '500px', // Adjust height as needed
    objectFit: 'cover', // Ensures image covers the entire area
    borderRadius: '10px', // Optional: adds rounded corners
  };

  return (
    <div>
      <img src={src} alt={text} style={imageStyle} />
    </div>
  );
};

export default ExampleCarouselImage;
