import * as React from "react";
import { Wrapper } from "./PageComponents";
import HoverCards from "./HoverCards";
import { motion } from "framer-motion";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Projects: React.FunctionComponent<any> = () => {
  const [page, setPage] = React.useState(0);
  const [isHovered, setHovered] = React.useState(false);
  return (
    <Wrapper
      name="Recent Projects"
      showTitle
      ParentClass="flex justify-around flex-col w-full h-fit md:h-screen md:justify-center"
      SubParentClass="flex justify-center items-center md:justify-start md:items-start"
      HeaderClass="text-center"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="flex w-full justify-between items-center"
      >
        <div className="h-full w-1/12 flex justify-start">
          <motion.div
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <motion.svg
                height="40"
                width="40"
                style={{
                  position: "absolute",
                  zIndex: -1,
                  left: "0",
                  top: "0",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? "0.1" : "0" }}
                className={`${page === 0 ? "hidden" : ""}`}
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  stroke="grey"
                  stroke-width="0"
                  fill="grey"
                />
              </motion.svg>
              <MdArrowBackIosNew
                size={40}
                style={{
                  position: "absolute",
                  zIndex: 10,
                  left: "0",
                  top: "0",
                }}
                className={`${page === 0 ? "hidden" : ""}`}
                onClick={() => {
                  if (page > 0) {
                    setPage(page - 1);
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
        <HoverCards
          data-aos="zoom-out-down"
          page={page}
          className="basis-5/6"
        />
        <div className="h-full w-1/12 flex justify-end">
          <motion.div
            whileHover={{ scale: 1.3 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <motion.svg
                height="40"
                width="40"
                style={{
                  position: "absolute",
                  zIndex: -1,
                  left: "0",
                  top: "0",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? "0.1" : "0" }}
                className={`${page === 1 ? "hidden" : ""}`}
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  stroke="grey"
                  stroke-width="0"
                  fill="grey"
                />
              </motion.svg>
              <MdArrowForwardIos
                size={40}
                className={`${page === 1 ? "hidden" : ""}`}
                onClick={() => {
                  setPage(page + 1);
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
