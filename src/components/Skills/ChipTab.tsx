import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import SkillsData from "./SkillsData";
import "rsuite/dist/rsuite.min.css";
import FilterButtons from "./FilterButtons";
import SkillCardItem from "./SkillCardItem";

const delay = 4000;
const ChipTabs = () => {
  // const [current, setCurrent] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("" as string);
  const [item, setItem] = useState(SkillsData);

  const timeoutRef = useRef(null as any);

  const menuItems = [...new Set(SkillsData.map((Val) => Val.group))];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const filterItem = (curcat) => {
    const newItem = SkillsData.filter((newVal) => {
      return newVal.group === curcat;
    });
    setSelected(curcat);
    setItem(newItem);
  };

  useEffect(() => {
    resetTimeout();
    const curr = menuItems.findIndex((x) => x === selected);
    const next = curr === menuItems.length - 1 ? 0 : curr + 1;
    timeoutRef.current = setTimeout(() => {
      if (!clicked) {
        filterItem(menuItems[next]);
      } else {
        resetTimeout();
        filterItem(menuItems[curr]);

        timeoutRef.current = setTimeout(() => {
          setClicked(false);
        }, 6000);
      }
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [item, clicked]);

  useEffect(() => {
    filterItem(menuItems[0]);
  }, []);
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <FilterButtons
        filterItem={filterItem}
        setClicked={setClicked}
        selected={selected}
        menuItems={menuItems}
      />

      <motion.div
        // ref={ref}
        layout
        animate={{ borderLeft: "1px solid #60A5FA" }}
        transition={{
          borderLeft: { ease: "linear" },
          layout: { duration: 1 },
        }}
        className=" w-11/12 h-full mb-4 min-h-max border-blue-400"
      >
        <SkillCardItem item={item} />
      </motion.div>
    </div>
  );
};

export default ChipTabs;
