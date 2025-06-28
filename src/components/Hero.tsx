import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          Dr. Consuela Grigorescu
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
          Visual artist, illustrator, and professor with over 20 years of experience in fine arts
        </p>
        <button 
          onClick={() => scrollToSection('gallery')}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Explore Collection
        </button>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;