// src/components/ImageGallery.js
import React, { useState } from 'react';
import Modal from './Modal';
import '../Styles/ImageGallery.css'; // Ensure CSS is imported here

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/Images/img1.jpg', title: 'Image 1', description: 'Description for Image 1' },
    { src: '/Images/img2.jpg', title: 'Image 2', description: 'Description for Image 2' },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
          <img 
            src={image.src} 
            alt={image.title} 
            className="gallery-image"
          />
        </div>
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleClose} />
      )}
    </div>
  );
};

export default ImageGallery;
