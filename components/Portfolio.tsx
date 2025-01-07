"use client";

import React, { useState } from "react";
import Image from "next/image";

import guitar_hero_pic from "@/assets/guitarhero.gif";
import workwithme from "@/assets/workwithme.png";
import parisUML from "@/assets/paris_db.png";
import staticFactory from "@/assets/static_factory.png";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Guitar Hero",
    description: "A clone of the popular game Guitar Hero, JS & WebSocket API.",
    image: guitar_hero_pic,
    Tools: ["Typescript", "RxJS"],
    Skills: ["Functional & Responsive Programming"],
  },
  {
    id: 2,
    year: 2024,
    title: "Static Factory",
    description:
      "Inspired by the game lethal company. Involving serval characters, items, maps concepts (identified as symbols). Along with 3 contributors, achieved a design built with respect to future extendibility and obeying OOP design, SOLID & DRY principle. Used dependency injection to accommodate different functionality for a type class with different behaviour.",
    image: staticFactory,
    Tools: ["Java", "UML"],
    Skills: ["OOP", "SOLID", "DRY"],
  },

  {
    id: 3,
    year: 2025,
    title: "WorkWithMe",
    description: "A Web Env that has all the tools you need to be productive!",
    image: workwithme,
    Tools: ["React", "Tailwindcss"],
    Skills: [],
  },
  {
    id: 4,
    year: 2024,
    title: "Paris Transit Database System",
    description:
      "A database solution to computerize Paris Transit service records. Implemented a sets of relational (Oracle) and non-relational (MongoDB) queries. Application of MongoDB operations to produce outputs that meet client's requirements. Meeting the client's requirements and PL/SQL (Trigger & Procedure) code to enforce business rules.",
    image: parisUML,
    Tools: ["PL/SQL", "MongoDB"],
    Skills: ["Trigger"],
  },
];

export const Portfolio = () => {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section
      id="Projects"
      className="py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex">
            <h2 className="text-5xl font-bold mb-10">
              Selected <span className="text-purple-400">Project</span>
            </h2>
            <h3 className="content-end pb-10 pl-2 text-sm">
              click on project title for info
            </h3>
          </div>

          {projects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="cursor-pointer mb-8 group "
              >
                <p className="text-gray-400 text-lg mb-2">{project.year}</p>

                <div className="flex gap-3">
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transtion-colors ${
                      selected.id === project.id ? "text-gray-100" : ""
                    } duration-300`}
                  >
                    {project.title}
                  </h3>
                  <h4 className="flex gap-3 text-xs mt-1 font-light antialiased flex-start">
                    {project.Tools.map((tool) => (
                      <div
                        key={tool}
                        className="box-content"
                      >
                        <div className="p-1 pr-1 border-2 rounded-full">
                          {tool}
                        </div>
                      </div>
                    ))}
                    <div className="h-7 border-l-2 border-gray-400"></div>
                    {project.Skills.map((skill) => (
                      <div
                        key={skill}
                        className="box-content"
                      >
                        <div className="p-1 border-2 rounded-full">{skill}</div>
                      </div>
                    ))}
                  </h4>
                </div>
                {selected.id === project.id && (
                  <div className="border-b-2 border-gray-200 my-4"></div>
                )}

                {selected.id === project.id && (
                  <p className="leading-7 text-justify text-gray-400 transition-all duration-500 ease-in-out">
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
