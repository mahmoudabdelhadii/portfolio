import PdfViewer from "./PdfViewer";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsWhatsapp, BsPrinter, BsMessenger } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TerminalHeader } from "../Contact/CommandLineForm";
import Image from "next/image";
import { StyledButton } from "../StyledButton";

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const onDownload = () => {
    const pdfUrl = "Mahmoud_Abdelhadi_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Abdelhadi_Mahmoud_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed z-20 grid top-0 right-0 left-0 bottom-0 place-items-end md:place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="dark:bg-black text-slate-900 bg-white dark:text-white p-0 md:p-0 rounded-lg h-[70vh] md:h-[60vh] max-h-[70vh] w-[83vw] md:max-h-fit md:w-full md:max-w-4xl shadow-xl cursor-default flex justify-between relative overflow-hidden"
          >
            <div className="flex flex-col md:justify-start md:items-end gap-0 z-30 w-full h-full md:p-0">
              <TerminalHeader setIsCardOpened={setIsOpen} name="Resume" />
              <PdfViewer />

              {/* <div className="h-1/4 w-full">
                <motion.div className="w-full h-full flex justify-between gap-2 md:gap-12 md:justify-center items-center">
                  <GrInstallOption
                    className="text-black dark:text-white h-[5vh] w-[5vw] max-h-20 max-w-20 cursor-pointer"
                    onClick={onDownload}
                  />
                  <AiOutlineMail
                    className="text-black dark:text-white w-[5vw] max-h-20 max-w-20 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
                      )
                    }
                  />
                  <BsPrinter className="text-black dark:text-white h-[5vh] w-[5vw] max-h-20 max-w-20 cursor-pointer" />
                  <Image
                    src="/assets/icons8-whatsapp.svg"
                    className="h-[7vh] w-[8vw] max-h-20 max-w-20 cursor-pointer"
                    alt="whatsapp"
                    width={48}
                    height={48}
                  />
                  <Image
                    src="/assets/icons8-messenger-48.png"
                    className="h-[3vh] w-[6vw] md:h-16 md:w-16 cursor-pointer"
                    alt="messenger"
                    width={48}
                    height={48}
                  />
                </motion.div>
              </div> */}
              <div className="p-0 pt-4 md:p-8 gap-4 md:gap-12 flex flex-col md:flex-row md:w-2/3 w-full justify-center md:justify-end">
                <motion.button
                  className="mb-2 bg-slate-400 dark:bg-slate-900 relative dark:text-white text-black border w-full h-20 flex justify-center items-center hover:pl-3 hover:bg-[#0B2762]/[0.24] md:w-1/3 md:h-20
    bg-transparent transition-all duration-[508ms] ease-[cubic-bezier(0.77,0,0.175,1)] text-[0.8rem] tracking-[0.25rem] uppercase cursor-pointer pl-0 pr-[0.6rem] py-[0.6rem] rounded-none border-[#689af8]"
                  whileTap={{ scale: 1.1 }}
                  onClick={() => {
                    setIsOpen(false);
                    onDownload();
                  }}
                >
                  Download
                </motion.button>

                <motion.button
                  className="mb-2 border-b relative text-black dark:text-white border-blue-400 w-full h-20 flex justify-center items-center hover:pl-3 hover:bg-[#0B2762]/[0.24] md:w-1/3 md:h-20
    bg-transparent transition-all duration-[508ms] ease-[cubic-bezier(0.77,0,0.175,1)] text-[0.8rem] tracking-[0.25rem] uppercase cursor-pointer pl-0 pr-[0.6rem] py-[0.6rem] rounded-none border-b-[#689af8]"
                  whileTap={{ scale: 1.1 }}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
