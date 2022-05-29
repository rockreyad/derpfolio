import React from "react";

const Testimonial = () => {
  return (
    <div className="">
      <h2 className="text-white font-bold text-2xl">Testimonials</h2>
      <div className="mt-8">
        <div className="border text-white p-4 rounded">
          <h2 className="flex justify-center items-center text-gray-400 pb-3">
            Customer's Stories
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            dolorum expedita dolore distinctio quaerat recusandae ad maiores
            illo, a provident!
          </p>

          <div className="flex mt-4">
            <img
              src="http://demo.afracode.com/miro/assets/images/clients/item-4.jpg"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col ml-3">
              <h2 className="">Abid Siam</h2>
              <span className="text-sm text-gray-400">Fiverr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
