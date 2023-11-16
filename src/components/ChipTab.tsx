import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { StyledButton } from "./StyledButton";
import { motion, useAnimation, useInView } from "framer-motion";

import styled from "styled-components";
import jslogo from "../assets/JavaScriptlogo.png";
import ocp from "../assets/OpenShift-LogoType.svg.png";
import python from "../assets/PyTorchlogo.png";
import reacticon from "../assets/Reacticon.png";
import vueicon from "../assets/VueLogo.png";
import sqlicon from "../assets/sqllogo.svg";
import nuxticon from "../assets/nuxticon.png";
import nodejsicon from "../assets/nodejslogo.png";
import tensor from "../assets/Tensorflowlogo.png";
import docker from "../assets/dockerlogo.png";
import typescriptlogo from "../assets/Typescriptlogo.png";
import akslogo from "../assets/akslogo-removebg-preview.png";
import awslogo from "../assets/awslogo.png";
import clogo from "../assets/clogo-removebg-preview.png";
import csharplogo from "../assets/csharplogo-removebg-preview.png";
import csslogo from "../assets/css.webp";
import hasuralogo from "../assets/hasuralogo.png";
import htmlogo from "../assets/html.webp";
import cpplogo from "../assets/cpplogo-removebg-preview.png";
import pytorchlogo from "../assets/PyTorchlogo.png";

import { useTheme } from "styled-components";
const tabs = ["Languages", "Frontend", "Backend", "Frameworks", "Cloud"];
interface tabratingType {
  name: string;
  group: string;
  logo: string;
  rating: number;
}

const tabrating: tabratingType[] = [
  { name: "JavaScript", group: "Languages", logo: jslogo, rating: 100 },
  { name: "Vue", group: "Frontend", logo: vueicon, rating: 70 },
  { name: "React", group: "Frontend", logo: reacticon, rating: 80 },
  { name: "Python", group: "Languages", logo: python, rating: 30 },
  { name: "OCP", group: "Cloud", logo: ocp, rating: 50 },
  { name: "SQL", group: "Languages", logo: sqlicon, rating: 40 },
  { name: "Nuxt", group: "Frameworks", logo: nuxticon, rating: 45 },
  { name: "NodeJS", group: "Backend", logo: nodejsicon, rating: 87 },
  { name: "TensorFlow", group: "Frameworks", logo: tensor, rating: 79 },
  { name: "Docker", group: "Cloud", logo: docker, rating: 10 },
  { name: "TypeScript", group: "Languages", logo: typescriptlogo, rating: 20 },
  {
    name: "Azure Kubernetes Service",
    group: "Cloud",
    logo: akslogo,
    rating: 30,
  },
  { name: "AWS", group: "Cloud", logo: awslogo, rating: 50 },
  { name: "C", group: "Languages", logo: clogo, rating: 70 },
  { name: "C#", group: "Languages", logo: csharplogo, rating: 60 },
  { name: "CSS", group: "Languages", logo: csslogo, rating: 30 },
  { name: "Hasura GraphQL", group: "Backend", logo: hasuralogo, rating: 35 },
  { name: "HTML", group: "Languages", logo: htmlogo, rating: 45 },
  { name: "C++", group: "Languages", logo: cpplogo, rating: 55 },
  { name: "PyTorch", group: "Frameworks", logo: pytorchlogo, rating: 65 },
];

const BarLogo = styled(motion.img)`
  height: 2rem;
  width: 2rem;
`;

const BarMax = styled(motion.div)`
  flex-basis: 80%;
  height: 2rem;
  display: flex;
  width: 100%;
`;
const Bar = styled(motion.div)<any>`
  height: 2rem;
  width: ${(props: any) => props.rating + "%"};
`;

Bar.defaultProps = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

const delay = 4000;
const ChipTabs = () => {
  const [current, setCurrent] = useState(0);
  const [clicked, setClicked] = useState(false);
  const timeoutRef = useRef(null as any);
  const [selected, setSelected] = useState(tabs[current]);
  const [FilteredTabs, setFilteredTabs] = useState(
    tabrating.filter((tab) => tab.group === tabs[current])
  );
  const [isHovering, setIsHovering] = useState(false);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (!clicked) {
        setCurrent((prevIndex: number) =>
          prevIndex === tabs.length - 1 ? 0 : prevIndex + 1
        );

        setSelected(tabs[current]);
        setFilteredTabs(tabrating.filter((tab) => tab.group === tabs[current]));
      } else {
        resetTimeout();
        setCurrent(tabs.findIndex((x) => x === selected));

        timeoutRef.current = setTimeout(() => {
          setClicked(false);
        }, 6000);
      }
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [current, clicked]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const themeContext = useTheme();
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col justify-start items-center w-full"
    >
      <motion.div className="hidden w-full md:flex md:gap-2 flex-wrap md:justify-evenly mb-8">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            setFilteredTabs={setFilteredTabs}
            setClicked={setClicked}
            key={tab}
          />
        ))}
      </motion.div>

      <motion.div ref={ref} className=" w-11/12 mb-16 border-l border-blue-400">
        {FilteredTabs.map((tab, index) => {
          const { name, group, logo, rating } = tab;

          const transition = {
            duration: 1,
            delay: index * 0.2,
            ease: "easeInOut",
          };

          const variants = {
            enter: {
              opacity: 0,
              width: "0%",
            },
            animate: {
              opacity: 1,
              width: ["0%", rating.toString() + "%"],
              transition,
            },
          };
          return (
            <motion.div
              key={index}
              ref={ref}
              className="flex justify-between items-center my-4 ml-8"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <BarLogo
                data-aos="fade-right"
                data-aos-once="false"
                src={logo}
                ref={ref}
                key={index}
                className={
                  logo.includes("hasura") && themeContext.color === "#fff"
                    ? "invert"
                    : ""
                }
              />

              <BarMax>
                <Bar
                  variants={variants}
                  initial="enter"
                  animate="animate"
                  exit="enter"
                  rating={rating}
                  className="z-0 bg-gradient-to-br from-blue-300 to-violet-300"
                />
              </BarMax>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
  setFilteredTabs,
  setClicked,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  setFilteredTabs: Dispatch<SetStateAction<tabratingType[]>>;
  setClicked: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <TabButton
      onClick={() => {
        setSelected(text);
        setFilteredTabs(tabrating.filter((tab) => tab.group === text));
        setClicked(true);
      }}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-300"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 border-blue-500 border-t border-r"
        ></motion.span>
      )}
    </TabButton>
  );
};

const TabButton = styled(StyledButton)`
  flex-direction: row;
`;

export default ChipTabs;
