import * as React from "react";
import styled from "styled-components";
import pic2 from "../assets/pic2.png";
import { motion } from "framer-motion";
import { LinkStyle } from "./StyledButton";
import { Wrapper } from "./PageComponents";
import { TypeAnimation } from "react-type-animation";
const ResumeButton = styled(LinkStyle)`
  width: 5rem;
`;

const IntroSlide: React.FunctionComponent<any> = () => {
  return (
    <Wrapper
      name="About"
      ParentClass="min-h-[90vh] h-max w-full flex items-center justify-center"
    >
      <IntroContainer>
        <div className="flex flex-col md:w-1/3 md:max-w-fit ">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-xl leading-9 font-bold m-0"
          >
            Hi, I am
          </h2>

          <div className="flex">
            <TypeAnimation
              sequence={[2000, "Mahmoud"]}
              wrapper="h1"
              speed={1}
              className="text-4xl font-bold md:text-6xl z-20"
              cursor={false}
            />
            <TypeAnimation
              sequence={[2500, "."]}
              className="text-blue-400 text-4xl font-bold md:text-6xl z-20"
              cursor={true}
              wrapper="span"
            />
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-base leading-6 text-justify text-[rgb(153_153_153)] w-[85%] mx-0 my-6 z-20 md:text-lg"
          >
            I love everything software, from application development and
            deployment, to data and model training
          </p>
          {/* <TypeAnimation
            sequence={[
              3500,
              " I love everything software, from application development and\
            deployment, to data and model training",
            ]}
            wrapper="h1"
            speed={55}
            className="text-base leading-6 text-justify text-[rgb(153_153_153)] w-[85%] mx-0 my-6 z-20 md:text-lg"
          /> */}

          <ResumeButton to="Skills">Scroll to see my skillset</ResumeButton>
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="hidden md:block"
        >
          <FadeImage>
            <ProfileImage src={pic2} alt="" />
          </FadeImage>
        </div>
      </IntroContainer>
    </Wrapper>
  );
};

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ProfileImage = styled(motion.img)`
  z-index: 0;
  display: flex;
  flex-basis: 50%;
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 20%;
    left: 0;
    z-index: 0;
    opacity: 0.8;
    width: 100%;
    aspect-ratio: 0.7 / 1;
  }
`;

const FadeImage = styled.div`
  -webkit-mask-image: linear-gradient(
    180deg,
    #f5f5f5,
    rgba(245, 245, 245, 1) 60%,
    transparent
  );
`;

export default IntroSlide;
