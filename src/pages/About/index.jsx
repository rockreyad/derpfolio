import React from "react";
import AboutNav from "../../components/Header/Navbar/AboutNav";

const About = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold">About Me</h2>

      {/* Nav Bar About */}

      <div className="mt-8">
        <AboutNav color={"blue"} />
      </div>
    </div>
  );
};

export default About;
