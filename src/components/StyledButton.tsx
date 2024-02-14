import { Link } from "react-scroll";
import * as React from "react";
import { motion } from "framer-motion";

export const LinkStyle: React.FunctionComponent<any> = ({ children, to }) => {
  return (
    <Link
      to={to}
      spy={true}
      activeClass="page-active"
      smooth={true}
      duration={500}
      offset={-100}
      className="w-5/6"
    >
      <StyledButton children={children} />
    </Link>
  );
};

export const StyledButton = React.forwardRef<HTMLButtonElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <motion.button
        className="mb-2 border-b relative text-black dark:text-white border-blue-400 w-full h-20 flex justify-center items-center hover:pl-3 hover:bg-[#0B2762]/[0.24] md:w-max md:h-fit
    bg-transparent transition-all duration-[508ms] ease-[cubic-bezier(0.77,0,0.175,1)] text-[0.8rem] tracking-[0.25rem] uppercase cursor-pointer pl-0 pr-[0.6rem] py-[0.6rem] rounded-none border-b-[#689af8]"
        whileTap={{ scale: 1.1 }}
        ref={ref}
        {...props}
      />
    );
  }
);
