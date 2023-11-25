import * as React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "./StyledButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const AboutMe: React.FunctionComponent<any> = () => {
  return (
    <motion.div className="relative flex flex-col p-0 items-center justify-start min-h-screen h-max md:items-start md:justify-center md:h-fit md:min-h-fit md:w-full">
      <div className="w-5/6 flex flex-col justify-center items-center gap-4 md:w-full md:flex-row md:justify-between md:items-center z-10">
        <div
          data-aos="fade-right"
          className="flex md:basis-1/4 h-max flex-col justify-center items-center gap-4  md:gap-4 md:justify-between md:items-start w-full"
        >
          <p className="z-0 font-bold text-blue-400 md:mb-4"> ABOUT ME</p>
          <h3 className="z-0 text-2xl font-bold md:text-left md:text-4xl text-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h3>
        </div>
        <p
          data-aos="fade-left"
          className="w-5/6 text-slate-400 text-justify md:basis-1/2 overflow-auto"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          deleniti esse necessitatibus pariatur! Nesciunt totam suscipit
          inventore maiores esse eum odio nisi nulla explicabo aut, praesentium
          nobis dignissimos numquam repellat facere error. Nesciunt sint alias
          reiciendis amet aliquam temporibus adipisci repellendus, deserunt
          aperiam quo culpa modi iure eius? Corrupti, animi perferendis. Ut
          quasi earum adipisci aliquid deserunt? Laborum distinctio quam a quae
          vel eum, quas officia, assumenda recusandae, laboriosam ab. Suscipit,
          eveniet? Numquam deleniti temporibus, atque eos inventore ea animi
          ratione dolore soluta quod. Nisi, consequatur odit exercitationem quo,
          laborum ab minima eligendi voluptatem nihil quasi saepe harum tenetur
          dolorum deleniti impedit ipsam perferendis quidem soluta mollitia
          repellendus, repudiandae iure rem blanditiis. Enim illo incidunt ipsa
          dolor nobis repellendus aut, explicabo, eligendi fugiat error nemo
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="flex w-full flex-col md:flex-row md:justify-between md:items-center md:w-1/2 gap-2 my-4"
      >
        <div className="w-full md:basis-1/2 z-99">
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

      <video
        autoPlay
        loop
        muted
        className="invert z-0 sepia-[50%] hue-rotate-180 dark:invert-0 dark:sepia-0 dark:hue-rotate-0 absolute top-0 left-0 w-full h-full object-cover opacity-25"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default AboutMe;
