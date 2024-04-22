import * as React from "react";

import { LinkStyle } from "./StyledButton";

import { TypeAnimation } from "react-type-animation";

const IntroSlide: React.FunctionComponent<any> = () => {
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

        <LinkStyle className="w-5/6 md:w-fit" to="Experience">
          Scroll for more
        </LinkStyle>
      </div>

      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        className="relative rounded-full max-w-[250px] md:max-w-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <img
          src="/assets/pic2.png"
          className="dark:opacity-80 w-[200px] h-[200px] aspect-[0.7_/_1] md:z-0 md:flex md:basis-1/2 md:w-[400px] md:h-[400px]"
        />
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[radial-gradient(transparent_60%,rgba(245,245,245,0.7)_25%,rgba(245,245,245,0.1)_15%)]"></div> */}
      </div>
      {/* <div
        data-aos="zoom-in-left"
        data-aos-duration="2000"linear-gradient(180deg,#f5f5f5,rgba(245,245,245,1)_60%,transparent)
        className="rounded-full max-w-[250px] h-auto relative overflow-hidden md:rounded-none md:max-w-[400px] "
      >
        <FadeImage>
          <div
            style={{
              backgroundImage: "url(/assets/pic2.png)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="dark:opacity-80 w-[200px] h-[200px] aspect-[0.7_/_1] md:z-0 md:flex md:basis-1/2 md:w-[400px] md:h-[400px]"
          />
        </FadeImage>
      </div> */}
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
