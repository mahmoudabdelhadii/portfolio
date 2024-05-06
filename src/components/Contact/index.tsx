import React, { Dispatch, SetStateAction, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StyledButton } from "../StyledButton";
import { MdOutlineEmail } from "react-icons/md";
import TerminalContact from "./CommandLineForm";
import Image from "next/image";
import { SendEmail, SpringModal } from "./SendEmail";
const Contact: React.FunctionComponent<any> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-10 text-center md:mb-0 w-full h-screen md:h-[50vh] flex justify-center items-center">
      <div className="flex justify-center items-center h-[full] m-full w-[calc(100vw-5rem)] absolute z-20 mx-10 text-center align-middle left-0">
        {/* <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center h-screen gap-4 md:h-[50vh] md:min-h-fit md:max-h-screen md:justify-center z-10"
        > */}
        <div className="space-y-4 flex flex-col justify-center items-center">
          <p className="text-blue-400 font-bold">CONTACT ME</p>
          <h3 className="text-2xl font-bold md:text-4xl">
            Get in touch with me.
          </h3>
          <p className="text-slate-400">
            If you have any question, would like to send me a compliment,
            <br />
            or wanna go for a coffee, please
            <br />
            feel free to contact me here.
          </p>
          <div className="flex flex-row justify-center w-full md:w-fit">
            <SendEmail isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      <div className="z-10 relative w-full h-full opacity-75 ">
        <Image
          src="/assets/typewriter.png"
          alt="typewriter"
          width={300}
          height={300}
          className="absolute left-20 top-20"
        />
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* </Wrapper> */}
    </div>
  );
};

export default Contact;
