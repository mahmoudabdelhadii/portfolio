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
  border: "#689af8",
  secondary: "0C0C0F",
  subtitle: "#afafaf",
};

const darkTheme = {
  background: "#0C0C0F",
  color: "#fff",
  border: "#689af8",
  secondary: "#F5F5F5",
  subtitle: "#afafaf",
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
  width: 75%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
          <IntroSlide />
          <Skills />
          <Projects />

          <Experience />

          <Resume />

          <Contact />
        </Center>
      </Container>
    </ThemeProvider>
  );
}

export default App;
