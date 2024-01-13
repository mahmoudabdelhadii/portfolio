import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Card from "./Card";
import { RBC_DE, RBC_FSE, TUT_MLE } from "./ExperienceDetails";
const ExperienceCards: ReactNode[] = [
  {
    logo: "/assets/RBClogo.png",
    title: "Full Stack Engineer",
    subtitle: "RBC",
    company: "RBC",
    fromDate: "September, 2022",
    toDate: "August, 2023",
    description: <RBC_FSE />,
  },
  {
    logo: "/assets/RBClogo.png",
    company: "RBC",
    fromDate: "September, 2022",
    toDate: "August, 2023",
    title: "Data Engineer",
    subtitle: "RBC",
    description: <RBC_DE />,
  },
  {
    logo: "/assets/TUTfclogo.png",
    company: "Tutankhamun FC",
    fromDate: "May, 2021",
    toDate: "August 2021",
    title: "Machine Learning Engineer",
    subtitle: "Tutankhamun FC",
    description: <TUT_MLE />,
  },
].map((cardObj, index) => {
  return (
    <Card
      index={index}
      key={`card-${index}`}
      title={cardObj.title}
      company={cardObj.company}
      fromDate={cardObj.fromDate}
      toDate={cardObj.toDate}
      subtitle={cardObj.subtitle}
      logo={cardObj.logo}
      children={cardObj.description}
    />
  );
});

export default ExperienceCards;
