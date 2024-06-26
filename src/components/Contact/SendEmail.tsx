import { motion, AnimatePresence } from "framer-motion";
import { StyledButton } from "../StyledButton";
import { MdOutlineEmail } from "react-icons/md";
import TerminalContact from "./CommandLineForm";
import React, { Dispatch, SetStateAction, useEffect } from "react";

const SendEmail = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <StyledButton onClick={() => setIsOpen(true)}>
      Write me an Email <MdOutlineEmail className="h-10" />
    </StyledButton>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[100] grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="text-left"
          >
            {/* <h1 className="text-xl md:text-base flex flex-col gap-2 z-10 w-full pt-8 text-center m-0">
                Thank you for reaching out.
              </h1>
              <h3 className="text-l md:text-base text-center pt-2 pb-4  text-gray-500">
                I will get back to you as soon as possible.
              </h3>
  
              <div className="flex flex-col justify-center items-center max-h-[70vh]">
                <form className="w-full h-5/6">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 h-fit px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                        email
                      </label>
                      <input
                        className="appearance-none block w-full bg-white-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder="john.doe@email.com"
                      />
                      <p className="text-xs italic">this field is optional</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                        Message
                      </label>
                      <textarea
                        className="appearance-none block max-h-[10rem] md:max-h-[10rem] md:h-[7rem] w-full bg-white-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-message"
                        rows={3}
                        placeholder="Write your message here"
                      />
                    </div>
                  </div>
                </form>
                <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-end">
                  <StyledButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Close
                  </StyledButton>
                  <StyledButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Send
                  </StyledButton>
                </div> */}
            {/* </div> */}
            <TerminalContact setIsCardOpened={setIsOpen} name="contact Me" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { SendEmail, SpringModal };
