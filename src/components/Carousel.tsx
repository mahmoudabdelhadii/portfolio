import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import f1gif from "../assets/ezgif-1-a134de1717.gif";
import pcagif from "../assets/PCA.gif";
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

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3.75rem;
  line-height: 1rem;
`;

export const PlusSign = styled.span`
  color: rgb(104 154 248);
  margin-left: 0.5rem;
  margin-top: 1rem;
  font-size: 3rem;
  line-height: 2rem;
  vertical-align: sub;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <Section3 ref={targetRef}>
      <Div4>
        <MotionDiv style={{ x }}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </MotionDiv>
      </Div4>
    </Section3>
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
    url: pcagif,
    title: "Title 6",
    id: 6,
  },
  {
    url: f1gif,
    title: "Formula One Predictor",
    id: 7,
  },
];

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
`;

const Span2 = styled.span`
  font-weight: 600;
  text-transform: uppercase;
`;

const Section3 = styled.section`
  position: relative;
  height: 200vh;
  width: 70vw;
  scroll-behaviour: smooth;
`;

const Div4 = styled.div`
  display: flex;
  overflow: hidden;
  position: sticky;
  top: 0;
  align-items: center;
  height: 70vh;
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const Cardiv = styled.div`
  overflow: hidden;
  position: relative;
  height: 450px;
  width: 450px;
  background-color: rgb(229 229 229);
`;

const Cardiv2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-duration: 300ms;
`;

const Cardiv3 = styled.div`
display: grid 
position: absolute; 
top: 0;
right: 0;
bottom: 0;
left: 0; 
z-index: 10; 
place-content: center; 

`;

const Cardp = styled.p`
  padding: 2rem;
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 900;
  color: #ffffff;
  text-transform: uppercase;
  backdrop-filter: blur(16px);
`;
