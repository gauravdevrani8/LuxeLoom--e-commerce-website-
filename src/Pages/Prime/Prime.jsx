import React from 'react';

const subscriptionPlans = [
  {
    title: 'LuxeLoom Prime',
    price: '$9.99',
    description: 'Unlock exclusive benefits with LuxeLoom Prime subscription.',
    features: [
      'Free shipping on all orders',
      'Early access to sales and promotions',
      'Exclusive member-only discounts'
    ],
    buttonText: 'Subscribe Now',
    buttonBgColor: 'bg-green-800'
  },
  {
    title: 'LuxeLoom Plus',
    price: '$19.99',
    description: 'Enhanced benefits with LuxeLoom Plus subscription.',
    features: [
      'Free 2-day shipping on all orders',
      'Exclusive early access to new collections',
      'Exclusive member-only events'
    ],
    buttonText: 'Subscribe Now',
    buttonBgColor: 'bg-green-800'
  },
  {
    title: 'LuxeLoom Premium',
    price: '$29.99',
    description: 'Premium benefits with LuxeLoom Premium subscription.',
    features: [
      'Free same-day delivery on all orders',
      'Early access to all promotions and sales',
      'VIP access to exclusive events and launches',
      'Dedicated premium customer support'
    ],
    buttonText: 'Subscribe Now',
    buttonBgColor: 'bg-green-800'
  }
];

const GetPrime = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Subscription Plans</h1>
      <div className="max-w-screen-xl w-full p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {subscriptionPlans.map((plan, index) => (
          <div 
            key={index} 
            className="bg-white  shadow-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h2>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-semibold text-gray-800">{plan.price}</span>
                <span className="text-sm text-gray-500 ml-2">/ month</span>
              </div>
              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414L9 14.414l-3.707-3.707a1 1 0 0 1 1.414-1.414L9 11.586l6.293-6.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`text-white text-sm py-3 rounded-b-md hover:bg-green-900 transition duration-300 ${plan.buttonBgColor}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetPrime;
