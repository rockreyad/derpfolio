import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between text-white font-bold text-4xl p-2 items-center">
        <h1 className="font-sans font-semibold xl:text-semibold lg:text-bold  sm:text-bold ">
          DerpFolio<span className="text-rose-600">.</span>
        </h1>
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
