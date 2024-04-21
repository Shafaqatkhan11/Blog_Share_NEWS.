import React from 'react';
import Typewriter from 'typewriter-effect';
 

function Typew() {
  return (
    <Typewriter

      options={{
        strings: ["Welcome to my portfolio! Explore my journey as a React developer.",
        "Experience creativity and innovation through my React projects.",
        "Discover the power of React and JavaScript in crafting modern web applications.",
        "Let my passion for coding and React technologies elevate your projects.",
        "Embark on a journey of discovery through my React-powered creations.",
        "Unleash the potential of React.js with my expertise and dedication.",
        "Transform your vision into reality with my React development skills.",
        "Experience the magic of React as I bring ideas to life with code.",
        "Elevate your projects with React expertise that goes beyond the ordinary.",
        "Join me on a journey of exploration and innovation in the world of React development.",],
        autoStart: true,
        loop: true,
        typingSpeed:99,
        delay:0.7,
        deleteSpeed:99
        
         
      }}

    />
  );
}

export default Typew;