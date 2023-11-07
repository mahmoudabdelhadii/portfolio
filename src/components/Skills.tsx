import * as React from "react";
import styled from "styled-components";
import { Wrapper } from "./PageComponents";
import ChipTabs from "./ChipTab";
import Reveal from "./Reveal";
const Skills: React.FunctionComponent<any> = () => {
  return (
    <Wrapper name="Skills">
      <div className="flex w-full flex-row justify-center items-center md:items-start md:justify-start">
        <Reveal>
          <h3 className="text-blue-400 font-bold text-left m-0">MY SKILLSET</h3>
        </Reveal>
      </div>

      <div className="flex w-full flex-col items-between justify-center md:flex md:w-full md:flex-row md:items-start md:justify-between">
        <div className="flex basis-[30%] flex-row justify-center items-center md:items-start md:justify-start">
          <Reveal width="100%" from="left" delay={0.75}>
            <h2 className="font-bold text-2xl leading-10 mt-6 text-center md:tex-4xl md:text-left">
              Full Stack Development,
              <br />
              Data Engineering &
              <br />
              Machine Learning
            </h2>
          </Reveal>
        </div>
        <CardBodyRight>
          <Reveal from="right" width="100%">
            <ChipTabs />
          </Reveal>
        </CardBodyRight>
      </div>
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

const CardBody = styled.div``;

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
