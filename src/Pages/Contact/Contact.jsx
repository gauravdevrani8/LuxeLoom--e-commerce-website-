import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-10 py-8">
      <h1 className="text-4xl  font-semi-bold font-caveat text-center mb-20">Contact <span className='text-green-300'>Us</span></h1>
      
      <div className="flex   border p-5 flex-wrap flex-row justify-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className='text-2xl font-light'>Find Us</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48754.84572723515!2d77.2783412200196!3d28.38922394802513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd6da804ecb7%3A0xb3a7aa46c0507068!2sOld%20Faridabad%20metro%20station!5e0!3m2!1sen!2sin!4v1712900483395!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <form
            className="bg-white px-8 pt-6 pb-8 mb-4"
            action="https://formspree.io/f/mwkgwwrv"
            method="POST"
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-semi-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                placeholder="Enter your name"
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semi-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                autoComplete="off"
                placeholder="Enter your email address"
                className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-semi-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                placeholder="Enter your message"
                className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="border-2 hover:bg-gray-900 hover:duration-700 hover:text-white border-gray-400 text-black font-semi-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
