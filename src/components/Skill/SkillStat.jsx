import classNames from "classnames";
import React from "react";

const SkillStat = ({ name, percentage, textColor, barColor, bar }) => {
  return (
    <div className="w-full h-full">
      <h2
        className={classNames(
          `text-2xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-2xl font-bold w-`,
          textColor
        )}
      >
        {percentage}%
      </h2>

      <div className="bg-gray-600 h-0.5 w-full mt-10">
        <div className={classNames(`h-0.5`, bar, barColor)} />
      </div>
      <h4 className="text-sm xl:text-2xl lg:text-xl md:text-lg sm:text-sm lg:font-semibold  font-light mt-4">
        {name}
      </h4>
    </div>
  );
};

export default SkillStat;
