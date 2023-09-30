import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.background};
  border: none;
  padding: 10px;
  color: ${(props) => props.theme.color};
  cursor: "pointer";
  display: flex;
  padding-left: 0px;
  align-items: center;
  border-bottom: 1px solid #689af8;
  border-left: 2px none #689af8;
  background-color: transparent;
  transition: all 508ms cubic-bezier(0.77, 0, 0.175, 1);
  font-family: "Regular";
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  line-height: inherit;
  cursor: pointer;
  border-radius: 0;

  &:hover {
    padding-left: 7px;
    background-color: rgba(11, 39, 90, 0.24);
  }
`;

export const LinkStyle: React.FunctionComponent<any> = ({ to, name }) => {
  return (
    <Link activeClass="active" to={to} spy={true} smooth={true} duration={500}>
      <StyledButton>{name}</StyledButton>
    </Link>
  );
};
