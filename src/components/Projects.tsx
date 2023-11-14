import * as React from "react";
import { Wrapper } from "./PageComponents";
import HoverCards from "./HoverCards";
import { motion } from "framer-motion";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Projects: React.FunctionComponent<any> = () => {
  const [page, setPage] = React.useState(0);
  return (
    <Wrapper
      name="Recent Projects"
      showTitle
      ParentClass="flex justify-around flex-col align-start w-full h-screen md:justify-center md:h-[80vh]"
      SubParentClass="flex justify-center items-center md:justify-start md:items-start"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-offset="300"
        className="flex w-full justify-between items-center"
      >
        <div className="h-full w-1/12 flex justify-start">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <MdArrowBackIosNew
              size={40}
              className={`${page === 0 ? "hidden" : ""}`}
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
            />
          </motion.div>
        </div>
        <HoverCards
          data-aos="zoom-out-down"
          page={page}
          className="basis-5/6"
        />
        <div className="h-full w-1/12 flex justify-end">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <MdArrowForwardIos
              size={40}
              className={`${page === 1 ? "hidden" : ""}`}
              onClick={() => {
                setPage(page + 1);
              }}
            />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
