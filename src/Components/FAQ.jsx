import React from 'react';
import faqImage from '../assets/faq.jpg';

const FaqSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2">
          <div className="lg:pr-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">FAQ</h2>
            <p className="text-lg text-gray-700 mb-8">Frequently asked questions</p>
            <div className="space-y-6">
              <Question title="How can I track my order?">
                Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number to monitor the status of your delivery on our website or the courier's website.
              </Question>
              <Question title="What is your return policy?">
                We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you can return it within 30 days of delivery for a full refund or exchange. Please note that certain items may be subject to additional return restrictions.
              </Question>
              <Question title="How long does shipping take?">
                Shipping times vary based on the destination but typically range from 3 to 10 business days. You can find more detailed information about shipping times during checkout.
              </Question>
              <Question title="What payment methods do you accept?">
                We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, and sometimes alternative methods like Apple Pay or Google Pay.
              </Question>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={faqImage} alt="FAQ" className="max-w-full h-auto lg:max-h-full" />
        </div>
      </div>
    </div>
  );
};

const Question = ({ title, children }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer group-hover:text-primary">
          <span className="text-lg font-medium">{title}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-gray-700">{children}</p>
      </details>
    </div>
  );
};

export default FaqSection;
