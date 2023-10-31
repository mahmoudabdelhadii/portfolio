import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
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
import Reveal from "./Reveal";
import { useTheme } from "styled-components";
const tabs = ["Languages", "Frontend", "Backend", "Frameworks", "Cloud"];
interface tabratingType {
  name: string;
  group: string;
  logo: string;
  rating: number;
}
interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  from?: "top" | "bottom" | "left" | "right";
}

const tabrating: tabratingType[] = [
  { name: "JavaScript", group: "Languages", logo: jslogo, rating: 100 },
  { name: "Vue", group: "Frontend", logo: vueicon, rating: 70 },
  { name: "React", group: "Frontend", logo: reacticon, rating: 80 },
  { name: "Python", group: "Languages", logo: python, rating: 10 },
  { name: "OCP", group: "Cloud", logo: ocp, rating: 10 },
  { name: "SQL", group: "Languages", logo: sqlicon, rating: 10 },
  { name: "Nuxt", group: "Frameworks", logo: nuxticon, rating: 10 },
  { name: "NodeJS", group: "Backend", logo: nodejsicon, rating: 10 },
  { name: "TensorFlow", group: "Frameworks", logo: tensor, rating: 10 },
  { name: "Docker", group: "Cloud", logo: docker, rating: 10 },
  { name: "TypeScript", group: "Languages", logo: typescriptlogo, rating: 10 },
  {
    name: "Azure Kubernetes Service",
    group: "Cloud",
    logo: akslogo,
    rating: 10,
  },
  { name: "AWS", group: "Cloud", logo: awslogo, rating: 10 },
  { name: "C", group: "Languages", logo: clogo, rating: 10 },
  { name: "C#", group: "Languages", logo: csharplogo, rating: 10 },
  { name: "CSS", group: "Languages", logo: csslogo, rating: 10 },
  { name: "Hasura GraphQL", group: "Backend", logo: hasuralogo, rating: 10 },
  { name: "HTML", group: "Languages", logo: htmlogo, rating: 10 },
  { name: "C++", group: "Languages", logo: cpplogo, rating: 10 },
  { name: "PyTorch", group: "Frameworks", logo: pytorchlogo, rating: 10 },
];

const BarLogo = styled(motion.img)`
  height: 2rem;
  flex-basis: 5%;
`;
const BarDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  align-content: center;
  margin: 1rem 0 1rem 2rem;
`;

const BarMax = styled(motion.div)`
  flex-basis: 80%;
  height: 2rem;
`;
const Bar = styled(motion.div)<any>`
  height: 2rem;
  width: ${(props: any) => props.rating + "%"};
`;
const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [FilteredTabs, setFilteredTabs] = useState(
    tabrating.filter((tab) => tab.group === tabs[0])
  );
  const [isHovering, setIsHovering] = useState(false);

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
    <Reveal width="fit-content">
      <div className="flex-column justify-center">
        <TabContainer>
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              setFilteredTabs={setFilteredTabs}
              key={tab}
            />
          ))}
        </TabContainer>

        {FilteredTabs.map((tab, index) => {
          const { name, group, logo, rating } = tab;
          return (
            <ul key={index} className="w-full">
              <BarDiv onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <BarLogo
                  src={logo}
                  className={
                    logo.includes("hasura") && themeContext.color === "#fff"
                      ? "invert"
                      : ""
                  }
                />

                <BarMax>
                  <Bar
                    variants={{
                      hidden: {
                        width: 0,
                      },
                      visible: {
                        width: 100,
                      },
                    }}
                    rating={rating}
                    className="z-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md"
                  />
                </BarMax>
              </BarDiv>
            </ul>
          );
        })}
      </div>
    </Reveal>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
  setFilteredTabs,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  setFilteredTabs: Dispatch<SetStateAction<tabratingType[]>>;
}) => {
  return (
    <TabButton
      onClick={() => {
        setSelected(text);
        setFilteredTabs(tabrating.filter((tab) => tab.group === text));
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

const TabContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
export default ChipTabs;
