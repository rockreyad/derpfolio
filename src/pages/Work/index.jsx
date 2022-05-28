import React from "react";
import ProjectCard from "../../components/Work/ProjectCard";

const Work = () => {
  return (
    <div>
      <h2 className="text-2xl text-white font-bold">Recent Works</h2>

      {/* Works Navbar */}

      <div className="flex col-span-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Work;
