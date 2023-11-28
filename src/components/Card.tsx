import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Reveal from "./Reveal";
import { StyledButton } from "./StyledButton";
import Image from "next/image";
import { TerminalHeader } from "./CommandLineForm";
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
  useEffect(() => {
    isCardOpened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isCardOpened]);
  // const theme = useTheme();
  return (
    <>
      <motion.div
        className={`${
          isCardOpened
            ? "cursor-auto border-none bg-white dark:bg-black border-[#689af8] md:w-[min(30rem,95%)] md:h-[calc(100%_-_20rem)] overflow-y-auto overflow-x-hidden fixed z-20 flex justify-start flex-col m-auto p-0 md:p-0 inset-0 w-[80vw] h-[80vh] rounded-md"
            : "cursor-pointer"
        } h-fit w-fit`}
        ref={card}
        layout
        onClick={() => {
          if (!isCardOpened) setIsCardOpened(true);

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
          <motion.div className="flex flex-col justify-start items-center w-full">
            <motion.div
              className={`${
                isCardOpened
                  ? "h-[calc(100vh_-_20rem)] w-full md:p-0 justify-start gap-4 items-center flex-col "
                  : " "
              } flex `}
            >
              <motion.span
                className={`${
                  isCardOpened ? "hidden" : ""
                } text-[rgb(104_154_248)] font-bold text-2xl`}
              >
                |
              </motion.span>
              {isCardOpened && (
                <TerminalHeader
                  name={company + " / " + title}
                  setIsCardOpened={setIsCardOpened}
                />
              )}
              <motion.div
                className={`${isCardOpened ? "flex w-fit h-fit" : "hidden"}`}
              >
                <Image src={logo} alt="logo" height={30} width={40} />
              </motion.div>
              <div className="flex flex-col pl-4 m-1">
                <h5 className="font-bold text-2xl leading-8 m-0">{company}</h5>

                <p className="m-0">{title}</p>
                <p className="text-[rgb(103_103_103)] mt-2 mb-0 mx-0">
                  {fromDate} - {toDate}
                </p>
              </div>
            </motion.div>
            <div className=" flex flex-col pl-[1.3rem] m-0"></div>
          </motion.div>
        </Reveal>

        {isCardOpened && (
          <motion.p
            className="font-thin text-[0.7em] basis-4/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {description}
          </motion.p>
        )}

        {isCardOpened && (
          <div className="md:hidden">
            <StyledButton
              onClick={() => {
                setIsCardOpened(false);
              }}
            >
              close
            </StyledButton>
          </div>
        )}
      </motion.div>

      {isCardOpened && (
        <>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <motion.div
            className=" h-screen w-screen fixed z-[11] top-0 right-0 left-0 bottom-0 cursor-pointer  bg-white  dark:bg-black opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            onClick={() => setIsCardOpened(false)}
          />
        </>
      )}
    </>
  );
};

export default Card;
