"use client";

import Image from "next/image";
import Nav from "../components/Nav";
import TerminalContact from "../components/Contact/CommandLineForm";
import * as React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import IntroSlide from "../components/IntroSlide";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import { Element } from "react-scroll";
import Navbar from "../components/Nav/DynamicIsland";
import { useState, useCallback, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (theme === "dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
    });
  }, []);
  const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      if (media.addEventListener) {
        media.addEventListener("change", updateTarget);
      } else {
        // compatibility for browser that dont have addEventListener
        media.addListener(updateTarget);
      }
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      if (media.removeEventListener) {
        return () => media.removeEventListener("change", updateTarget);
      } else {
        // compatibility for browser that dont have removeEventListener
        return () => media.removeListener(updateTarget);
      }
    }, []);

    return targetReached;
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const isBreakpoint = useMediaQuery(768);
  return (
    <div className="overscroll-y-none container w-full h-full bg-[#F5F5F5] dark:bg-[#0C0C0F] text-[#0C0C0F] dark:text-[#F5F5F5] flex flex-col justify-center max-w-screen items-center md:pt-20 pt-24 ">
      {isBreakpoint ? (
        <Navbar onChange={toggleTheme} checked={theme === "dark"} />
      ) : (
        <Nav onChange={toggleTheme} checked={theme === "dark"} />
      )}

      <IntroSlide />

      <Element
        name="Experience"
        className="w-full h-full flex justify-center items-start"
      >
        <Experience />
      </Element>
      <Element
        name="Skills"
        className="w-full h-full flex justify-center items-start"
      >
        <Skills />
      </Element>
      <Element name="Projects" className="w-full h-full">
        <Projects />
      </Element>
      <Element name="About Me" className="w-full h-full">
        <AboutMe />
      </Element>

      <Element name="Contact" className="w-full h-full">
        <Contact />
      </Element>
    </div>
  );
}
