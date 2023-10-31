import styled from "styled-components";
import Card from "./Card";
import Reveal from "./Reveal";
import RBClogo from "../assets/RBClogo.png";
import TUTfclogo from "../assets/TUTfclogo.png";
import { Element } from "react-scroll";
import { StyledButton } from "./StyledButton";
import PdfViewer from "./PdfViewer";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsWhatsapp, BsPrinter, BsMessenger } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useTheme } from "styled-components";
const Experience: React.FunctionComponent<any | false> = () => {
  const cardData: ReactNode[] = [
    {
      logo: RBClogo,
      title: "Full Stack Engineer",
      subtitle: "RBC",
      company: "RBC",
      fromDate: "2021",
      toDate: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
    },
    {
      logo: RBClogo,
      company: "RBC",
      fromDate: "2021",
      toDate: "Present",
      title: "Data Engineer",
      subtitle: "RBC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
    },
    {
      logo: TUTfclogo,
      company: "RBC",
      fromDate: "2021",
      toDate: "Present",
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
    <Wrapper name="Experience" showTitle setShowPDF={setShowPDF}>
      <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
      >
        {cardData}
      </MainContainer>

      <SpringModal isOpen={showPDF} setIsOpen={setShowPDF} />
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
              theme.color === "#fff" ? "bg-transparent" : "bg-white"
            } bg-transparent text-white p-6 rounded-lg w-full max-w-4xl shadow-xl cursor-default relative overflow-hidden`}
          >
            <div className="flex flex-col gap-2 z-10 w-full p-8">
              <PdfViewer />
              <div
                className={`${
                  theme.color === "#fff" ? "" : "invert"
                } h-48 w-full`}
              >
                <motion.div className="w-full h-full flex gap-12 justify-center items-center">
                  <GrInstallOption className="h-10 w-10 invert cursor-pointer" />
                  <AiOutlineMail className="h-10 w-10 cursor-pointer" />
                  <BsPrinter className="h-10 w-10 cursor-pointer" />
                  <BsFacebook className="h-10 w-10 cursor-pointer" />
                  <BsMessenger className="h-10 w-10 cursor-pointer" />
                  <BsWhatsapp className="h-10 w-10 cursor-pointer" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3.75rem;
  line-height: 1rem;
`;

export const PageDiv = styled(Element)`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

export const PlusSign = styled.span`
  color: rgb(104 154 248);
  margin-left: 0.5rem;
  margin-top: 1rem;
  font-size: 3rem;
  line-height: 2rem;
  vertical-align: sub;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
interface WrapperProps {
  name: string;
  children: JSX.Element | JSX.Element[];
  showTitle?: boolean;
  setShowPDF: any;
}
const Wrapper: React.FunctionComponent<WrapperProps> = ({
  children,
  name,
  showTitle,
  setShowPDF,
}) => {
  return (
    <PageDiv name={name}>
      <Header>
        {showTitle && (
          <Title>
            {name}
            <PlusSign>+</PlusSign>
          </Title>
        )}

        <Reveal width="fit-content">
          <StyledButton onClick={() => setShowPDF(true)}>
            Download Resume
          </StyledButton>
        </Reveal>
      </Header>
      <Container>{children}</Container>
    </PageDiv>
  );
};
export default Experience;
