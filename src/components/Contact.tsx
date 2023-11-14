import React, { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StyledButton } from "./StyledButton";
import { Wrapper } from "./PageComponents";
import { MdOutlineEmail } from "react-icons/md";
import { useTheme } from "styled-components";
const Contact: React.FunctionComponent<any> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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
            <StyledButton onClick={() => setIsOpen(true)}>
              Write me an Email <MdOutlineEmail className="h-10" />
            </StyledButton>
          </div>
        </div>
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Wrapper>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className={`${
              theme.color === "#fff"
                ? "bg-transparent  text-white"
                : "bg-white text-black"
            }  p-6 rounded-lg w-full max-w-4xl shadow-xl cursor-default relative overflow-hidden flex flex-col justify-center items-center`}
          >
            <h1 className="flex flex-col gap-2 z-10 w-full pt-8 text-center m-0">
              Thank you for reaching out.
            </h1>
            <h3 className="text-center pt-4 pb-8">
              I will get back to you as soon as possible.
            </h3>

            <div className="flex flex-col justify-center items-center">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
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
                      className="appearance-none block h-[20rem] w-full bg-white-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-message"
                      rows={5}
                      placeholder="Write your message here"
                    />
                  </div>
                </div>
              </form>
              <StyledButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Send
              </StyledButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
