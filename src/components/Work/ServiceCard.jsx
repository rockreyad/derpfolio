import React from "react";

const ServiceCard = ({ color, title, description }) => {
  return (
    <div className="relative">
      <div
        className={`absolute bg-${color}-400 w-full h-full -right-2 -bottom-2 rounded-xl`}
      ></div>

      <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
        <div className={`h-2 w-20 bg-${color}-400`}></div>

        <div className="text-xl font-extrabold text-white">{title}</div>

        <p className="leading-snug text-gray-400">{description}</p>

        <a
          href="#"
          className={`block text-${color}-400 font-bold tracking-wide flex`}
        >
          more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
