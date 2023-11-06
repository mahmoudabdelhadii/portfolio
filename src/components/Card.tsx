import styled, { css } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
type CardProps = {
  index: number;
  title: string;
  subtitle: string;
  logo: string;
  company: string;
  fromDate: string;
  toDate: string;
  description: string;
};
const Card: React.FunctionComponent<CardProps> = ({
  index,
  title,
  company,
  logo,
  description,
  fromDate,
  toDate,
}: CardProps) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);
  // const theme = useTheme();
  return (
    <>
      <CardLink
        index={index}
        ref={card}
        isCardOpened={isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              // @ts-ignore
              width: card?.current?.clientWidth,
              // @ts-ignore
              height: card?.current?.clientHeight,
            });
          }
        }}
      >
        <Reveal from="left" delay={index * 0.5}>
          <CardWrapper>
            <CardHead>
              <Seperator isCardOpened={isCardOpened}>|</Seperator>
              <CardImage isCardOpened={isCardOpened} src={logo} />
              <div className="flex flex-col pl-4 m-1">
                <Company>{company}</Company>

                <JobTitle>{title}</JobTitle>
                <Date>
                  {fromDate} - {toDate}
                </Date>
              </div>
            </CardHead>
            <CardBody></CardBody>
          </CardWrapper>
        </Reveal>

        {isCardOpened && (
          <CardDescription initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {description}
          </CardDescription>
        )}
      </CardLink>

      {isCardOpened && (
        <>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            onClick={() => setIsCardOpened(false)}
          />
        </>
      )}
    </>
  );
};
interface CardLinkProps {
  index: number;
  isCardOpened: boolean;
  theme: any;
}

const CardBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 1.3rem;
  margin: 0;
`;
const CardLink = styled(motion.div)<CardLinkProps>`
  height: 10rem;
  width: auto;
  border-radius: 1rem;
  cursor: pointer;
  border: ${(props: any) =>
    props.isCardOpened ? "2px solid #689af8" : "none"};

  ${(props: any) =>
    props.isCardOpened &&
    css`
      pointer: none;
      width: min(30rem, 95%);
      height: calc(80% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 20;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      padding: 1rem;

      color: ${props.theme.color};
      background: ${props.theme.background};
    `}
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
`;
const CardHeadText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JobTitle = styled(motion.p)`
  margin: 0;
`;

const Date = styled(motion.p)`
  color: rgb(103 103 103);
  margin: 0.5rem 0 0 0;
`;
const Company = styled(motion.h5)`
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`;

interface SeperatorProps {
  isCardOpened: boolean;
}
const Seperator = styled(motion.span)<SeperatorProps>`
  color: rgb(104 154 248);
  font-weight: 700;
  font-size: 1.5rem;
  display: ${(props: any) => (props.isCardOpened ? "none" : "")};
`;
interface CardHeadProps {
  isCardOpened: boolean;
}
const CardHead = styled(motion.div)<CardHeadProps>`
  display: flex;
  flex-direction: row;

  ${(props: any) =>
    props.isCardOpened &&
    css`
      height: 10rem;
      padding: 1rem;
      justify-content: flex-start;
      gap: 5rem;
      align-items: center;
      color: ${props.theme.color};
    `}
`;

interface CardHeaderProps {
  isCardOpened: boolean;
}
const CardHeader = styled(motion.h2)<CardHeaderProps>`
  margin: 0.5rem 0;
  font-size: 1.5em;
  font-weight: 700;
  color: ${(props: any) =>
    props.isCardOpened ? props.theme.secondary : props.theme.secondary};
`;
interface CardSubtitleProps {
  isCardOpened: boolean;
}
const CardSubtitle = styled(motion.p)<CardSubtitleProps>`
  font-weight: 700;
  font-size: 1em;
  margin: 0 0 1rem;
  color: ${(props: any) =>
    props.isCardOpened ? props.theme.subtitle : props.theme.subtitle};
`;

const CardDescription = styled(motion.p)`
  font-weight: 100;
  font-size: 0.7em;
  flex-basis: 80%;
  color: ${(props: any) => props.theme.color};
`;
interface CardImageProps {
  layout?: string;
  isCardOpened: boolean;
}
const CardImage = styled(motion.img)<CardImageProps>`
  display: none;
  width: auto;
  height: 4rem;
  ${(props: any) =>
    props.isCardOpened &&
    css`
      display: flex;
      width: auto;
      height: 5.5rem;
    `}
`;

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

const AbsoluteCardContainer = styled.div`
  width: min(50rem, 90vw);
  padding: 1rem;
  position: relative;
`;
export default Card;
