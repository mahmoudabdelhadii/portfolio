import * as React from "react";
import styled from "styled-components";
import pic2 from "../assets/pic2.png";
import { motion, useScroll } from "framer-motion";
import { LinkStyle } from "./StyledButton";
import { FadeIn } from "./FadeIn";
import { Wrapper } from "./PageComponents";
import Reveal from "./Reveal";
const ResumeButton = styled(LinkStyle)`
  width: 5rem;
`;

const IntroSlide: React.FunctionComponent<any> = () => {
  return (
    <Wrapper name="About">
      <IntroContainer>
        <Textbox>
          <Reveal from="left">
            <Subtitle> Hi, I am</Subtitle>
          </Reveal>
          <Reveal from="left">
            <h1 className="text-7xl font-bold md:text-7xl">
              Mahmoud Abdelhadi
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
            </h1>
          </Reveal>
          <Reveal from="left">
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quidem laudantium pariatur dolores debitis aperiam fuga doloremque
              cumque! Id quam fugit maiores aperiam, laboriosam excepturi,
              adipisci illum voluptates ad laborum animi asperiores. Corporis
              mollitia pariatur unde, commodi distinctio temporibus veniam hic
              velit fuga veritatis beatae, excepturi exercitationem quas aut
              odio iste sint nesciunt! Iste iure corrupti at a minus quos qui
              eaque quis id quo, ipsam quas omnis quae dolore necessitatibus
              asperiores vel voluptates impedit officiis! Reprehenderit porro
              iusto architecto.
            </Description>
          </Reveal>
          <Reveal>
            <ResumeButton to="Resume">Scroll to Resume</ResumeButton>
          </Reveal>
        </Textbox>
        <FadeIn>
          <FadeImage>
            <ProfileImage src={pic2} alt="" />
          </FadeImage>
        </FadeIn>
      </IntroContainer>
    </Wrapper>
  );
};

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 700;
  margin: 0;
  margin-top: 1.5rem;
  display: flex;
  align-items: flex-end;
`;
const Textbox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  font-family: "Regular";

  @media screen and (max-width: 600px) {
    z-index: 1;
    position: relative;
  }
`;
const Subtitle = styled(motion.h2)`
  font-size: 1.25rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin: 0;
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;
  color: rgb(153 153 153);
  margin: 1.5rem 0 1.5rem 0;
  width: 85%;
`;
export default IntroSlide;
