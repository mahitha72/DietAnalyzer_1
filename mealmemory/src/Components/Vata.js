import React from 'react';
import '../Styles/Vata.css';


const Vata = () => {
  return (
    <div class="container-fluid">
    <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <div className="vata-container">
  <h1 className="vata-heading">Tips for balancing Vata</h1>
  
  <div class="text-content clearfix field field--name-field-resource-body field--type-text-long field--label-hidden field__items">
    <img src="https://i0.wp.com/tanviherbals.com/wp-content/uploads/2024/03/Vata-Dosha.jpg?fit=1024%2C576&ssl=1" alt="vata" className="vata-image"/>
  </div>
  
  <p className='vata-text'>
    Try the following practices to balance your vata.
  </p>
  <ul className="text-black list-disc">
<li>Avoid dry, raw, and undercooked foods.</li>
<li>Maintain eight hours of restful sleep.</li>  
<li>Do self-massage daily with warm sesame oil, paying extra attention to the feet.</li>
<li>Eat meals at the same time daily. </li>
<li>Make lunch your biggest meal and dinner your smallest.</li>
<li>Take time daily for reflection and stillness</li>
  </ul>
</div>
</div>
  );
};

export default Vata;    