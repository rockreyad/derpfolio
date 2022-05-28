import React from "react";

const Service = () => {
  return (
    <div className="text-white">
      <h6 className="text-2xl font-bold">Services</h6>

      <div className="flex grid-flow-row col-span-3 space-x-4 justify-center items-center my-7">
        <div className="flex flex-col justify-center w-30 h-30 bg-indigo-500 rounded-md p-3 shadow-md items-center">
          <i class="fa-solid fa-code"></i>
          <h2 className="font-bold text-lg">Web Development</h2>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nostrum ea corrupti.
          </p>
        </div>
        <div className="flex flex-col justify-center w-30 h-30 bg-amber-500 rounded-md p-3 shadow-md items-center">
          <i class="fa-brands fa-android"></i>
          <h2 className="text-black font-bold text-lg">App Development</h2>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nostrum ea corrupti.
          </p>
        </div>
        <div className="flex flex-col justify-center w-30 h-30 bg-rose-500 rounded-md p-3 shadow-md items-center">
          <i className="fa-brands fa-uikit"></i>
          <h2 className="font-bold text-lg">UI/UX design</h2>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nostrum ea corrupti.
          </p>
        </div>
      </div>
      <p className="">
        Looking for a custom job?
        <a href="#" className="text-rose-500">
          Click here
        </a>{" "}
        to contact me! 👋
      </p>
    </div>
  );
};

export default Service;
