import Card from "./Card";
import Reveal from "./Reveal";
// import RBClogo from "../assets/RBClogo.png";
// import TUTfclogo from "../assets/TUTfclogo.png";
import Image from "next/image";
import { StyledButton } from "./StyledButton";
import PdfViewer from "./PdfViewer";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsWhatsapp, BsPrinter, BsMessenger } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { Wrapper } from "./PageComponents";

const Experience: React.FunctionComponent<any | false> = () => {
  const cardData: ReactNode[] = [
    {
      logo: "/assets/RBClogo.png",
      title: "Full Stack Engineer",
      subtitle: "RBC",
      company: "RBC",
      fromDate: "September, 2022",
      toDate: "August, 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
    },
    {
      logo: "/assets/RBClogo.png",
      company: "RBC",
      fromDate: "September, 2022",
      toDate: "August, 2023",
      title: "Data Engineer",
      subtitle: "RBC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
    },
    {
      logo: "/assets/TUTfclogo.png",
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

  return (
    <div className="w-full h-max flex flex-col justify-center items-center min-h-screen md:h-min md:max-h-max md:min-h-fit">
      <Wrapper
        name="Experience"
        showTitle
        ParentClass="flex h-max flex-col justify-evenly items-center md:flex-row md:flex md:h-1/8 md:justify-between w-full md:w-full items-center"
        SubParentClass="justify-center items-center w- md:w-fit h-full"
        ChildrenClass=" md:w-fit"
      >
        <div data-aos="left" className="w-full">
          <StyledButton onClick={() => setShowPDF(true)}>
            Download Resume
          </StyledButton>
        </div>
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
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-end md:place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="dark:bg-transparent text-slate-900 bg-white dark:text-white p-6 rounded-lg h-[60vh] max-h-[70vh] w-[83vw] md:max-h-fit md:w-full md:max-w-4xl shadow-xl cursor-default flex justify-between relative overflow-hidden"
          >
            <div className="flex flex-col md:justify-between gap-4 z-10 w-full h-full md:p-8">
              <PdfViewer />

              <div className="h-1/4 w-full">
                <motion.div className="w-full h-full flex justify-between gap-2 md:gap-12 md:justify-center items-center">
                  <GrInstallOption
                    className="invert dark:invert-0 h-[5vh] w-[5vw] max-h-20 max-w-20 cursor-pointer"
                    onClick={onDownload}
                  />
                  <AiOutlineMail
                    className="invert dark:invert-0 h-[5vh] w-[5vw] max-h-20 max-w-20 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
                      )
                    }
                  />
                  <BsPrinter className="invert dark:invert-0 h-[5vh] w-[5vw] max-h-20 max-w-20 cursor-pointer" />
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
              </div>
              <div className="w-full flex justify-end">
                <StyledButton
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  close
                </StyledButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Experience;
