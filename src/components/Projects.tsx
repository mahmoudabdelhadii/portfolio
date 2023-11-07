import * as React from "react";
import styled from "styled-components";
import { Wrapper } from "./PageComponents";
import Carousel from "./Carousel";
import HoverCards from "./HoverCards";
import { motion } from "framer-motion";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Projects: React.FunctionComponent<any> = () => {
  const [page, setPage] = React.useState(0);
  return (
    <Wrapper
      name="Recent Projects"
      showTitle
      ParentClass="flex justify-center flex-col align-start w-full h-screen"
      SubParentClass="flex justify-center items-center md:justify-start md:items-start"
    >
      <div className="flex w-full justify-between items-center">
        <div className="h-full w-1/12 flex justify-start">
          <motion.div whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
            <MdArrowBackIosNew
              className={`${page === 0 ? "hidden" : ""}`}
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
            />
          </motion.div>
        </div>
        <HoverCards page={page} className="basis-5/6" />
        <div className="h-full w-1/12 flex justify-end">
          <motion.div whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
            <MdArrowForwardIos
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

export const Title = styled.h1``;

export const Page = styled.div<any>`
  height: ${(props) => (props.size ? props.size + "%" : "80vh")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
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
const CarouselWrapper = styled(Wrapper)`
  height: 400vh;
  justify-content: flex-end;
`;
export default Projects;
