import * as React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "./StyledButton";
import { Wrapper } from "./PageComponents";
import { MdOutlineEmail } from "react-icons/md";
const Contact: React.FunctionComponent<any> = () => {
  return (
    <Wrapper name="Contact">
      <div className="w-4/5 flex flex-col justify-between items-center h-[30vh]">
        <p className="text-blue-400 font-bold">CONTACT ME</p>
        <h3 className="text-4xl font-bold">Get in touch with me.</h3>
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
