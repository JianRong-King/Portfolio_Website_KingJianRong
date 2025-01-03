"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import gameplay_guitar_hero from "@/assets/gameplay_hero.png";
import guitar_hero_pic from "@/assets/guitar_hero_pic2.png";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Guitar Hero",
    description: "A clone of the popular game Guitar Hero, JS & WebSocket API.",
    image: gameplay_guitar_hero,
  },
  {
    id: 2,
    year: 2024,
    title: "Static Factory",
    description: "A 2D CLI Game",
    image: guitar_hero_pic,
  },
];

export const Portfolio = () => {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-bold mb-10">
            Selected <span className="text-gray-400">Project</span>
          </h2>
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="cursor-pointer mb-8 group"
              >
                <p className="text-gray-400 text-lg mb-2">{project.year}</p>

                <h3
                  className={`text-3xl font-semibold group-hover:text-gray-400 transtion-colors ${
                    selected.id === project.id ? "text-gray-100" : ""
                  } duration-300`}
                >
                  {project.title}
                </h3>
                {selected.id === project.id && (
                  <div className="border-b-2 border-gray-200 my-4"></div>
                )}

                {selected.id === project.id && (
                  <p className="text-gray-400 transition-all duration-500 ease-in-out">
                    {project.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <Image
          src={selected.image}
          alt={selected.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </section>
  );
};
