import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import f1gif from "../assets/ezgif-1-a134de1717.gif";
import pcagif from "../assets/PCA.gif";
import HoverCard from "./HoverCard";
const HoverCards = ({
  page,
  className,
}: {
  page: number;
  className: string;
}) => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: ((i - 1) % 3) * 0.3,
        duration: 0.5,
      },
    }),
    hidden: { opacity: 0, x: -100 },
    exit: (i: number) => ({
      opacity: 0,
      x: 100,
      transition: {
        delay: ((i - 1) % 3) * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className={`${className}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="grid grid-cols-4 grid-rows-4 gap-4 place-content-center"
        key={page}
      >
        {cards
          .filter((card) => card.id >= page * 4 && card.id < (page + 1) * 4)
          .map((card) => {
            return (
              <motion.div
                key={card.id}
                className={`${
                  card.id % 3 === 1
                    ? "grid row-start-2 row-span-2 col-start-1 col-span-2"
                    : card.id % 3 === 2
                    ? "grid col-start-3 col-span-2 row-start-1 row-span-2"
                    : "grid col-start-3 col-span-2 row-start-3 row-span-2"
                }`}
                initial="hidden"
                custom={card.id}
                variants={variants}
                animate="visible"
                exit="exit"
              >
                <Card card={card} key={card.id} />
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return <HoverCard card={card} key={card.id} />;
};

export default HoverCards;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: pcagif,
    title: "Title 1",
    id: 1,
  },
  {
    url: pcagif,
    title: "Title 2",
    id: 2,
  },
  {
    url: pcagif,
    title: "Title 3",
    id: 3,
  },
  {
    url: pcagif,
    title: "Title 4",
    id: 4,
  },
  {
    url: pcagif,
    title: "Title 5",
    id: 5,
  },

  {
    url: f1gif,
    title: "Formula One Predictor",
    id: 6,
  },
];
