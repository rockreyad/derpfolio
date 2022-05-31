import React from "react";

const Testimonial = () => {
  return (
    <div className="">
      <h2 className="text-white font-bold text-2xl">Testimonials</h2>
      <div className="flex mt-8 bg-blue-700 bg-opacity-10 border rounded">
        <div className=" text-white p-4 ">
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
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/281176564_1953386378185567_3582469980466774951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEeRbLqeI_MpQ5C_d8CLIE6JQpmcvoj0M0lCmZy-iPQzWTVda2Oao84mWtpe6vKdr2i2xAZNvFbcciZckhQbWQE&_nc_ohc=cT7t7P4lFs4AX9L33HY&_nc_ht=scontent.fdac110-1.fna&oh=00_AT8Uklhap1hzFQDEuL4YJQEeyJuIuSAaAKxQS93FScXYlw&oe=629BA3F9"
              alt=""
              className="border border-white border-4 w-12 h-12"
            />
            <div className="flex flex-col ml-3">
              <h2 className="">Abid Siam</h2>
              <span className="text-sm text-gray-400">Fiverr</span>
            </div>
          </div>
        </div>

        <div className="flex bg-sky-400 bg-opacity-10 p-4 items-center">
          <ol className="space-y-2">
            <li>
              <i class="fa-solid fa-circle-chevron-right text-white cursor-pointer"></i>
            </li>
            <li>
              <i class="fa-solid fa-circle-chevron-left text-white cursor-pointer"></i>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
