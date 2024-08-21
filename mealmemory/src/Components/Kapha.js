import React from 'react';
import '../Styles/Kapha.css';

const Kapha = () => {
  return (
    <div class="container-fluid">
    <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <div className="kapha-container">
      <h1 className="kapha-heading">Tips for balancing Kapha</h1>
      <div className="kapha-content">
        <img src="https://www.totalayurveda.in/wp-content/uploads/2023/11/Kapha-Dosha.jpeg" alt="kapha" className="kapha-image"/>
      </div>
      
      <p className='kapha-text'>
        Try the following practices to balance your kapha.
      </p>
      <ul className="text-black list-disc">
<li>Prefer warm, freshly cooked meals instead of cold or raw foods.</li>
<li>choose light and high-energy foods that are less dense and light. </li>  
<li>Black and green teas can be beneficial because of their lightness.</li>
<li>Use spices that provide warmth and spice to counteract the cold and heavy nature of kapha. </li>
<li>fruits with a rough texture, such as oranges and bananas, should be avoided.</li>
<li>Salt should be used sparingly as it can aggravate kapha.</li>
  </ul>
      </div>
    </div>
  );
};

export default Kapha;  