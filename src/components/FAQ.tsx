import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are the artworks original pieces?",
      answer: "Yes, all artworks are original mixed-media pieces created by Dr. Consuela Grigorescu. Each piece comes with a certificate of authenticity."
    },
    {
      question: "Do you offer custom commissions?",
      answer: "Yes, Dr. Grigorescu accepts custom commission requests. Please contact us with your specific requirements, preferred size, and timeline. Commission prices vary based on complexity and size."
    },
    {
      question: "How are the artworks packaged for shipping?",
      answer: "All artworks are professionally packaged with protective materials, custom padding, and moisture protection. Larger pieces may be shipped in custom wooden crates for maximum security."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept international bank transfers, PayPal, and major credit cards (Visa, Mastercard, American Express). Payment plans are available for larger purchases."
    },
    {
      question: "How long does international shipping take?",
      answer: "Shipping times vary by destination: 5-10 business days for express shipping within Europe, 10-21 business days for standard international delivery worldwide."
    },
    {
      question: "Can I see the artwork before purchasing?",
      answer: "While we provide detailed high-resolution images, we understand the importance of seeing art in person. For serious inquiries, we can arrange video calls to show the artwork in detail."
    },
    {
      question: "Do you provide framing services?",
      answer: "Currently, artworks are sold unframed to ensure safe shipping and allow you to choose framing that matches your space. We can recommend professional framers in major cities."
    },
    {
      question: "What is your return policy?",
      answer: "We want you to be completely satisfied with your purchase. If the artwork doesn't meet your expectations, we offer a 14-day return policy (buyer covers return shipping costs)."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about purchasing and commissioning artwork.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;