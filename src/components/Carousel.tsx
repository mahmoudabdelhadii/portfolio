import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HoverCard from "./HoverCard";
import Reveal from "./Reveal";
const Carousel = () => {
  return (
    <>
      <Reveal from="bottom" delay={0.8}>
        <HorizontalScrollCarousel />
      </Reveal>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return <HoverCard card={card} key={card.id} />;
};

export default Carousel;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/assets/PCA.gif",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/assets/PCA.gif",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/assets/PCA.gif",
    title: "Title 3",
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
    title: "Title 6",
    id: 6,
  },
  {
    url: "/assets/ezgif-1-a134de1717.gif",
    title: "Formula One Predictor",
    id: 7,
  },
];
