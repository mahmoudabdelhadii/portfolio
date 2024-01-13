import * as React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "./StyledButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const AboutMe: React.FunctionComponent<any> = () => {
  return (
    <div className="relative flex flex-col p-0 items-center justify-start min-h-screen h-max md:items-center md:justify-center md:h-fit md:min-h-fit md:w-full">
      <div className="md:w-[80%]">
        <div className="w-5/6 flex flex-col justify-center items-center gap-4 md:w-full md:flex-row md:justify-between md:items-center z-10">
          <div
            data-aos="fade-right"
            className="flex md:basis-1/4 h-max flex-col justify-center items-center gap-4  md:gap-4 md:justify-between md:items-start w-full"
          >
            <p className="z-10 font-bold text-blue-400 md:mb-4"> ABOUT ME</p>
            <h3 className="z-10 text-2xl font-bold md:text-left md:text-4xl text-center">
              Hey! thank you for stopping by.
            </h3>
          </div>
          <div className="flex flex-col w-5/6 md:basis-1/2">
            <p
              data-aos="fade-left"
              className=" text-black dark:text-slate-400 text-justify  overflow-auto"
            >
              I am a software engineer with a BASc in Electrical and Computer
              Engineering from UBC, where I graduated with an International
              Major Entrance Scholarship. I have a strong interest and skill in
              software development, security engineering, systems architecture,
              and artificial intelligence.
              <br />
              <br />
              When I am not on my laptop, I love
              <br />
            </p>
            <ul className="justify-start  text-left list-disc lg:mt-4 font  ">
              <li className="ml-4">
                {" "}
                Playing Volleyball, Tennis, and Football{" "}
              </li>
              <li className="ml-4">Going to the gym (🫶🏾 Deadlifts)</li>
              <li className="ml-4">Playing Fifa and COD on console</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex w-full flex-col z-10 md:flex-row md:justify-between md:items-center md:w-1/2 gap-2 my-4"
        >
          <div className="w-full md:basis-1/2 z-10">
            <StyledButton
              onClick={() => {
                window.open("https://github.com/melsafi1", "_blank");
              }}
            >
              Github <BsGithub />
            </StyledButton>
          </div>
          <div className="w-full md:basis-1/2">
            <StyledButton
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/mahmoudabdelhadii/",
                  "_blank"
                );
              }}
            >
              LinkedIn <BsLinkedin />
            </StyledButton>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="invert z-0 sepia-[50%] hue-rotate-180 dark:invert-0 dark:sepia-0 dark:hue-rotate-0 absolute top-0 left-0 w-full h-full object-cover opacity-25"
      >
        <source src="/assets/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutMe;
