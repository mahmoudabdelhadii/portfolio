import React, { useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { TerminalHeader } from "../Contact/CommandLineForm";
import type { CardType } from "./HoverCards";
const HoverCard = ({ card }: { card: CardType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="grid place-content-center  text-slate-900">
      <TiltCard card={card} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const TiltCard = ({
  card,
  isOpen,
  setIsOpen,
}: {
  card: CardType;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const cardr = useRef(null);
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
    if (isOpen) {
      x.set(0);
      y.set(0);
    } else {
      const rect = (e.target as HTMLElement).getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <AnimatePresence>
      <>
        <motion.div
          ref={cardr}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            window.open(card.link, "_blank");
            setIsOpen(false);
            if (!isOpen) {
              setCardDimensions({
                // @ts-ignore
                width: card?.current?.clientWidth,
                // @ts-ignore
                height: card?.current?.clientHeight,
              });
            }
          }}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className={`${
            isOpen
              ? "h-[80vh] w-[80vw] md:h-[70vh] md:w-[70vw] place-content-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 m-auto z-20 flex justify-start flex-col p-4"
              : " hover:cursor-pointer relative h-[20vh] w-[60vw] md:h-[20vw] md:w-[31vw] rounded-xl bg-blue-300"
          } `}
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className={`${
              !isOpen
                ? "absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
                : ""
            }`}
          >
            <div
              key={card.id}
              className={`${
                isOpen
                  ? "z-30 relative h-[78vh] w-[78vw] md:h-[68vh] md:w-[68vw] md:overflow-hidden bg-white dark:bg-black"
                  : "relative h-[18vh] w-[55vw] md:h-[18vw] md:w-[29vw] md:overflow-hidden bg-neutral-200"
              }`}
            >
              {isOpen && (
                <TerminalHeader setIsCardOpened={setIsOpen} name={card.title} />
              )}
              <div
                style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`${
                  isOpen
                    ? "w-1/4 h-1/4"
                    : "absolute inset-0 z-0 transition-transform rounded-xl duration-300 group-hover:scale-110"
                }`}
              ></div>
              <div
                className={`${
                  isOpen
                    ? "hidden"
                    : "absolute inset-0 z-20 grid place-content-end"
                }`}
              >
                <p className=" bg-gradient-to-br from-white/20 to-white/0 p-4 text-2xl font-black uppercase text-black ">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {false && (
          <div className="absolute top-0 left-0 right-0 bottom-0 z-20 w-screen h-screen bg-slate-500/20" />
        )}
      </>
    </AnimatePresence>
  );
};

export default HoverCard;
