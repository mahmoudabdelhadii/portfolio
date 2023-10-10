// import * as React from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Tile, TileExpanded } from "./ExperienceTile";
import RBClogo from "../assets/RBClogo.png";
import { Console } from "console";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const ItemVar = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

//  animation for  popup

const variants = {
  visible: {
    scale: 1.1,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    y: -50,
    x: -100,
    cursor: "pointer",
    transition: { duration: 1, type: "spring" },
  },
  hidden: { scale: 1, opacity: 0 },
};
const items: {
  id: string | any;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
}[] = [
  {
    id: "1",
    logo: RBClogo,
    title: "Software Engineer",
    subtitle: "RBC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
  },
  {
    id: "2",
    logo: RBClogo,
    title: "Data Science Engineer",
    subtitle: "RBC2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
  },
  {
    id: "3",
    logo: RBClogo,
    title: "Software Engineer",
    subtitle: "RBC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate sapiente! Enim tenetur sint, aspernatur earum eum libero officia eius odit, molestiae debitis reiciendis ipsam nulla nisi ut cum?",
  },
];

const Experience: React.FunctionComponent<any> = () => {
  const [selectedId, setSelectedId] = useState(null as string | null);
  const [Item, setItem] = useState({
    id: null,
    logo: RBClogo,
    title: "",
    subtitle: "RBC",
    description: "DESC3",
  });

  return (
    <Wrapper variants={container} initial="hidden" animate="visible">
      {items.map((item) => {
        return (
          <motion.div
            variants={ItemVar}
            onClick={() => {
              setItem(item);
              setSelectedId(item.id);
              // console.log(item);
            }}
          >
            <Tile
              logo={item.logo}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              id={item.id}
              key={item.id}
            />
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
            exit={{ opacity: 0 }}
            variants={variants}
            animate={selectedId ? "visible" : "hidden"}
          >
            <TileExpanded
              logo={Item.logo}
              title={Item.title}
              subtitle={Item.subtitle}
              description={Item.description}
              exit={{ scale: 1, opacity: 0 }}
              variants={variants}
              animate={selectedId ? "visible" : "hidden"}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

const ExpandedItem = styled(motion.div)`
  height: 20rem;
  width: 20rem;
  background: #fff;
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.5rem;
`;
export default Experience;
