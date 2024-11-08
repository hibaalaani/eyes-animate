// components/AnimatedBackground.js
import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      {/* Background Layers with Animations */}
      <div className="absolute top-0 left-0 w-full h-full bg-purple-700 opacity-20 transform translate-y-0 animate-wiggle-fast"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-purple-800 opacity-10 transform -translate-y-1 animate-wiggle-medium"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-5 transform translate-y-1 animate-wiggle-slow"></div>
    </>
  );
};

export default AnimatedBackground;
