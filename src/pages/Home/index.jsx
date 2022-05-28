import React from "react";
import Header from "../../components/Header";
import About from "../About";
import Service from "../Service";
import Experience from "../Experience";
import Work from "../Work";

const Home = () => {
  return (
    <div className="bg-gray-900 p-4">
      {/* Header */}

      <Header />
      {/* Home Content */}

      <div className="flex flex-col space-y-5 pt-20">
        <h1 className="font-bold text-white text-4xl">
          I'm <span className="text-rose-600">Reyad</span> Hasan
        </h1>
        <h3 className="text-white text-2xl mt-4">
          Freelance Web/App Developer
        </h3>

        <div className="flex flex-col space-y-3 w-fit">
          <div className="flex space-x-3">
            <a href="http://">
              <div className="border border-pink-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-gray-200">
                <i className="fa-brands fa-facebook-f text-pink-600"></i>
              </div>
            </a>
            <a href="http://">
              <div className="border border-orange-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-gray-200">
                <i className="fa-brands fa-instagram text-orange-600"></i>
              </div>
            </a>
            <a href="http://">
              <div className="border border-sky-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-gray-200">
                <i className="fa-brands fa-twitter text-sky-600"></i>
              </div>
            </a>
            <a href="http://">
              <div className="border border-blue-600 rounded-lg justify-center items-center px-4 py-3 hover:bg-gray-200">
                <i className="fa-brands fa-linkedin-in text-blue-600"></i>
              </div>
            </a>
          </div>
          <button
            type="button"
            className="bg-rose-600 rounded-md px-2 py-2 text-white font-semibold text-xl uppercase hover:bg-rose-500"
          >
            Hire Me
          </button>
        </div>
      </div>
      {/* About Me */}

      <div className="mt-32">
        <About />
      </div>

      {/* Services */}

      <Service />
      {/* Experience */}
      <Experience />
      {/* Recent Works */}
      <Work />
      {/* Testimonial */}

      {/* Contact */}
    </div>
  );
};

export default Home;
