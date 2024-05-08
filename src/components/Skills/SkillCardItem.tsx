import { motion } from "framer-motion";
import Image from "next/image";
import { Popover, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const SkillCardItem = ({ item }) => {
  return (
    <>
      {item.map((Val, index) => {
        const transition = {
          duration: 1,
          delay: index * 0.2,
          ease: "easeInOut",
        };

        const variants = {
          enter: {
            opacity: 0,
            width: "0%",
          },
          animate: {
            opacity: 1,
            width: ["0%", Val.rating.toString() + "%"],
            transition,
          },
        };

        return (
          <motion.div
            key={index}
            className="flex justify-between items-center my-4 ml-8 h-6 md:h-10"
            data-aos="fade-up"
          >
            <Whisper
              followCursor
              placement="top"
              speaker={<Popover arrow={false}>{Val.name}</Popover>}
            >
              <div
                className={`relative w-auto h-10 md:h-10 ${
                  Val.logo.toString().includes("hasura") ||
                  Val.logo.toString().includes("next") ||
                  Val.logo.toString().includes("aws")
                    ? "dark:invert"
                    : ""
                }`}
              >
                <Image
                  src={Val.logo}
                  alt={Val.name}
                  layout="fixed"
                  width={40} // Corresponds to w-10
                  height={40} // Corresponds to the larger of the heights specified
                  sizes="(max-width: 767px) 40px, 40px"
                  objectFit="contain"
                />
              </div>
            </Whisper>

            <div className="basis-4/5 h-6 md:h-10 flex w-full">
              <motion.div
                variants={variants}
                initial="enter"
                animate="animate"
                exit="enter"
                className={`h-5 md:h-10 w-[${Val.rating}%] z-0 bg-gradient-to-br from-blue-300 to-violet-300`}
              />
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default SkillCardItem;
