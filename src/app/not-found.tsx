"use client";
import Link from "next/link";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./globals.css";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";

const NotFound: React.FC = () => {
  return <AuroraHero />;
};

export default NotFound;

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderColor = useMotionTemplate`${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px -24px ${color}`;

  return (
    <>
      <div className="h-[100px] flex justify-between items-center fixed w-screen z-[100] top-0 bg-[linear-gradient(180deg,#0C0C0F,rgba(12,12,15,0.8)_59%,transparent)] ">
        <div className="flex basis-1/5 h-full items-center justify-center">
          <Link href="/">
            <a className="relative" style={{ width: 50, height: 50 }}>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={50} // Specify the exact width
                height={50} // Specify the exact height
                priority={true} // If it's critical for the initial load, keep the priority
              />
            </a>
          </Link>
        </div>
      </div>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative font-GTWalsh z-10 flex flex-col items-center">
          <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            UH OH
          </span>
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            NOT FOUND - 404!
          </h1>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Please
            go back to the homepage.
          </p>
          <Link href="/">
            <motion.button
              style={{
                borderColor,
                borderWidth: "0px 0px 2px 0px",
                borderStyle: "solid",
                boxShadow,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 px-4 py-[0.6] transition-[colors,all] hover:bg-gray-950/50 mb-2 border-b text-white h-20  hover:pl-3  
              bg-transparent duration-[508ms] ease-[cubic-bezier(0.77,0,0.175,1)] text-[0.8rem] tracking-[0.25rem] uppercase cursor-pointer pl-0 pr-[0.6rem] rounded-none"
            >
              <FiArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              Go back home
            </motion.button>
          </Link>
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};
