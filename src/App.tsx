import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Exhibitions from './components/Exhibitions';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Shipping from './components/Shipping';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Exhibitions />
      <Testimonials />
      <FAQ />
      <Shipping />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;