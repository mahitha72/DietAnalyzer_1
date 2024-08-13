import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex-container">
        <div className="section">
          <dl>
            <dd><b>Top Diet Tips</b></dd>
            <br/><br/>
            <dd>Healthy Eating Guidelines</dd>
            <dd>Calorie Counting Tips</dd>
            <dd>Meal Prep Ideas</dd>
            <dd>Portion Control</dd>
            <dd>Hydration Tips</dd>
            <dd>Snack Ideas</dd>
          </dl>
        </div>
        <div className="section">
          <dl>
            <dd><b>Nutrition References</b></dd>
            <br/><br/>
            <dd>Macronutrient Guide</dd>
            <dd>Vitamin & Mineral Info</dd>
            <dd>Food Pyramid</dd>
            <dd>Label Reading</dd>
            <dd>Allergen Information</dd>
            <dd>Supplement Facts</dd>
          </dl>
        </div>
        <div className="section">
          <dl>
            <dd><b>Top Resources</b></dd>
            <br/><br/>
            <dd>Healthy Recipes</dd>
            <dd>Diet Plans</dd>
            <dd>Exercise Programs</dd>
            <dd>Wellness Blogs</dd>
            <dd>Health Calculators</dd>
            <dd>Meal Tracking Apps</dd>
          </dl>
        </div>
        <div className="section">
          <dl>
            <dd><b>Get Certified</b></dd>
            <br/><br/>
            <dd>Nutrition Certificate</dd>
            <dd>Fitness Certificate</dd>
            <dd>Wellness Coaching</dd>
            <dd>Dietitian License</dd>
            <dd>Personal Trainer Cert</dd>
            <dd>Health Coach</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Footer;
