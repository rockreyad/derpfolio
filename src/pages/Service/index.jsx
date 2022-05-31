import React from "react";
import ServiceCard from "../../components/Work/ServiceCard";

const Service = () => {
  return (
    <div className="text-white">
      <h6 className="text-2xl font-bold">Services</h6>

      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-5 pb-5 mt-8">
        <ServiceCard
          bgColor="bg-yellow-400"
          textColor="text-yellow-400"
          title={"Web Development"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <ServiceCard
          bgColor="bg-indigo-400"
          textColor="text-indigo-400"
          title={"App Development"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <ServiceCard
          bgColor="bg-rose-400"
          textColor="text-rose-400"
          title={"UI/UX design"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
      </div>
      <p className="">
        Looking for a custom job?
        <a href="/" className="text-rose-500 hover:text-rose-300">
          Click here
        </a>{" "}
        to contact me! 👋
      </p>
    </div>
  );
};

export default Service;
