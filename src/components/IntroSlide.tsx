import * as React from "react";

import { LinkStyle } from "./StyledButton";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { BackgroundBeams } from "../components/StartsBackground";
import { SendEmail, SpringModal } from "./Contact/SendEmail";
import { Spotlight } from "../components/Spotlight";
const IntroSlide: React.FunctionComponent<any> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="md:h-screen flex justify-between md:justify-center gap-6 flex-col-reverse items-center h-full md:flex-row">
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/3 md:max-w-1/2 ">
        <h2
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-xl leading-9 font-bold m-0"
        >
          Hi, I am
        </h2>

        <div className="flex">
          <TypeAnimation
            sequence={[2000, "Mahmoud"]}
            wrapper="h1"
            speed={1}
            className="text-4xl font-bold md:text-6xl z-20"
            cursor={false}
          />
          <TypeAnimation
            sequence={[2500, "."]}
            className="text-blue-400 text-4xl font-bold md:text-6xl z-20"
            cursor={true}
            wrapper="span"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
          className="text-base leading-6 text-justify text-[rgb(153_153_153)] w-1/2 max-w-1/2 md:max-w-fit md:w-[85%] mx-0 my-6 z-20 md:text-lg"
        >
          I am a UBC recent graduate who loves everything software, from
          application development and deployment, to data and model training
        </p>

        <SendEmail isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        className="relative rounded-full max-w-[250px] md:max-w-[400px] overflow-hidden bg-cover bg-no-repeat"
      >
        <Image
          src="/assets/pic2.png"
          alt="My profile picture" // Always add an alt attribute for accessibility
          width={400} // Adjust width and height based on your design requirements
          height={400}
          className="dark:opacity-80 md:z-0 md:flex md:basis-1/2"
          quality={100}
          priority={true}
        />
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <BackgroundBeams /> */}
    </div>
  );
};

// const FadeImage = styled.div`
//   -webkit-mask-image: linear-gradient(
//     180deg,
//     #f5f5f5,
//     rgba(245, 245, 245, 1) 60%,
//     transparent
//   );
// `;

export default IntroSlide;
