
import React from 'react';
import PromptingIsAllYouNeed from '../ui/animated-hero-section';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <PromptingIsAllYouNeed />
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 animate-fade-in-down" style={{textShadow: '0 0 15px rgba(0,0,0,0.7)'}}>
          未来創研
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto" style={{textShadow: '0 0 10px rgba(0,0,0,0.7)'}}>
          AIとインタラクションの未来を創造する
        </p>
      </div>
      <div className="absolute bottom-10 z-10 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
