// src/components/Modal.js
import React, { useState } from 'react';

const Modal = ({ image, onClose }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>X</span>
        <img src={image.src} alt={image.title} className="modal-image" />
        <h2 className="modal-title">{image.title}</h2>
        <p 
          className={`modal-description ${isDescriptionVisible ? 'description-visible' : ''}`} 
          onClick={toggleDescription}
        >
          {image.description}
        </p>
      </div>
    </div>
  );
};

export default Modal;
