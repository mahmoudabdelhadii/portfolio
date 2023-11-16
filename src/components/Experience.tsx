import Card from "./Card";
import Reveal from "./Reveal";
import RBClogo from "../assets/RBClogo.png";
import TUTfclogo from "../assets/TUTfclogo.png";

import { StyledButton } from "./StyledButton";
import PdfViewer from "./PdfViewer";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsWhatsapp, BsPrinter, BsMessenger } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper } from "./PageComponents";
import whatsapp from "../assets/icons8-whatsapp.svg";
import messenger from "../assets/icons8-messenger-48.png";
const Experience: React.FunctionComponent<any | false> = () => {
  const cardData: ReactNode[] = [
    {
      logo: RBClogo,
      title: "Full Stack Engineer",
      subtitle: "RBC",
      company: "RBC",
      fromDate: "September, 2022",
      toDate: "August, 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
    },
    {
      logo: RBClogo,
      company: "RBC",
      fromDate: "September, 2022",
      toDate: "August, 2023",
      title: "Data Engineer",
      subtitle: "RBC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
    },
    {
      logo: TUTfclogo,
      company: "Tutankhamun FC",
      fromDate: "May, 2021",
      toDate: "August 2021",
      title: "Machine Learning Engineer",
      subtitle: "Tutankhamun FC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
    },
  ].map((cardObj, index) => {
    return (
      <Card
        index={index}
        key={`card-${index}`}
        title={cardObj.title}
        company={cardObj.company}
        fromDate={cardObj.fromDate}
        toDate={cardObj.toDate}
        subtitle={cardObj.subtitle}
        logo={cardObj.logo}
        description={cardObj.description}
      />
    );
  });
  const [showPDF, setShowPDF] = useState(false);
  const theme = useTheme();
  console.log("Current theme: ", theme);
  return (
    <div className="w-full h-max flex flex-col justify-center items-center min-h-screen">
      <Wrapper
        name="Experience"
        showTitle
        ParentClass="flex h-max flex-col justify-evenly items-center md:flex-row  md:h-1/8 md:justify-between w-full items-center"
      >
        <Reveal from="right" width="fit-content">
          <StyledButton onClick={() => setShowPDF(true)}>
            Download Resume
          </StyledButton>
        </Reveal>
      </Wrapper>
      <div className="w-2/3 h-full md:w-full flex justify-center align-center">
        <motion.div
          className="flex flex-col justify-between w-full items-start my-8 h-2/3 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
        >
          {cardData}
        </motion.div>
      </div>
      <SpringModal isOpen={showPDF} setIsOpen={setShowPDF} />
    </div>
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
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className={`${
              theme.color === "#fff" ? "bg-transparent" : "bg-white"
            }  text-white p-6 rounded-lg h-[80vh] w-[80vw] md:w-full md:max-w-4xl shadow-xl cursor-default md:h-full flex justify-between relative overflow-hidden`}
          >
            <div className="flex flex-col md:justify-between gap-2 z-10 w-full h-full md:p-8">
              <PdfViewer />
              <div className="h-48 w-full">
                <motion.div className="w-full h-full flex gap-2 md:gap-12 justify-center items-center">
                  <GrInstallOption
                    className={`${
                      theme.color === "#fff" ? "invert" : ""
                    } h-14 w-auto cursor-pointer`}
                    onClick={onDownload}
                  />
                  <AiOutlineMail
                    className={`${
                      theme.color === "#fff" ? "" : "invert"
                    } h-14 w-auto cursor-pointer`}
                    onClick={() =>
                      window.open(
                        "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
                      )
                    }
                  />
                  <BsPrinter
                    className={`${
                      theme.color === "#fff" ? "" : "invert"
                    } h-14 w-auto cursor-pointer`}
                  />
                  <img src={whatsapp} className="h-20 w-20 cursor-pointer" />
                  <img src={messenger} className="h-20 w-20 cursor-pointer" />
                </motion.div>
              </div>
            </div>
            <div className="md:hidden">
              <StyledButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                close
              </StyledButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Experience;
