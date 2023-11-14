import * as React from "react";
import styled from "styled-components";
import pic2 from "../assets/pic2.png";
import { motion } from "framer-motion";
import { LinkStyle } from "./StyledButton";
import { Wrapper } from "./PageComponents";

const ResumeButton = styled(LinkStyle)`
  width: 5rem;
`;

const IntroSlide: React.FunctionComponent<any> = () => {
  return (
    <Wrapper
      name="About"
      ParentClass="h-[90vh] w-full flex items-center justify-center"
    >
      <IntroContainer>
        <div className="flex flex-col basis-3/5 ">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="false"
            className="text-xl leading-9 font-bold m-0"
          >
            {" "}
            Hi, I am
          </h2>

          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="false"
            className="text-4xl font-bold md:text-7xl z-20"
          >
            Mahmoud
            <span
              data-aos="fade-up-right"
              data-aos-duration="2000"
              className="align-baseline inline-block pl-2 md:z-20"
            >
              <svg height="10" width="10">
                <circle
                  cx="5"
                  cy="5"
                  r="4"
                  stroke="#689af8"
                  strokeWidth={1}
                  fill="#689af8"
                />
              </svg>
            </span>
          </h1>

          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="false"
            className="text-base leading-6 text-justify text-[rgb(153_153_153)] w-[85%] mx-0 my-6 z-20 md:text-lg"
          >
            I love everything software, from application development and
            deployment, to data and model training
          </p>

          <ResumeButton
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="false"
            to="Resume"
          >
            Scroll to Resume
          </ResumeButton>
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-once="false"
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
  flex-basis: 40%;
  width: 100%;
  height: auto;

  @media screen and (max-width: 600px) {
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
