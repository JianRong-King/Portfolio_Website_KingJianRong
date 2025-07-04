"use client";

import { useEffect } from "react";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSpotify } from "react-icons/sl";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Footer = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // to change color every 10s
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative overflow-hidden py-12  px-10 text-gray-200"
    >
      <div className="mx-9 px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left-aligned content */}
        <div className="ml-1 px-10 text-left">
          <p>© 2025. All rights reserved.</p>
        </div>

        {/* Right-aligned content */}
        <div className="mr-1 px-10  flex justify-end items-center gap-4">
          <a
            href="https://www.instagram.com/jianrong2004/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <div className="h-8 border-l-2 border-gray-400"></div>
          <a
            href="https://open.spotify.com/user/kingjianrong?si=32a74e724bab4e5e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialSpotify size={30} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
