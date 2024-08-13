import React, { useState, useRef } from "react";
import Modal from "./Modal";
import "../Styles/ImageGallery.css"; // Ensure CSS is imported here
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

// src/components/ImageGallery.js

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
      description: "Description for Image 1",
    },
    {
      src: "/Images/img2.jpg",
      title: "Image 2",
      description: "Description for Image 2",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

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

  const handleMouseLeave = (x, y) => {
    if (!x || !y) return;

    x.set(0);
    y.set(0);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="gallery-item"
            onMouseEnter={() => handleImageClick(image)}
          >
            <motion.div
              ref={ref}
              onMouseMove={(e) => handleMouseMove(e, x, y)}
              onMouseLeave={() => handleMouseLeave(x, y)}
              style={{
                transformStyle: "preserve-3d",
                transform,
              }}
              className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
            >
              <div
                style={{
                  transform: "translateZ(75px)",
                  transformStyle: "preserve-3d",
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
              </div>
            </motion.div>
          </div>
        );
      })}
      {selectedImage && <Modal image={selectedImage} onClose={handleClose} />}
    </div>
  );
};

export default ImageGallery;
