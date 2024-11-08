import React from "react";

const WigglyBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
    {/* Layer 1 - Slow wiggle */}
    <div className="absolute inset-0 bg-purple-800 opacity-70 animate-wiggle-slow"></div>

    {/* Layer 2 - Medium wiggle */}
    <div className="absolute inset-0 bg-purple-600 opacity-90 animate-wiggle-medium"></div>

    {/* Layer 3 - Fast wiggle */}
    <div className="absolute inset-0 bg-indigo-500 opacity-50 animate-wiggle-fast"></div>
  </div>
  );
};

export default WigglyBackground;
