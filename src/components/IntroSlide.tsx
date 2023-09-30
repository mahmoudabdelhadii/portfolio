import * as React from "react";
import styled from "styled-components";
import pic2 from "../assets/pic2.png";
const IntroSlide: React.FunctionComponent<any> = () => {
  return (
    <Wrapper>
      <img src={pic2} alt="pic2" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
export default IntroSlide;
