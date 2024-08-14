 import React from 'react';
import '../Styles/Pitta.css';

const Pitta = () => {
  return (
    <div className="pitta-container">
      <h1 className="pitta-heading">Tips for balancing Pitta</h1>
      
      <div className="pitta-content">
        
        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/5713/images/cMopEcakSSewzARh3bND_pitta_dosha-01.png" alt="pitta" className="pitta-image"/>
      </div>
      
      <p className='pitta-text'>
        Try the following practices to balance your pitta.
      </p>
      <ul className="pitta-text">
        <li>Avoid the hot sun of midday.</li>
        <li>Take a walk barefoot at dawn in the dewy grass.</li>
        <li>If your skin is reacting to the heat, apply a thin layer of coconut oil followed by a lukewarm shower.</li>
        <li>To cool the skin and eyes, keep a bottle of rosewater around you and spritz your face and skin regularly.</li>
        <li>If you’re experiencing acid indigestion, nausea, or loose stools, practice a pitta-pacifying diet.  Favor the flavors of sweet, bitter, and astringent. Foods like fresh green vegetables, basmati rice, coconut water, sweet apples, ripe bananas, watermelon, cucumbers, and cilantro are all terrific for cooling the hot belly.</li>
        <li>Avoid pungent, salty, and sour. Avoid overly salty, oily, fried, and spicy foods, including onions, garlic, processed, and canned foods. Avoid all alcohol and coffee; especially if your skin is irritated.</li>
      </ul>
    </div>
  );
};

export default Pitta;