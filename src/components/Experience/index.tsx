import ExperienceCards from "./ExperienceCards";

import { StyledButton } from "../StyledButton";
import SpringModal from "./SpringModal";

import { motion } from "framer-motion";
import React, { useState } from "react";

const Experience: React.FunctionComponent<any | false> = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="w-full h-full flex justify-center items-start my-10">
      <div className="w-full md:w-[80%] h-max flex flex-col justify-center items-center min-h-screen md:h-min md:max-h-max md:min-h-fit">
        <SpringModal isOpen={showPDF} setIsOpen={setShowPDF} />
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
          <div className="flex flex-row justify-start items-center w-fit h-fit ">
            <h1 className="mb-6 leading-12 text-5xl h-fit font-bold ">
              Experience
              <span className="text-[rgb(104_154_248)] text-5xl leading-8 align-sub ml-2 mt-4">
                +
              </span>
            </h1>
          </div>
          <div data-aos="left" className="w-5/6 md:w-fit">
            <StyledButton onClick={() => setShowPDF(true)}>
              Download Resume
            </StyledButton>
          </div>
        </div>
        <div className="w-2/3 h-full md:w-full flex justify-center align-center">
          <motion.div
            className="flex flex-col justify-left w-full gap-8 md:gap-32 items-start my-8 h-2/3 md:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
          >
            {ExperienceCards}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
