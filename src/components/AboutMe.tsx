import * as React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "./StyledButton";
const AboutMe: React.FunctionComponent<any> = () => {
  return (
    <motion.div className="relative flex flex-row justify-between items-between w-[90vw] md:w-[80vw]">
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:items-center">
        <div className="w-1/2 h-full basis-1/3">
          <div className="flex flex-col justify-between items-center w-full h-full">
            <p className="z-0 font-bold text-blue-400"> ABOUT ME</p>
            <h3 className="z-0 text-2xl font-bold md:text-4xl">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h3>
            <div className="flex flex-row">
              <div className="w-2/5">
                <StyledButton>Github</StyledButton>
              </div>
              <div className="w-2/5">
                <StyledButton>LinkedIn</StyledButton>
              </div>
              <div className="w-2/5">
                <StyledButton>Email</StyledButton>
              </div>
            </div>
          </div>
        </div>
        <p className="w-5/6 text-slate-400 h-full text-justify md:w-1/2">
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
          nostrum nesciunt expedita! Amet perferendis reprehenderit eligendi a
          praesentium, dicta ducimus ad fugit corrupti obcaecati quis corporis
          aliquid facilis sequi expedita numquam vero ullam laboriosam possimus
          aliquam non consequuntur? Culpa animi aut asperiores a cum quis unde
          cumque numquam, illo doloribus exercitationem vero odio corporis ab,
          suscipit, quos dicta dolore debitis modi reiciendis dolorum. Similique
          quia ad debitis, quos cum quo velit inventore. Eum asperiores
          laboriosam consectetur nulla nostrum rem aliquid perspiciatis
          obcaecati vero iste.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
