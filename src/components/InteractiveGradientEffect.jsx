import React, { useState, useEffect } from "react";

const InteractiveGradientEffect = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: -50, y: -50 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative" style={{ overflow: "hidden" }}>
      {/* Gradient circle */}
      <div
        className="gradient-circle"
        style={{
          top: mousePosition.y,
          left: mousePosition.x,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      ></div>

      {/* Content */}
      <div className=" p-8 text-white">
        {children}
      </div>
    </div>
  );
};

export default InteractiveGradientEffect;
