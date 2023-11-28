import { motion } from "framer-motion";
// import f1gif from "../assets/ezgif-1-a134de1717.gif";
// import pcagif from "../assets/PCA.gif";
import HoverCard from "./HoverCard";
import Image from "next/image";
// import amaaz from "../assets/amaaz.gif";
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
        className="grid grid-cols-1 grid-rows-3 gap-2 md:grid-cols-4 md:grid-rows-4 md:gap-4 place-content-center"
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
                    ? "grid row-start-1 row-span-1 col-start-1 col-span-1 md:row-start-2 md:row-span-2 md:col-start-1 md:col-span-2"
                    : card.id % 3 === 2
                    ? "grid row-start-2 row-span-1 col-start-1 col-span-1 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-2"
                    : "grid row-start-3 row-span-1 col-start-1 col-span-1 md:col-start-3 md:col-span-2 md:row-start-3 md:row-span-2"
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
    url: "/assets/portfolio.gif",
    title: "My Portfolio",
    id: 1,
  },
  {
    url: "/assets/ezgif-1-a134de1717.gif",
    title: "Formula One Predictor",
    id: 2,
  },
  {
    url: "/assets/amaaz.gif",
    title: "Amazoom C# Automation",
    id: 3,
  },
  {
    url: "/assets/PCA.gif",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/assets/PCA.gif",
    title: "Title 5",
    id: 5,
  },

  {
    url: "/assets/PCA.gif",
    title: "Formula One Predictor",
    id: 6,
  },
];
