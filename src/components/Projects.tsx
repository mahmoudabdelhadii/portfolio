import * as React from "react";
import styled from "styled-components";
import { Wrapper } from "./PageComponents";
import Example from "./Carousel";
const Projects: React.FunctionComponent<any> = () => {
  return (
    // <CarouselWrapper name="Recent Projects" showTitle>
    <Example />
    // </CarouselWrapper>
  );
};

const CarouselWrapper = styled(Wrapper)`
  height: 300vh;
  justify-content: flex-end;
`;
export default Projects;
