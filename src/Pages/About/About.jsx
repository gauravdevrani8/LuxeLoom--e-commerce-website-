import React from "react";
import { FiTarget } from "react-icons/fi";
import { GiCrystalBars } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import FaqSection from "../../Components/FAQ";
import aboutImage from "../../assets/about.jpg"; // Adjust the path as per your actual asset location
import teamImage from "../../assets/team.jpg"; // Adjust the path as per your actual asset location

const About = () => {
  return (
    <>
      <section className="text-gray-700 body-font font-lora">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-rowdies  sm:text-4xl text-4xl mb-4  text-gray-900">
              Welcome to <span className="text-green-500">Luxe Loom</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Luxe Loom redefines the online shopping experience for luxury home decor and furnishings.
            </p>
            <p className="mb-8 leading-relaxed text-lg">
              At Luxe Loom, we understand that our clientele seeks more than just products; they seek an experience, a lifestyle. That's why every item on our site is handpicked for its exceptional quality, exquisite design, and unparalleled craftsmanship. From luxurious fashion pieces to artisanal home decor, we offer a carefully curated selection that epitomizes elegance and refinement.
            </p>
            <p className="mb-8 leading-relaxed text-lg">
              Our website epitomizes sophistication, blending cutting-edge technologies and design principles to offer you a seamless and gratifying browsing and purchasing journey.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-800 border-0 py-3 px-7 focus:outline-none hover:bg-green-600 rounded-none text-lg">
                Explore Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="About Luxe Loom"
              src={aboutImage}
            />
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
              Discover Our Values
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              At Luxe Loom, we transcend mere transactions; we build relationships. Here's what sets us apart:
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <FiTarget className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-gray-900 text-lg title-font font-medium ml-4">
                    Our Mission
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    We are committed to delivering high-quality products and exceptional customer service to our valued customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <GiCrystalBars className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-gray-900 text-lg title-font font-medium ml-4">
                    Our Vision
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    We aim to be your trusted online destination for all your shopping needs, offering an extensive range of products and exceptional service.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <AiOutlineTeam className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-gray-900 text-lg title-font font-medium ml-4">
                    Our Values
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Integrity, quality, and customer satisfaction are the cornerstones of Luxe Loom's ethos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
              Meet Our Team
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Our dedicated team of professionals is here to provide you with the best shopping experience possible.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="object-cover object-center rounded-lg shadow-lg"
              alt="Luxe Loom Team"
              src={teamImage}
            />
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
              Our Journey
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Take a look at the key milestones that have shaped Luxe Loom's journey.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="text-green-500 font-bold text-2xl">2020</div>
                  <h2 className="text-gray-900 text-lg title-font font-medium ml-4">
                    Founded
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Luxe Loom was founded with the mission to bring luxury home decor to discerning customers worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="text-green-500 font-bold text-2xl">2021</div>
                  <h2 className="text-gray-900 text-lg title-font font-medium ml-4">
                    Expansion
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    We expanded our product line to include a wider range of home decor items and luxury furnishings.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="text-green-500 font-bold text-2xl">2023</div>
                  <h2 className="text-gray-900 text-lg title-font font-medium ml-4">
                    Technological Upgrade
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Implemented cutting-edge technologies to enhance user experience and streamline our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqSection />
      </section>
    </>
  );
};

export default About;
