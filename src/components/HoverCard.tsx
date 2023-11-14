import React, { useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import styled from "styled-components";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
            setIsOpen(true);
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
              ? "grid h-[80vh] w-[80vw] md:h-[60vh] md:w-[65vw] place-content-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 m-auto z-20 flex justify-start flex-col p-4"
              : "relative h-[20vh] w-[60vw] md:h-[20vw] md:w-[31vw] rounded-xl bg-blue-300 cursor-pointer"
          } `}
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
              className={`${
                isOpen
                  ? "group relative h-[78vh] w-[78vw] md:h-[59vh] md:w-[64vw] md:overflow-hidden bg-neutral-200"
                  : "group relative h-[18vh] w-[55vw] md:h-[18vw] md:w-[29vw] md:overflow-hidden bg-neutral-200"
              }`}
            >
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
              <div className="absolute inset-0 z-10 grid place-content-end">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-black ">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {isOpen && (
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </>
    </AnimatePresence>
  );
};

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${(props: any) => props.theme.background};
  opacity: 0.5;
`;
export default HoverCard;
