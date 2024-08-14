import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Ayurveda.css';

const Ayurveda = () => {
  const navigate = useNavigate();

  const handleImageClick = (dosha) => {
    navigate(`/${dosha}`);
  };

  return (
    <div className="dosha-selector">
      <h2>Select your dosha</h2>
      <div className="image-grid">
        <div className="image-item" onClick={() => handleImageClick('Vata')}>
          <img src="/Images/Vata.jpg" alt="Vata" />
          <span>Vata</span>
        </div>
        <div className="image-item" onClick={() => handleImageClick('Pitta')}>
          <img src="/Images/Pitta.jpg" alt="Pitta" />
          <span>Pitta</span>
        </div>
        <div className="image-item" onClick={() => handleImageClick('Kapha')}>
          <img src="/Images/Kapha.jpg" alt="Kapha" />
          <span>Kapha</span>
        </div>
      </div>
    </div>
  );
};

export default Ayurveda;