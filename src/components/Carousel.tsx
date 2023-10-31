import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import pythonlogo from "../assets/JavaScriptlogo.png";
const Example = () => {
  return <HorizontalScrollCarousel />;
};

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
  return (
    <Cardiv key={card.id}>
      <Cardiv2
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Cardiv2>
      <Cardiv3>
        <Cardp>{card.title}</Cardp>
      </Cardiv3>
    </Cardiv>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: pythonlogo,
    title: "Title 1",
    id: 1,
  },
  {
    url: pythonlogo,
    title: "Title 2",
    id: 2,
  },
  {
    url: pythonlogo,
    title: "Title 3",
    id: 3,
  },
  {
    url: pythonlogo,
    title: "Title 4",
    id: 4,
  },
  {
    url: pythonlogo,
    title: "Title 5",
    id: 5,
  },
  {
    url: pythonlogo,
    title: "Title 6",
    id: 6,
  },
  {
    url: pythonlogo,
    title: "Title 7",
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
  height: 250vh;
  width: 70vw;
  scroll-behaviour: smooth;
`;

const Div4 = styled.div`
  display: flex;
  overflow: hidden;
  position: sticky;
  top: 0;
  align-items: center;
  height: 100vh;
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
