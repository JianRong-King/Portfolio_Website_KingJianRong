"use client";

import { useEffect } from "react";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // to change color every 10s
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // to set radiant background with changing color
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4pz 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <h2 className="text-2xl font-serif text-white/80">Hello!</h2>
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-300 sm:text-7xl">
          I'm Jian Rong King
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium  sm:text-xl/8  from-white/40 to-gray-500/40 bg-clip-text ">
          A passionate developer who loves building clean, efficient, and
          impactful projects.
        </p>
      </div>
    </motion.section>
  );
};
