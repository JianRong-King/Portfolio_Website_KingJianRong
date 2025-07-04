"use client";

import React, { useState } from "react";
import Image from "next/image";

import guitar_hero_pic from "@/assets/guitarhero.gif";
import nutriTrack from "@/assets/NutriTrack.png";
import parisUML from "@/assets/paris_db.png";
import staticFactory from "@/assets/static_factory.png";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Guitar Hero",
    description:
      "Developed a web-based Guitar Hero–style game using Functional Reactive Programming in TypeScript, leveraging RxJS observables for real-time input, animation, and pure state management. Implemented a declarative game loop that reads note data from a CSV file and plays sound with Tone.js, accurately handling pitch, velocity, and timing.",
    image: guitar_hero_pic,
    Tools: ["Typescript", "Functional Programming"],
    Skills: ["Web-Development"],
  },
  {
    id: 2,
    year: 2024,
    title: "Static Factory",
    description:
      "Collaborated with a team of three to design and implement a 2D game featuring multiple characters, items, locations, and time-based gameplay elements. Applied OOP principles (SOLID, DRY) to ensure a scalable, maintainable architecture with emphasis on future extensibility. Reduced module dependencies through abstraction layers (interfaces, abstract classes) and implemented dependency injection to decouple object behaviors, enabling flexible modular functionality.",
    image: staticFactory,
    Tools: ["Java", "UML"],
    Skills: ["OOP", "SOLID", "DRY"],
  },

  {
    id: 3,
    year: 2025,
    title: "NutriTrack",
    description:
      "NutriTrack Pro is a personalized nutrition tracking Android app built with Kotlin and MVVM architecture. Migrated CSV data into a Room database, implemented multi-user login/logout with account claiming, and integrated the FruityVice API for real-time fruit nutrition data. The app also uses the Gemini GenAI API to generate personalized food tips, storing responses in a dedicated database table. Key features include a NutriCoach insights screen, a settings screen with user and admin views, a clinician dashboard showing gender-based analytics and AI-generated dietary patterns, and a real-time leaderboard that ranks users by nutrition scores. Technologies used include Room, Retrofit, Coroutines, LiveData, and GenAI.",
    image: nutriTrack,
    Tools: ["Kotlin", "RoomDB", "MVVM", "GenAI"],
    Skills: ["Mobile App Development"],
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
