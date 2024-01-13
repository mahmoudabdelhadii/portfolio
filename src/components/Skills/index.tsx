import * as React from "react";

import { Wrapper } from "../PageComponents";
import ChipTabs from "./ChipTab";

const Skills: React.FunctionComponent<any> = () => {
  return (
    <div className="flex flex-col justify-center items-center md:w-[80%] h-screen md:h-fit md:min-h-max">
      <div className="flex w-full flex-row justify-center items-center md:items-start md:justify-start">
        <h3
          data-aos="fade-up"
          className="text-blue-400 font-bold text-left m-0"
        >
          MY SKILLSET
        </h3>
      </div>

      <div className="flex w-full flex-col items-between justify-center md:flex md:w-full md:flex-row md:items-start md:justify-between">
        <div className="flex basis-1/3 flex-row justify-center items-center md:items-start md:justify-start">
          <h2
            data-aos="fade-right"
            data-aos-delay="750"
            className="font-bold text-2xl leading-10 mt-6 text-center md:tex-4xl md:text-left"
          >
            Full Stack Development,
            <br />
            Data Engineering &
            <br />
            Machine Learning
          </h2>
        </div>
        <div className="flex basis-3/4 flex-col items-center justify-start md:min-h-[35rem] pt-16 min-h-fit md:pt-4">
          <ChipTabs />
        </div>
      </div>
    </div>
  );
};

export default Skills;
