import { StyledButton } from "../StyledButton";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import type { SkillsData } from "./SkillsData";
const FilterButtons = ({
  filterItem,
  selected,
  menuItems,
  setClicked,
}: {
  filterItem: Function;
  selected: string;
  menuItems: Array<string>;
  setClicked: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="hidden w-full md:flex md:gap-2 flex-wrap md:flex-row md:justify-evenly mb-8">
        {menuItems.map((Val, id) => {
          return (
            <StyledButton
              onClick={() => {
                filterItem(Val);
                setClicked(true);
              }}
              className={`${
                Val === selected
                  ? "dark:text-white text-black "
                  : "dark:text-slate-300 text-black hover:text-slate-200 hover:bg-slate-300 "
              } text-sm transition-colors px-2.5 py-0.5 rounded-md flex flex-row`}
              key={id}
            >
              <span className="relative z-10">{Val}</span>

              {Val === selected && (
                <motion.span
                  layoutId="pill-tab"
                  transition={{ type: "spring", duration: 0.5 }}
                  className="absolute inset-0 z-0 border-blue-500 border-t border-r"
                ></motion.span>
              )}
            </StyledButton>
          );
        })}
      </div>
    </>
  );
};

export default FilterButtons;
