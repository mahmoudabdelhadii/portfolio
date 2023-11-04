import * as React from "react";
import styled from "styled-components";
import { Wrapper } from "./PageComponents";
import Carousel from "./Carousel";
const Projects: React.FunctionComponent<any> = () => {
  return (
    <div className="flex justify-start flex-col align-start">
      <Title>
        Recent Projects
        <PlusSign>+</PlusSign>
      </Title>
      <Carousel />
    </div>
  );
};

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3.75rem;
  line-height: 1rem;
`;

export const Page = styled.div<any>`
  height: ${(props) => (props.size ? props.size + "%" : "80vh")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
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
  justify-content: flex-start;
  align-items: center;
`;
const CarouselWrapper = styled(Wrapper)`
  height: 400vh;
  justify-content: flex-end;
`;
export default Projects;
