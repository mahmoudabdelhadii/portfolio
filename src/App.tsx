import Nav from "./components/Nav";
import { createContext, useState } from "react";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

import IntroSlide from "./components/IntroSlide";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import { Element } from "react-scroll";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
export const ThemeContext = createContext(null as any);

const baseTheme = {
  background: "#F5F5F5",
  color: "#222",
};

const darkTheme = {
  background: "#0C0C0F",
  color: "#fff",
};

const Container = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  @media screen and (max-width: 600px) {
    padding-top: 8rem;
  }
`;

const Center = styled.div`
  width: 65%;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
function App() {
  const [theme, setTheme] = useState(prefersDark ? "dark" : "light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme === "light" ? baseTheme : darkTheme}>
      <Container>
        <Nav onChange={toggleTheme} checked={theme === "dark"} />
        <Center>
          <Element name="About" className="element">
            <IntroSlide id="About" />
          </Element>
          <Element name="Projects" className="element">
            <Projects />
          </Element>
          <Element name="Experience" className="element">
            <Experience />
          </Element>
          <Element name="Skills" className="element">
            <Skills />
          </Element>
          <Element name="Resume" className="element">
            <Resume />
          </Element>
          <Element name="Contact" className="element">
            <Contact />
          </Element>
        </Center>
      </Container>
    </ThemeProvider>
  );
}

export default App;
