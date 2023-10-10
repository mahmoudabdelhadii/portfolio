import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
// const CardWrapper = ({ children }) => {
//   return <motion.div>{children}</motion.div>;
// };

const Card = styled(motion.div)`
  border: 1px solid #689af8;
  border-radius: 10px;
  width: 15rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  padding: 1rem;
`;

const CardExpanded = styled(motion.div)`
  border: 1px solid #689af8;
  width: 25rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  padding: 1rem;
`;

const Logo = styled(motion.img)`
  height: 5rem;
  cursor: pointer;
`;

const LogoExpanded = styled(motion.img)`
  height: 7rem;
  cursor: pointer;
`;

const Text = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const TextExpanded = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 1rem;
  line-height: 1;
`;
const TitleExpanded = styled(motion.h1)`
  font-size: 1rem;
  line-height: 1;
`;

const Subtitle = styled(motion.h2)`
  font-size: 0.7rem;
  line-height: 1;
  margin: 0;
`;
const SubtitleExpanded = styled(motion.h2)`
  font-size: 0.7rem;
  line-height: 1;
  margin: 0;
`;

const Description = styled(motion.p)`
  font-size: 0.5rem;
  line-height: 1;
  color: rgb(153 153 153);
`;
const DescriptionExpanded = styled(motion.p)`
  font-size: 0.5rem;
  line-height: 1;
  color: rgb(153 153 153);
`;

const TileExpanded: React.FunctionComponent<any> = ({
  id,
  logo,
  title,
  subtitle,
  description,
}) => {
  return (
    <CardExpanded>
      <TextExpanded>
        <LogoExpanded src={logo} alt="" />

        <TitleExpanded>{title}</TitleExpanded>
        <SubtitleExpanded>{subtitle}</SubtitleExpanded>
      </TextExpanded>
      <DescriptionExpanded>{description}</DescriptionExpanded>
    </CardExpanded>
  );
};
const Tile: React.FunctionComponent<any> = ({
  id,
  logo,
  title,
  subtitle,
  description,
}) => {
  return (
    <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <Logo src={logo} alt="" />
      <Text>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </Text>
    </Card>
  );
};

export { Tile, TileExpanded };
