import logo from "../assets/logo.svg";
import { Toggle } from "../components/themeToggle";
import * as React from "react";

import styled from "styled-components";
import { LinkStyle } from "../components/StyledButton";
//import { animateScroll as scroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
type NavProps = {
  checked: boolean;
  onChange: any;
};

const NavContainer = styled.div<{ checked: boolean }>`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-image: ${(props) =>
    props.checked
      ? `linear-gradient(180deg, #0C0C0F, rgba(12, 12, 15, 0.8) 59%, transparent);`
      : `linear-gradient(180deg, #F5F5F5, rgba(245, 245, 245, 0.8) 59%, transparent);`};
`;

const LeftGroup = styled.div`
  display: flex;
  flex-basis: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const LogoButton = styled.div<{ checked: boolean }>`
  filter: ${(props) => (props.checked ? "invert(0%)" : "invert(100%)")};
`;
const RightGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
  flex-basis: 10%;
  height: 100%;
`;

const MiddleGroup = styled.div`
  display: flex;
  justify-content: Center;
  align-items: center;
  flex-basis: 70%;
  height: 100%;
  gap: 2rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Nav: React.FunctionComponent<NavProps> = ({ onChange, checked }) => {
  return (
    <NavContainer checked={checked}>
      <LeftGroup>
        <LogoButton checked={checked}>
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              scroll.scrollToTop();
            }}
          />
        </LogoButton>
      </LeftGroup>
      <MiddleGroup>
        <LinkStyle to="About">About Me</LinkStyle>
        <LinkStyle to="Experience">Experience</LinkStyle>
        {/* <LinkStyle name="Projects" to="Projects" /> */}
        <LinkStyle to="My Resume">Resume</LinkStyle>
        {/* <LinkStyle name="Skills" to="Skills" />
        <LinkStyle name="Contact" to="Contact" /> */}
      </MiddleGroup>
      <RightGroup>
        <Toggle checked={checked} onChange={onChange} />
      </RightGroup>
    </NavContainer>
  );
};

export default Nav;
