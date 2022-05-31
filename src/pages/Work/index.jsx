import React from "react";
import ProjectCard from "../../components/Work/ProjectCard";

const Work = () => {
  return (
    <div>
      <h2 className="text-2xl text-white font-bold">Recent Works</h2>

      {/* Works Navbar */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Work;
