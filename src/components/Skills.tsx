import * as React from "react";
import styled from "styled-components";
import { Wrapper } from "./PageComponents";
import ChipTabs from "./ChipTab";

const Skills: React.FunctionComponent<any> = () => {
  return (
    <Wrapper
      name="Skills"
      ParentClass="h-screen md:h-[50vh] w-full items-between"
      ChildrenClass="flex flex-col justify-center items-center w-full"
    >
      <div className="flex w-full flex-row justify-center items-center md:items-start md:justify-start">
        <h3
          data-aos="fade-up"
          className="text-blue-400 font-bold text-left m-0"
        >
          MY SKILLSET
        </h3>
      </div>

      <div className="flex w-full flex-col items-between justify-center md:flex md:w-full md:flex-row md:items-start md:justify-between">
        <div className="flex basis-[30%] flex-row justify-center items-center md:items-start md:justify-start">
          <h2
            data-aos="fade-right"
            data-aos-delay="750"
            className="font-bold text-2xl leading-10 mt-6 text-center md:tex-4xl md:text-left"
          >
            Full Stack Development,
            <br />
            Data Engineering &
            <br />
            Machine Learning
          </h2>
        </div>
        <CardBodyRight>
          <ChipTabs />
        </CardBodyRight>
      </div>
    </Wrapper>
  );
};

const CardBodyRight = styled.div`
  display: flex;
  height: 45rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-basis: 60%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default Skills;
