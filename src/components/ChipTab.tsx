import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { StyledButton } from "./StyledButton";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import "rsuite/dist/rsuite.min.css";
import { Popover, Whisper } from "rsuite";
import Reveal from "./Reveal";
const tabs = ["Languages", "Frontend", "Backend", "Frameworks", "Cloud"];
interface tabratingType {
  name: string;
  group: string;
  logo: string;
  rating: number;
}

const tabrating: tabratingType[] = [
  {
    name: "JavaScript",
    group: "Languages",
    logo: "/assets/JavaScriptlogo.png",
    rating: 100,
  },
  { name: "Vue", group: "Frontend", logo: "/assets/VueLogo.png", rating: 70 },
  {
    name: "React",
    group: "Frontend",
    logo: "/assets/Reacticon.png",
    rating: 80,
  },
  {
    name: "Python",
    group: "Languages",
    logo: "/assets/Pythonlogo.png",
    rating: 30,
  },
  {
    name: "OCP",
    group: "Cloud",
    logo: "/assets/OpenShift-LogoType.svg.png",
    rating: 50,
  },
  { name: "SQL", group: "Languages", logo: "/assets/sqllogo.svg", rating: 40 },
  {
    name: "Nuxt",
    group: "Frameworks",
    logo: "/assets/nuxticon.png",
    rating: 45,
  },
  {
    name: "NodeJS",
    group: "Backend",
    logo: "/assets/nodejslogo.png",
    rating: 87,
  },
  {
    name: "TensorFlow",
    group: "Frameworks",
    logo: "/assets/Tensorflowlogo.png",
    rating: 79,
  },
  {
    name: "Docker",
    group: "Cloud",
    logo: "/assets/dockerlogo.png",
    rating: 10,
  },
  {
    name: "TypeScript",
    group: "Languages",
    logo: "/assets/Typescriptlogo.png",
    rating: 20,
  },
  {
    name: "Azure Kubernetes Service",
    group: "Cloud",
    logo: "/assets/akslogo-removebg-preview.png",
    rating: 30,
  },
  { name: "AWS", group: "Cloud", logo: "/assets/awslogo.png", rating: 50 },
  {
    name: "C",
    group: "Languages",
    logo: "/assets/clogo-removebg-preview.png",
    rating: 70,
  },
  {
    name: "C#",
    group: "Languages",
    logo: "/assets/csharplogo-removebg-preview.png",
    rating: 60,
  },
  { name: "CSS", group: "Languages", logo: "/assets/css.webp", rating: 30 },
  {
    name: "Hasura GraphQL",
    group: "Backend",
    logo: "/assets/hasuralogo.png",
    rating: 35,
  },
  { name: "HTML", group: "Languages", logo: "/assets/html.webp", rating: 45 },
  {
    name: "C++",
    group: "Languages",
    logo: "/assets/cpplogo-removebg-preview.png",
    rating: 55,
  },
  {
    name: "PyTorch",
    group: "Frameworks",
    logo: "/assets/PyTorchlogo.png",
    rating: 65,
  },
];

const delay = 4000;
const ChipTabs = () => {
  const [current, setCurrent] = useState(0);
  const [clicked, setClicked] = useState(false);
  const timeoutRef = useRef(null as any);
  const [selected, setSelected] = useState(tabs[current]);
  const [FilteredTabs, setFilteredTabs] = useState(
    tabrating.filter((tab) => tab.group === tabs[current])
  );
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

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <motion.div className="hidden w-full md:flex md:gap-2 flex-wrap md:flex-row md:justify-evenly mb-8">
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

      <motion.div
        ref={ref}
        layout
        animate={{ borderLeft: "1px solid #60A5FA" }}
        transition={{
          borderLeft: { ease: "linear" },
          layout: { duration: 1 },
        }}
        className=" w-11/12 h-full mb-4 min-h-max border-blue-400"
      >
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
              className="flex justify-between items-center my-4 ml-8 h-6 md:h-10"
              data-aos="fade-up"
            >
              <Reveal from="left" delay={index * 0.1}>
                <Whisper
                  followCursor
                  placement="top"
                  speaker={<Popover arrow={false}>{name}</Popover>}
                >
                  <motion.div
                    ref={ref}
                    key={index}
                    className={
                      (logo.toString().includes("hasura")
                        ? "dark:invert"
                        : "") + " w-10 h-6 md:h-10"
                    }
                    style={{
                      backgroundImage: `url(${logo})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  {/* <Image src={logo} alt={name} fill sizes="" /> */}
                </Whisper>
              </Reveal>

              <div className="basis-4/5 h-6 md:h-10 flex w-full">
                <motion.div
                  variants={variants}
                  initial="enter"
                  animate="animate"
                  exit="enter"
                  className={`h-5 md:h-10 w-[${rating}%] z-0 bg-gradient-to-br from-blue-300 to-violet-300`}
                />
              </div>
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
    <div className="block">
      <StyledButton
        onClick={() => {
          setSelected(text);
          setFilteredTabs(tabrating.filter((tab) => tab.group === text));
          setClicked(true);
        }}
        className={`${
          selected
            ? "text-white "
            : "text-slate-300 hover:text-slate-200 hover:bg-slate-300 "
        } text-sm transition-colors px-2.5 py-0.5 rounded-md flex flex-row`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 border-blue-500 border-t border-r"
          ></motion.span>
        )}
      </StyledButton>
    </div>
  );
};

export default ChipTabs;
