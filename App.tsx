
import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeatureSection from './components/sections/FeatureSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <FeatureSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
