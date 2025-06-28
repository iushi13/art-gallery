import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artwork: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      artwork: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in acquiring a piece or have questions about my work? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">consuela.grigorescu@art.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Timișoara, Romania</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Payment Methods Accepted:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• International bank transfers (wire transfers)</li>
                <li>• PayPal for secure online payments</li>
                <li>• Credit cards (Visa, Mastercard, American Express)</li>
                <li>• Custom payment plans available for larger purchases</li>
              </ul>
            </div>

            <div className="mt-6 p-6 bg-amber-50 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-3">Purchase Process:</h4>
              <ol className="space-y-2 text-amber-800">
                <li>1. Submit inquiry form or contact directly</li>
                <li>2. Receive detailed artwork information and payment options</li>
                <li>3. Secure payment and shipping arrangement</li>
                <li>4. Professional packaging and insured shipping</li>
                <li>5. Receive your artwork with certificate of authenticity</li>
              </ol>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="artwork" className="block text-sm font-medium text-gray-700 mb-1">
                  Artwork of Interest
                </label>
                <select
                  id="artwork"
                  name="artwork"
                  value={formData.artwork}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select an artwork</option>
                  <option value="Ceasul">Ceasul (The Clock) - CHF 200</option>
                  <option value="Chitara">Chitara (The Guitar) - CHF 250</option>
                  <option value="Pian si joc">Pian si joc (Piano and Dance) - CHF 150</option>
                  <option value="Timpul astrologic">Timpul astrologic (Astrological Time) - CHF 300</option>
                  <option value="Custom Commission">Custom Commission</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please let me know about your interest in the artwork, any questions about custom commissions, shipping, payment options, or anything else I can help you with..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;