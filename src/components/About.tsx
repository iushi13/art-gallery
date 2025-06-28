import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              About the Artist
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Dr. Consuela Grigorescu is a distinguished visual artist, illustrator, and professor 
                with over 20 years of experience in the field of fine arts. As a dedicated educator 
                at Liceul Teoretic "W. Shakespeare" in Timișoara, she has devoted her career to both 
                artistic creation and nurturing the next generation of artists.
              </p>
              <p>
                Her work has been showcased in countless exhibitions across Romania, reflecting a 
                deep passion for mixed-media techniques and expressive storytelling through art. 
                Each piece demonstrates her mastery of blending traditional painting methods with 
                contemporary influences, creating works that resonate with emotion and movement.
              </p>
              <p>
                Holding a PhD in Arts, Dr. Grigorescu continues to explore the boundaries of painting, 
                constantly pushing the limits of artistic expression. Her artworks are characterized 
                by rich textures, dynamic compositions, and a profound understanding of color theory 
                that brings each canvas to life.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600">PhD in Arts</p>
                <p className="text-gray-600">20+ years experience</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Teaching</h3>
                <p className="text-gray-600">Liceul Teoretic "W. Shakespeare"</p>
                <p className="text-gray-600">Timișoara, Romania</p>
              </div>
            </div>
            
            {/* Artist Statement */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Artist Statement</h3>
              <p className="text-gray-600 italic">
                "My art is a dialogue between tradition and innovation, where each brushstroke carries 
                the weight of emotion and the lightness of possibility. Through mixed media, I explore 
                the stories that connect us all—time, music, movement, and the cosmic rhythms that 
                guide our existence."
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/1654195769695.webp"
              alt="Dr. Consuela Grigorescu"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;