import * as React from "react";
import styled from "styled-components";
import pic2 from "../assets/pic2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { StyledButton, LinkStyle } from "./StyledButton";

const ResumeButton = styled(LinkStyle)`
  width: 5rem;
`;

const IntroSlide: React.FunctionComponent<any> = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <Wrapper>
      <Textbox>
        <Subtitle> Hi, I am</Subtitle>
        <Title>
          Mahmoud Abdelhadi
          <svg height="10" width="10" style={{ paddingLeft: "3px" }}>
            <circle
              cx="5"
              cy="5"
              r="4"
              stroke="#689af8"
              stroke-width="1"
              fill="#689af8"
            />
          </svg>
        </Title>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          quidem laudantium pariatur dolores debitis aperiam fuga doloremque
          cumque! Id quam fugit maiores aperiam, laboriosam excepturi, adipisci
          illum voluptates ad laborum animi asperiores. Corporis mollitia
          pariatur unde, commodi distinctio temporibus veniam hic velit fuga
          veritatis beatae, excepturi exercitationem quas aut odio iste sint
          nesciunt! Iste iure corrupti at a minus quos qui eaque quis id quo,
          ipsam quas omnis quae dolore necessitatibus asperiores vel voluptates
          impedit officiis! Reprehenderit porro iusto architecto.
        </Description>
        <ResumeButton to="Resume">Scroll to Resume</ResumeButton>
      </Textbox>
      <ProfileImage
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        src={pic2}
        alt=""
      />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

const ProfileImage = styled(motion.img)`
  z-index: 0;
  display: flex;
  flex-basis: 40%;
  opacity: 0.7;
  height: 25rem;
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

const Title = styled(motion.h1)`
  font-size: 2.9rem;
  line-height: 1;
  font-weight: 700;
  margin: 0;
  margin-top: 1.5rem;
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
