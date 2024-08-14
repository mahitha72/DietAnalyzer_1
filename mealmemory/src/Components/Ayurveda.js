import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Ayurveda.css';

const Ayurveda = () => {
  const navigate = useNavigate();

  const handleImageClick = (dosha) => {
    navigate(`/${dosha}`);
  };

  return (
    <div className='background'>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
    <div className="dosha-selector ">
      <h2 className='text-3xl text-white'>Select your dosha</h2>
      <div className="image-grid">
        <div className="image-item" onClick={() => handleImageClick('Vata')}>
          <img src="/Images/Vata.jpg" alt="Vata" />
          <span className='text-xl text-white'>Vata</span>
        </div>
        <div className="image-item" onClick={() => handleImageClick('Pitta')}>
          <img src="/Images/Pitta.jpg" alt="Pitta" />
          <span className='text-xl text-white'>Pitta</span>
        </div>
        <div className="image-item" onClick={() => handleImageClick('Kapha')}>
          <img src="/Images/Kapha.jpg" alt="Kapha" />
          <span className='text-xl text-white'>Kapha</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ayurveda;