import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LinkStyle } from "./StyledButton";
import { Wrapper } from "./PageComponents";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const IntroSlide: React.FunctionComponent<any> = () => {
  return (
    <Wrapper
      name="About"
      ParentClass="min-h-[90vh] h-max w-full flex items-center justify-center"
      ChildrenClass="justify-center items-center md:justify-between"
    >
      <div className="flex justify-between flex-col-reverse items-center h-full md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/3 md:max-w-1/2 ">
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
            className="text-base leading-6 text-justify text-[rgb(153_153_153)] w-1/2 max-w-1/2 md:max-w-fit md:w-[85%] mx-0 my-6 z-20 md:text-lg"
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

          <LinkStyle className="w-8" to="Skills">
            Scroll for more
          </LinkStyle>
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="rounded-full max-w-[250px] h-auto relative overflow-hidden md:rounded-none md:max-w-[400px] "
        >
          <FadeImage>
            <div className="dark:opacity-80 w-[200px] h-[200px] aspect-[0.7_/_1] md:z-0 md:flex md:basis-1/2 md:w-[400px] md:h-[400px]">
              <Image
                src="/assets/pic2.png"
                alt=""
                fill
                sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </FadeImage>
        </div>
      </div>
    </Wrapper>
  );
};

const FadeImage = styled.div`
  -webkit-mask-image: linear-gradient(
    180deg,
    #f5f5f5,
    rgba(245, 245, 245, 1) 60%,
    transparent
  );
`;

export default IntroSlide;
