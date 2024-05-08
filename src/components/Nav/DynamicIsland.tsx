import { Button } from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Toggle } from "./themeToggle";

import { Link } from "react-scroll";
import Image from "next/image";
import { LinkStyle } from "../StyledButton";

type NavProps = {
  checked: boolean;
  onChange: any;
};

const DynamicIsland: React.FunctionComponent<NavProps> = ({
  onChange,
  checked,
}) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
      setShowNav(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={`${
        checked ? " bg-slate-900 text-slate-50 " : "bg-black text-slate-50 "
      } z-[100] fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto font-medium flex max-sm:justify-between gap-4 px-3 max-w-7xl items-center rounded-full font-mono h-14 p-5 overflow-hidden`}
      variants={{
        long: { maxWidth: 950 },
        short: { maxWidth: 280 },
        hideNav: {
          height: 56,
          borderRadius: 50,

          alignItems: "center",
          transition: { delay: 0, duration: 0.3 },
        },
        showNav: {
          height: 220,
          borderRadius: 22,
          alignItems: "start",
          transition: { delay: 0 },
        },
      }}
      initial={"short"}
      animate={[hidden ? "short" : "long", showNav ? "showNav" : "hideNav"]}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 14,
      }}
    >
      <div className=" min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        {/* <Image
          src="/assets/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="invert dark:invert-0"
        /> */}

        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={40} // Specify the exact width
          height={40} // Specify the exact height
          priority={true} // If it's critical for the initial load, keep the priority
          className="invert dark:invert-0"
        />
      </div>
      <motion.ul
        className={`w-full text-white ${
          showNav
            ? "[--display-from:none] [--display-to:flex]"
            : "max-sm:[--display-from:none] sm:[--display-to:flex]"
        }  [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-center gap-10 max-sm:gap-5 max-sm:pt-10`}
        variants={{
          hidden: {
            display: "var(--display-from, none)",
            opacity: "var(--opacity-from, 1)",
            transition: { duration: 0.6, delay: 0 },
          },
          visible: {
            display: "var(--display-to, none)",
            opacity: "var(--opacity-to, 1)",
            transition: { duration: 0.6, delay: 0 },
          },
        }}
        initial={"hidden"}
        animate={[
          hidden && !showNav ? "hidden" : "visible",
          showNav ? "visible" : "",
        ]}
      >
        <li className="">
          <Link
            className="text-white"
            to="Experience"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            {"Experience"}
          </Link>
        </li>
        <li>
          <Link
            className="text-white"
            to="Projects"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            {"Projects"}
          </Link>
        </li>
        <li>
          <Link
            className="text-white"
            to="Contact"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            {"Contact"}
          </Link>
        </li>
        <li>
          <Toggle checked={checked} onChange={onChange} size={20} />
        </li>
      </motion.ul>

      <motion.div
        className="w-full [--display-from:none][--display-to:inline-block] "
        variants={{
          hidden: {
            display: "var(--display-from, none)",
            transition: { delay: 0, duration: 0.3 },
          },
          visible: {
            display: "var(--display-to)",
            transition: { delay: 0.2, duration: 0.3 },
          },
        }}
        initial="hidden"
        animate={hidden ? "visible" : "hidden"}
      >
        <Link to="Contact" spy={true} smooth={true} duration={500}>
          <Button variant={"accent"} className="w-full text-white">
            Contact
          </Button>
        </Link>
      </motion.div>

      <Button
        size={"icon"}
        variant={"ghost"}
        className="rounded-full min-w-[40px] sm:hidden invert dark:invert-0"
        onClick={() => {
          setHidden(false);
          setShowNav((prev) => !prev);
        }}
      >
        {showNav ? <ChevronUp /> : <ChevronDown />}
      </Button>
    </motion.nav>
  );
};
export default DynamicIsland;
