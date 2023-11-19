import Nav from "./components/Nav";
import "./index.css";
import { useState } from "react";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import IntroSlide from "./components/IntroSlide";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import { Element } from "react-scroll";
import Navbar from "./components/Dynamic-Island";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  @media screen and (max-width: 768px) {
    padding-top: 8rem;
    overflow-x: clip;
  }
`;

const Center = styled.div`
  width: 80%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    width: 90%;
    overflow-x: clip;
  }
`;
function App() {
  const [theme, setTheme] = useState(prefersDark ? "dark" : "light");
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
    });
  }, []);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme === "light" ? baseTheme : darkTheme}>
      <Container>
        <Navbar onChange={toggleTheme} checked={theme === "dark"} />
        {/* <Nav onChange={toggleTheme} checked={theme === "dark"} /> */}
        <Center>
          <IntroSlide />
          <Element name="Skills" />
          <Skills />

          <Element name="Projects" />
          <Projects />
          <Element name="Experience" />
          <Experience />
          <Element name="About Me" />
          <AboutMe />

          <Element name="Contact" />
          <Contact />
        </Center>
      </Container>
    </ThemeProvider>
  );
}

export default App;
