import * as React from "react";
import styled from "styled-components";
import { Wrapper } from "./PageComponents";
import ChipTabs from "./ChipTab";
import Reveal from "./Reveal";
const Skills: React.FunctionComponent<any> = () => {
  return (
    <Wrapper name="Skills">
      <CardHead>
        <Reveal>
          <Subtitle>MY SKILLSET</Subtitle>
        </Reveal>
      </CardHead>

      <CardBody>
        <CardBodyLeft>
          <Reveal width="100%" from="left" delay={0.75}>
            <CardLeftText>
              Full Stack Development,
              <br />
              Data Engineering &
              <br />
              Machine Learning
            </CardLeftText>
          </Reveal>
        </CardBodyLeft>
        <CardBodyRight>
          <Reveal from="right" width="fit-content" delay={0.75}>
            <ChipTabs />
          </Reveal>
        </CardBodyRight>
      </CardBody>
    </Wrapper>
  );
};

const CardHead = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CardBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardLeftText = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-top: 1.5rem;
  font-family: "Regular";
`;
const CardBodyLeft = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CardBodyRight = styled.div`
  display: flex;
  height: 30rem;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 60%;
`;
const Subtitle = styled.h3`
  color: rgb(104 154 248);
  font-weight: 700;
  margin: 0;
  text-align: left;
`;
export default Skills;
