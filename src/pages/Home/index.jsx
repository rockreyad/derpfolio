import React from "react";
import Header from "../../components/Header";
import About from "../About";
import Service from "../Service";
import Experience from "../Experience";
import Testimonial from "../Testimonial";
import Contact from "../Contact";
import Work from "../Work";

const Home = () => {
  return (
    <div className="bg-gray-900 container mx-auto px-2 xl:px-16 lg:px-8 md:px-6 sm:px-2">
      {/* Header */}
      <Header />
      {/* Home Content */}

      <div className="space-y-10">
        <div className="">
          <div className="flex flex-col space-y-5 py-60">
            <h1 className="font-bold text-white text-4xl xl:text-8xl lg:text-8xl md:text-3xl sm:text-2xl">
              I'm <span className="text-rose-600">Reyad</span> Hasan
            </h1>
            <h3 className="text-white text-2xl mt-4">
              Freelance Web/App Developer
            </h3>

            <div className="flex flex-col space-y-3 w-fit">
              <div className="flex space-x-3">
                <a href="http://">
                  <div className="transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out border border-pink-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-pink-700 hover:bg-opacity-40">
                    <i className="fa-brands fa-facebook-f text-pink-600"></i>
                  </div>
                </a>
                <a href="http://">
                  <div className="transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out border border-orange-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-orange-700 hover:bg-opacity-40">
                    <i className="fa-brands fa-instagram text-orange-600"></i>
                  </div>
                </a>
                <a href="http://">
                  <div className="transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out border border-sky-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-sky-700 hover:bg-opacity-40">
                    <i className="fa-brands fa-twitter text-sky-600"></i>
                  </div>
                </a>
                <a href="http://">
                  <div className="transform hover:skew-x-12 hover:skew-y-12 transition duration-500 ease-in-out border border-blue-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-blue-700 hover:bg-opacity-40">
                    <i className="fa-brands fa-linkedin-in text-blue-600"></i>
                  </div>
                </a>
              </div>
              <button
                type="button"
                className="animate-pulse inline-block bg-rose-600 rounded-md px-2 py-2 text-white font-semibold text-xl uppercase hover:bg-rose-500"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
        {/* About Me */}

        <About />
        {/* Services */}
        <Service />
        {/* Experience */}
        <Experience />
        {/* Recent Works */}
        <Work />
        {/* Testimonial */}
        <Testimonial />
        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
