import React, { useState } from 'react';
import faqVideo from '../assets/faq.mp4';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by visiting the "Track Order" section on our website and entering your order number.',
    },
    {
      question: 'What are the shipping options available?',
      answer: 'We offer standard shipping and express shipping options. Standard shipping takes 5-7 business days, while express shipping delivers within 2-3 business days.',
    },
    {
      question: 'Can I return a product if I am not satisfied?',
      answer: 'Yes, we have a 30-day return policy. Please ensure the product is unused and in its original packaging for a full refund.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping charges may vary based on the destination.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team via email at support@example.com or call us at +123456789.',
    },
    // Add more FAQs as needed
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full h-screen">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={faqVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 p-8 h-screen text-white bg-black bg-opacity-0">
        <h1 className="text-4xl font-bold mb-4">FAQs</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full flex justify-between items-center py-2 text-xl font-semibold focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <svg className={`w-6 h-6 transition-transform transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
