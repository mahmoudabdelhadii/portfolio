import * as React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "./StyledButton";
import { Wrapper } from "./PageComponents";
import { MdOutlineEmail } from "react-icons/md";
const Contact: React.FunctionComponent<any> = () => {
  return (
    <Wrapper
      name="Contact"
      ParentClass="h-screen md:h-[50vh] w-full flex flex-col justify-center items-center"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center h-screen gap-4 md:h-[30vh] md:justify-between"
      >
        <p className="text-blue-400 font-bold">CONTACT ME</p>
        <h3 className="text-2xl font-bold md:text-4xl">
          Get in touch with me.
        </h3>
        <p className="w-1/2 text-justify text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          tempore est delectus saepe accusamus non architecto, incidunt debitis
          reiciendis dicta?
        </p>
        <div className="flex flex-row">
          <div className="w-full">
            <StyledButton>
              Write me an Email <MdOutlineEmail className="h-10" />
            </StyledButton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
