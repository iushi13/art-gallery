import React, { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkDetail from './ArtworkDetail';

interface Artwork {
  id: number;
  title: string;
  description: string;
  price: number;
  dimensions: string;
  medium: string;
  year: number;
  image: string;
  available: boolean;
  detailedDescription?: string;
  technique?: string;
  inspiration?: string;
}

const Gallery: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'sold'>('all');

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Ceasul (The Clock)",
      description: "Captures the relentless passage of time, blending texture, color, and abstraction in a striking mixed-media composition.",
      detailedDescription: "\"Ceasul\" (The Clock) captures the relentless passage of time, blending texture, color, and abstraction in a striking mixed-media composition. Layers of paint, collage elements, and intricate details evoke a sense of movement and transformation, where past and present coexist. The interplay of warm and cool tones suggests both nostalgia and urgency, inviting the viewer to reflect on the fleeting nature of moments. Through dynamic contrasts and expressive forms, this artwork transcends the concept of a mere timepiece, becoming a meditation on memory, change, and the rhythm of life.",
      inspiration: "This piece was inspired by the concept of time as both a linear progression and a cyclical experience. The artist explores how memories layer upon each other, creating a palimpsest of human experience.",
      technique: "Mixed media with collage elements",
      price: 200,
      dimensions: "Mixed dimensions",
      medium: "Mixed media on canvas",
      year: 2024,
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      available: true
    },
    {
      id: 2,
      title: "Chitara (The Guitar)",
      description: "A musical interpretation through visual art, where the essence of melody and rhythm is captured through dynamic brushstrokes.",
      detailedDescription: "\"Chitara\" (The Guitar) transforms the auditory experience of music into a visual symphony. The artist uses bold, sweeping brushstrokes to represent the vibrations of guitar strings, while warm earth tones evoke the wooden body of the instrument. The composition flows with the rhythm of an unheard melody, creating a synesthetic experience where viewers can almost hear the music through the visual elements.",
      inspiration: "Inspired by the artist's love for music and the way sound can be translated into visual form. The piece captures the emotional resonance of a guitar's voice.",
      technique: "Expressive brushwork with layered textures",
      price: 250,
      dimensions: "Mixed dimensions",
      medium: "Mixed media on canvas",
      year: 2024,
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      available: true
    },
    {
      id: 3,
      title: "Pian si joc (Piano and Dance)",
      description: "An expressive piece that combines the elegance of piano music with the fluidity of dance.",
      detailedDescription: "\"Pian si joc\" (Piano and Dance) celebrates the harmonious relationship between music and movement. The composition features flowing lines that suggest both the keys of a piano and the graceful movements of a dancer. The interplay of light and shadow creates a sense of rhythm and tempo, while the color palette moves from deep, resonant blues to bright, joyful yellows, mirroring the emotional journey of a musical performance.",
      inspiration: "Created during a period when the artist was deeply moved by watching dancers perform to live piano music, capturing that magical moment when sound becomes movement.",
      technique: "Fluid brushwork with dynamic color transitions",
      price: 150,
      dimensions: "Mixed dimensions",
      medium: "Mixed media on canvas",
      year: 2024,
      image: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      available: true
    },
    {
      id: 4,
      title: "Timpul astrologic (Astrological Time)",
      description: "A mystical exploration of cosmic time and celestial influences.",
      detailedDescription: "\"Timpul astrologic\" (Astrological Time) delves into the ancient belief that celestial bodies influence human destiny. The artwork features swirling cosmic patterns interwoven with astrological symbols, creating a map of time that transcends the earthly clock. Deep purples and midnight blues dominate the palette, punctuated by golden highlights that represent stars and planetary alignments. The composition suggests both the vastness of the universe and the intimate connection between cosmic cycles and human experience.",
      inspiration: "Fascinated by the way ancient cultures understood time through astronomical observations, the artist explores how we are all connected to the greater cosmic rhythm.",
      technique: "Layered symbolism with cosmic color palette",
      price: 300,
      dimensions: "Mixed dimensions",
      medium: "Mixed media on canvas",
      year: 2024,
      image: "https://images.pexels.com/photos/1179532/pexels-photo-1179532.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      available: true
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    if (filter === 'available') return artwork.available;
    if (filter === 'sold') return !artwork.available;
    return true;
  });

  const handleInquire = (artwork: Artwork) => {
    // Create a pre-filled contact form or email
    const subject = encodeURIComponent(`Inquiry about "${artwork.title}"`);
    const body = encodeURIComponent(
      `Hello Dr. Grigorescu,\n\nI am interested in purchasing the artwork "${artwork.title}" (CHF ${artwork.price}).\n\nPlease provide more information about:\n- Payment options\n- Shipping details\n- Certificate of authenticity\n\nThank you for your time.\n\nBest regards`
    );
    
    // Open email client
    window.location.href = `mailto:consuela.grigorescu@art.com?subject=${subject}&body=${body}`;
  };

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Art Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each painting in this collection represents a unique exploration of mixed-media techniques and expressive storytelling. 
            All works are original pieces, professionally created and ready for international shipping.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all' ? 'bg-amber-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Works
            </button>
            <button 
              onClick={() => setFilter('available')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'available' ? 'bg-amber-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Available
            </button>
            <button 
              onClick={() => setFilter('sold')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'sold' ? 'bg-amber-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sold
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map(artwork => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              onInquire={handleInquire}
              onClick={handleArtworkClick}
            />
          ))}
        </div>

        {selectedArtwork && (
          <ArtworkDetail
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
            onOrder={handleInquire}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;