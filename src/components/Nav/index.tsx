import { Toggle } from "./themeToggle";
import * as React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { LinkStyle } from "../StyledButton";
import Image from "next/image";
//import { animateScroll as scroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
type NavProps = {
  checked: boolean;
  onChange: any;
};

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
          {/* <LinkStyle to="About Me">About Me</LinkStyle> */}
          <LinkStyle to="Projects">Projects</LinkStyle>
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
