import logo from "../assets/logo.svg";
import { Toggle } from "../components/themeToggle";
import * as React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import styled from "styled-components";
import { LinkStyle } from "../components/StyledButton";
import Image from "next/image";
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
  width: 100vw;
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
  position: relative;
  width: 50px;
  height: 50px;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav: React.FunctionComponent<NavProps> = ({ onChange, checked }) => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <div className="h-[100px] flex justify-between items-center fixed w-screen z-[100] top-0 dark:bg-[linear-gradient(180deg,#0C0C0F,rgba(12,12,15,0.8)_59%,transparent)] bg-[linear-gradient(180deg,#F5F5F5,rgba(245,245,245,0.8)_59%,transparent)]">
      <div className="flex basis-1/5 h-full items-center justify-center">
        <div
          className="relative w-[50px] h-[50px] invert dark:invert-0"
          onClick={() => scroll.scrollToTop()}
        >
          <Image src="/assets/logo.svg" alt="logo" fill />
        </div>
      </div>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-300%" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        animate={hidden ? "hidden" : "visible"}
      >
        <div className="hidden md:flex md:justify-center md:items-center md:basis-[70%] md:h-full md:gap-8">
          <LinkStyle to="Experience">Experience</LinkStyle>
          <LinkStyle to="About Me">About Me</LinkStyle>
          {/* <LinkStyle name="Projects" to="Projects" /> */}
          <LinkStyle to="Contact">Contact</LinkStyle>
          {/* <LinkStyle name="Skills" to="Skills" />
        <LinkStyle name="Contact" to="Contact" /> */}
        </div>
      </motion.nav>
      <div className="flex justify-end items-center basis-[10%] h-full mr-8">
        <Toggle checked={checked} onChange={onChange} />
      </div>
    </div>
  );
};

export default Nav;
