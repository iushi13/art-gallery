import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Exhibitions: React.FC = () => {
  const exhibitions = [
    {
      year: "2024",
      title: "Contemporary Voices",
      location: "Galeria de Artă Timișoara",
      type: "Group Exhibition"
    },
    {
      year: "2023",
      title: "Mixed Media Explorations",
      location: "Casa de Cultură Timișoara",
      type: "Solo Exhibition"
    },
    {
      year: "2023",
      title: "Romanian Artists Today",
      location: "Muzeul de Artă Timișoara",
      type: "Group Exhibition"
    },
    {
      year: "2022",
      title: "Textures of Time",
      location: "Centrul Cultural German",
      type: "Solo Exhibition"
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "Excellence in Mixed Media",
      organization: "Romanian Artists Association"
    },
    {
      year: "2022",
      title: "Outstanding Educator in Arts",
      organization: "Ministry of Education, Romania"
    },
    {
      year: "2021",
      title: "Innovation in Contemporary Art",
      organization: "Timișoara Cultural Foundation"
    }
  ];

  return (
    <section id="exhibitions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Exhibitions & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of recent exhibitions and awards recognizing Dr. Grigorescu's contributions to contemporary art.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recent Exhibitions */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-amber-600 mr-2" />
              Recent Exhibitions
            </h3>
            <div className="space-y-6">
              {exhibitions.map((exhibition, index) => (
                <div key={index} className="border-l-4 border-amber-600 pl-6 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{exhibition.title}</h4>
                    <span className="text-sm text-amber-600 font-medium">{exhibition.year}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exhibition.location}</span>
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {exhibition.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-amber-600 mr-2" />
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{award.title}</h4>
                    <span className="text-sm text-amber-600 font-medium">{award.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                </div>
              ))}
            </div>

            {/* Teaching Recognition */}
            <div className="mt-8 p-6 bg-amber-50 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-3">Teaching Excellence</h4>
              <p className="text-amber-800 text-sm">
                Recognized for outstanding contributions to art education and mentoring young artists 
                at Liceul Teoretic "W. Shakespeare" in Timișoara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;