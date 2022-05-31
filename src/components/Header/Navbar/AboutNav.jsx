import React from "react";
import SkillStat from "../../Skill/SkillStat";

const AboutNav = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex list-none flex-wrap flex-row" role="tablist">
            <li className="">
              <a
                className={
                  "px-8 py-2 border-b-white cursor-pointer   text-md font-bold shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-500 border-b-4"
                    : "text-" + color + "-500 hover:border-b-4")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                className={
                  "px-8 py-2 border-b-white cursor-pointer   text-md font-bold shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-500 border-b-4"
                    : "text-" + color + "-500 hover:border-b-4")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Skill
              </a>
            </li>
            <li className="">
              <a
                className={
                  "px-8 py-2 border-b-white cursor-pointer   text-md font-bold shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-500 border-b-4"
                    : "text-" + color + "-500 hover:border-b-4")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Social Media
              </a>
            </li>
            <li className="">
              <a
                className={
                  "px-8 py-2 border-b-white cursor-pointer   text-md font-bold shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-500 border-b-4"
                    : "text-" + color + "-500 hover:border-b-4")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Award
              </a>
            </li>
          </ul>
          <div className="text-gray-700 bg-indigo-700 h-0.5 mt-2" />
          <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <img
                    src="http://follio-react.wpocean.com/static/media/about.c07f3d2b.png"
                    alt=""
                  />
                  <h3 className="text-2xl font-semibold">
                    I create products not just art
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    My name is Reyad. I am a web designer and developer.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 pb-5 mt-8 place-items-center gap-x-20 gap-y-10 ">
                    <SkillStat
                      name={"Commutation Skill"}
                      percentage={"75"}
                      textColor="text-rose-500"
                      barColor={"bg-rose-500"}
                      bar="w-4/6"
                    />
                    <SkillStat
                      name={"Project Management"}
                      percentage={"88"}
                      textColor="text-teal-500"
                      barColor={"bg-teal-500"}
                      bar="w-10/12"
                    />
                    <SkillStat
                      name={"Problem Solving"}
                      percentage={"85"}
                      textColor="text-amber-500"
                      barColor={"bg-amber-500"}
                      bar="w-5/6"
                    />
                    <SkillStat
                      name={"Analytical Abilities"}
                      percentage={"55"}
                      textColor="text-yellow-500"
                      barColor={"bg-yellow-500"}
                      bar="w-3/6"
                    />
                    <SkillStat
                      name={"Organization"}
                      percentage={"43"}
                      textColor="text-pink-500"
                      barColor={"bg-pink-500"}
                      bar="w-4/12"
                    />
                    <SkillStat
                      name={"Creativity"}
                      percentage={"90"}
                      textColor="text-sky-500"
                      barColor={"bg-sky-500"}
                      bar="w-11/12"
                    />
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNav;
