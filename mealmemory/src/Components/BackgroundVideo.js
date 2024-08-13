// src/components/BackgroundVideo.js
import React from "react";
import "../Styles/BackgroundVideo.css";
import "../Styles/Nav.css";

const BackgroundVideo = ({ children }) => {
  return (
    <div>
      <div
        className="background-video-container"
        style={{ position: "absolute", zIndex: -1 }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: "100%", height: "100%" }}
        >
          <source src="/Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content">
          {children}{" "}
          {/* Render any child components or content on top of the video */}
        </div>
      </div>
      <div className="content" style={{ marginTop: "60px" }}>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mx-auto my-6 lg:my-12">
          <div className="order-2 lg:order-1 lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:items-start">
            <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-center lg:text-left mb-4 text-Black">
              Precision Diet Tracking for Better Health
            </h1>
            <h4 className="text-lg lg:text-xl text-center lg:text-left text-grey-200">
              Leverage advanced technology and dietitian expertise <br />
              to achieve your health goals with detailed food tracking,
              <br /> personalized Ayurvedic diet plans, and engaging features
              that keep you motivated and healthy.
            </h4>
          </div>
          <div className="order-1 lg:order-2 lg:flex-1 lg:flex lg:justify-end">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lpOWvtJoRKj60F399onte9uzNmU4ikwm6w&s"
              alt="Diet Tracking"
              className="max-w-[270px] lg:max-w-[300px] opacity-0 animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
