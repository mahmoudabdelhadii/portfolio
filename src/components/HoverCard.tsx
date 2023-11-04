import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const HoverCard = ({ card }: { card: CardType }) => {
  return (
    <div className="grid place-content-center text-slate-900">
      <TiltCard card={card} />
    </div>
  );
};

const TiltCard = ({ card }: { card: CardType }) => {
  const [isCardOpened, setIsCardOpened] = useState<boolean>(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-80 w-96 rounded-xl bg-blue-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div
          key={card.id}
          className="group relative h-[19.5rem] w-[23.5rem] overflow-hidden bg-neutral-200"
        >
          <div
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform rounded-xl duration-300 group-hover:scale-110"
          ></div>
          <div className="absolute inset-0 z-10 grid place-content-end">
            <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-black ">
              {card.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HoverCard;
