import React from 'react';
import '../Styles/Pitta.css';

const Pitta = () => {
  return (
    <div class="container-fluid">
    <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <div className="pitta-container">
      <h1 className="pitta-heading">Tips for balancing Pitta</h1>
      
      <div className="pitta-content">
        
        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/5713/images/cMopEcakSSewzARh3bND_pitta_dosha-01.png" alt="pitta" className="pitta-image"/>
      </div>
      
      <p className='pitta-text'>
        Try the following practices to balance your pitta.
      </p>
      <ul className="text-black list-disc">
        <li>Avoid the hot sun of midday.</li>
        <li>Take a walk barefoot at dawn in the dewy grass.</li>
        <li>If your skin is reacting to the heat, apply a thin layer of coconut oil followed by a lukewarm shower.</li>
        <li>To cool the skin and eyes, keep a bottle of rosewater around you and spritz your face and skin regularly.</li>
        <li>If you’re experiencing acid indigestion, nausea, or loose stools, practice a pitta-pacifying diet.</li></ul>
    </div>
    </div>
  );
};

export default Pitta;  