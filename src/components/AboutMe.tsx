import * as React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "./StyledButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const AboutMe: React.FunctionComponent<any> = () => {
  return (
    <motion.div className="flex flex-col items-center justify-around min-h-screen h-max items-between md:flex-col md:justify-center md:h-content md:w-full">
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:items-center">
        <div
          data-aos="fade-right"
          className="flex md:basis-1/4 h-auto md:h-full flex-col justify-center items-center gap-2 md:justify-evenly md:items-start w-full md:h-full"
        >
          <p className="z-0 font-bold text-blue-400"> ABOUT ME</p>
          <h3 className="z-0 text-2xl font-bold md:text-left md:text-4xl text-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h3>
        </div>
        <p
          data-aos="fade-left"
          className="w-5/6 text-slate-400 text-justify md:basis-3/4 overflow-auto"
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
        className="flex flex-col md:flex-row md:justify-between md:items-center md:w-1/2 gap-2 my-4"
      >
        <div className="basis-1/2">
          <StyledButton
            onClick={() => {
              window.open("https://github.com/melsafi1", "_blank");
            }}
          >
            Github <BsGithub />
          </StyledButton>
        </div>
        <div className="basis-1/2">
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
    </motion.div>
  );
};

export default AboutMe;
