import styled from "styled-components";
import { Link } from "react-scroll";
import * as React from "react";
import { motion } from "framer-motion";
export const StyledButton = styled(motion.button)`
  background-color: ${(props) => props.theme.background};
  border: none;
  padding: 0.6rem 0.6rem 0.6rem 0rem;
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  border-bottom: 1px solid #689af8;
  border-left: 2px none #689af8;
  background-color: transparent;
  transition: all 508ms cubic-bezier(0.77, 0, 0.175, 1);
  font-family: "Regular";
  font-size: 0.8rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  line-height: inherit;
  cursor: pointer;
  border-radius: 0;

  &:hover {
    padding-left: 0.7rem;
    background-color: rgba(11, 39, 90, 0.24);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const LinkStyle: React.FunctionComponent<any> = ({ children, to }) => {
  return (
    <Link to={to} spy={true} smooth={true} duration={500} offset={-200}>
      <StyledButton whileTap={{ scale: 1.1 }}>{children}</StyledButton>
    </Link>
  );
};
