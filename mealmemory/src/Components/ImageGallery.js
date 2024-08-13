import React, { useRef, useState } from "react";
import "../Styles/ImageGallery.css"; // Ensure CSS is imported here
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

// src/components/ImageGallery.js

const ImageGallery = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const images = [
    {
      src: "/Images/img1.jpg",
      title: "Image 1",
      description: "Analyzes the number of calories in food to manage energy intake. It helps in diet planning by balancing calorie consumption with expenditure, supporting weight management and overall health.",
    },
    {
      src: "/Images/img2.jpg",
      title: "Image 2",
      description: "Diet recommendations based on macronutrient levels tailor nutrient intake to individual needs, balancing proteins, fats, and carbohydrates to optimize energy, support muscle growth, and maintain overall health for personalized dietary goals.",
    },
  ];

  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const [activeImage, setActiveImage] = useState(null);

  const handleMouseMove = (e, x, y) => {
    if (!x || !y) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseEnter = (index) => {
    setActiveImage(index);
  };

  const handleMouseLeave = () => {
    setActiveImage(null);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => {
        const isImageActive = activeImage === index;

        return (
          <div key={index} className="gallery-item">
            <div
              onMouseMove={(e) => handleMouseMove(e, x, y)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`relative h-96 w-72 rounded-xl bg-gradient-to-br ${
                isImageActive ? "from-indigo-300 to-violet-300" : ""
              }`}
            >
              <motion.div
                ref={ref}
                style={{
                  transformStyle: "preserve-3d",
                  transform: isImageActive ? transform : "none",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
              >
                <p
                  style={{
                    transform: "translateZ(50px)",
                  }}
                  className="text-center text-2xl font-bold"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="gallery-image"
                  />
                </p>
              </motion.div>
              {isImageActive && (
                <div
                  className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"
                  style={{
                    pointerEvents: "none",
                  }}
                >
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                    <p className="text-lg">{image.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;