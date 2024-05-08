"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";
//Not lazy loaded
import Nav from "../components/Nav";
import IntroSlide from "../components/IntroSlide";
import Navbar from "../components/Nav/DynamicIsland";
// Lazy loaded

// Dynamically import components with placeholders
const Projects = dynamic(() => import("../components/Projects"), {
  loading: () => <p>Loading Projects...</p>,
});
const Experience = dynamic(() => import("../components/Experience"), {
  loading: () => <p>Loading Experience...</p>,
});
const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <p>Loading Contact...</p>,
});
const Skills = dynamic(() => import("../components/Skills"), {
  loading: () => <p>Loading Skills...</p>,
});
const AboutMe = dynamic(() => import("../components/AboutMe"), {
  loading: () => <p>Loading About Me...</p>,
});

import ChatBox from "../components/ChatBox";
interface Refs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

interface VisibilityState {
  [key: string]: boolean;
}
const componentSequence = [
  "IntroSlide",
  "AboutMe",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];
export default function Home() {
  const [theme, setTheme] = useState("");

  const refs: Refs = componentSequence.reduce<Refs>(
    (acc, name) => ({
      ...acc,
      [name]: useRef<HTMLDivElement>(null),
    }),
    {}
  );

  const [visibleSection, setVisibleSection] = useState<VisibilityState>({});
  useEffect(() => {
    if (theme === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      setTheme("dark");
    } else {
      setTheme("light");
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
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement; // Correct type assertion here
            const name = target.dataset.name; // Now safely accessing dataset

            if (entry.isIntersecting && name) {
              setVisibleSection((prevState) => ({
                ...prevState,
                [name]: true,
              }));
              const currentIndex = componentSequence.indexOf(name);
              const nextComponent = componentSequence[currentIndex + 1];
              if (nextComponent) {
                import(`../components/${nextComponent}`); // Preload next component
              }
            }
          });
        },

        {
          threshold: 0.1,
        }
      );

      // Attach observer to each ref element
      Object.entries(refs).forEach(([key, ref]) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });

      // Cleanup observer on component unmount
      return () => {
        Object.entries(refs).forEach(([key, ref]) => {
          if (ref.current) {
            observer.disconnect();
          }
        });
      };
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

      {/* <IntroSlide /> */}
      {/* <Element name="About Me" className="w-full h-full" data-name="About Me">
        <div ref={refs.aboutMe}>
          {visibleSection["About Me"] && <AboutMe />}
        </div>
      </Element>
      <Element
        name="Experience"
        className="w-full h-full flex justify-center items-start"
        data-name="Experience"
      >
        <div ref={refs.experience}>
          {visibleSection["Experience"] && <Experience />}
        </div>
      </Element>
      <Element
        name="Skills"
        className="w-full h-full flex justify-center items-start"
        data-name="Skills"
      >
        <div ref={refs.skills}>{visibleSection["Skills"] && <Skills />}</div>
      </Element>
      <Element name="Projects" className="w-full h-full" data-name="Projects">
        <div ref={refs.projects}>
          {visibleSection["Projects"] && <Projects />}
        </div>
      </Element>
      <Element name="Contact" className="w-full h-full" data-name="Contact">
        <div ref={refs.contact}>{visibleSection["Contact"] && <Contact />}</div>
      </Element> */}
      {componentSequence.map((component, index) => (
        <div
          key={index}
          className="w-full min-h-5"
          ref={refs[component]}
          data-name={component} // Ensure to set data-name for observer identification
        >
          <Element name={component}>
            {visibleSection[component] &&
              React.createElement(
                require(`../components/${component}`).default
              )}
          </Element>
        </div>
      ))}
    </div>
  );
}
