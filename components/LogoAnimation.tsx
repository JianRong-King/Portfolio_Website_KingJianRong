"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import github from "@/assets/github_logo.png";
import javascript from "@/assets/JavaScript-logo.png";
import oracle from "@/assets/oracle_db_logo.png";
import gitlab from "@/assets/gitlab.png";
import mongodb from "@/assets/mongo_db.png";
import figma from "@/assets/figma.png";
import pytorch from "@/assets/pytorch.png";
import tailwind from "@/assets/tailwind.png";
import tensor from "@/assets/tensor.png";
import python from "@/assets/python.svg";

const images = [
  { src: github, alt: "github" },
  { src: javascript, alt: "javascript" },
  { src: oracle, alt: "oracle" },
  { src: gitlab, alt: "gitlab" },
  { src: mongodb, alt: "mongodb" },
  { src: figma, alt: "figma" },
  { src: pytorch, alt: "pytorch" },
  { src: tailwind, alt: "tailwind" },
  { src: tensor, alt: "tensor" },
  { src: python, alt: "python" },
  { src: github, alt: "github" },
  { src: javascript, alt: "javascript" },
  { src: oracle, alt: "oracle" },
  { src: gitlab, alt: "gitlab" },
  { src: mongodb, alt: "mongodb" },
  { src: figma, alt: "figma" },
  { src: pytorch, alt: "pytorch" },
  { src: tailwind, alt: "tailwind" },
  { src: tensor, alt: "tensor" },
  { src: python, alt: "python" },
  { src: github, alt: "github" },
  { src: javascript, alt: "javascript" },
  { src: oracle, alt: "oracle" },
  { src: gitlab, alt: "gitlab" },
  { src: mongodb, alt: "mongodb" },
  { src: figma, alt: "figma" },
  { src: pytorch, alt: "pytorch" },
  { src: tailwind, alt: "tailwind" },
  { src: tensor, alt: "tensor" },
  { src: python, alt: "python" },
];

export const LogoAnimation = () => {
  return (
    <div className="py-8 bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [masked-image:linear-gradient(to_right, _transparent, _black_25%, black_75%, _transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                height={30}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
