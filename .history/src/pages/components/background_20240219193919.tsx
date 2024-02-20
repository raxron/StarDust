import React from 'react';

const Background: React.FC = () => {
  return (
    <div className=" z-0 absolute inset-0 pointer-events-none overflow-hidden">
      {/* Create as many stars as needed */}
      <div className="star" style={{ top: '50%', left: '25%', animationDelay: '0.4s' }} />
      <div className="star" style={{ top: '25%', left: '75%', animationDelay: '0.6s' }} />
      {/* Add more stars as needed */}
    </div>
  );
};

export default Background;