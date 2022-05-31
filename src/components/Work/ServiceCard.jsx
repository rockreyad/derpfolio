import classnames from "classnames";
import React from "react";

const ServiceCard = ({ bgColor, textColor, title, description }) => {
  return (
    <div className="relative">
      <div
        className={classnames(
          `absolute w-full h-full -right-2 -bottom-2 rounded-xl`,
          bgColor
        )}
      ></div>

      <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
        <div className={classnames(`h-2 w-20`, bgColor)}></div>

        <div className="text-xl font-extrabold text-white">{title}</div>

        <p className="leading-snug text-gray-400">{description}</p>

        <a
          href="/"
          className={classnames(`font-bold tracking-wide flex`, textColor)}
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
