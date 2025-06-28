import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Popescu",
      role: "Art Collector, Bucharest",
      content: "Dr. Grigorescu's work speaks to the soul. The mixed-media techniques create such depth and emotion. I'm proud to have three of her pieces in my collection.",
      rating: 5
    },
    {
      name: "Prof. Alexandru Ionescu",
      role: "Art Critic, University of Arts Bucharest",
      content: "Consuela's artistic vision bridges traditional Romanian art with contemporary expression. Her work represents the evolution of modern Romanian painting.",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      role: "International Collector, London",
      content: "The shipping was professional and the artwork arrived in perfect condition. The piece exceeded my expectations - the textures are incredible in person.",
      rating: 5
    },
    {
      name: "Dr. Mihai Radu",
      role: "Gallery Director, Timișoara",
      content: "Working with Dr. Grigorescu has been a privilege. Her dedication to both art and education makes her a true asset to our cultural community.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from collectors, critics, and art enthusiasts who have experienced Dr. Grigorescu's work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-amber-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;