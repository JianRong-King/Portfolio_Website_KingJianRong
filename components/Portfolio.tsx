"use client";

import Image from "next/image";

import guitar_hero_pic from "@/assets/guitarhero.gif";
import nutriTrack from "@/assets/NutriTrack.png";
import parisUML from "@/assets/paris_db.png";
import staticFactory from "@/assets/static_factory.png";

import javaLogo from "@/assets/java_logo.png";
import typeScriptLogo from "@/assets/typescript.png";
import rxJsLogo from "@/assets/RxJs_Logo.png";

import kotlinLogo from "@/assets/Kotlin_logo.jpg";
import roomDb from "@/assets/RoomDb.jpeg";
import geminiApi_logo from "@/assets/Gemini_logo.png";

import mongoDb from "@/assets/mongo_db.png";
import OracleDb from "@/assets/oracle_db_logo.png";

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
    year: 2025,
    title: "Santorini Game",
    description:
      "Developed a complete desktop application of the Santorini board game entirely from scratch. Built by using UML class diagrams and CRC cards based on user stories and built the game engine step-by-step using object-oriented principles. Implemented complete gameplay logic including player turns, movement, and building mechanics, with a functional GUI built using Java Swing.",
    image: staticFactory,
    Tools: ["Java", "UML"],
    Skills: ["OOP", "Design Patterns"],
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
  return (
    <section
      id="Projects"
      className="py-28 text-white"
    >
      <div className="flex max-w-7xl mx-auto px-2">
        <h2 className="text-5xl font-bold mb-10">
          <span className="text-purple-400">Projects</span>
        </h2>
      </div>

      <div className="space-y-20 py-4">
        {/* Project section div */}

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 bg-slate-900 rounded-2xl">
          <div className="items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex ">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[0].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transtion-colors`}
                  >
                    {projects[0].title}
                  </h3>
                  <h4 className="flex gap-3 text-xs mt-1 font-light antialiased flex-start">
                    {projects[0].Tools.map((tool) => (
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
                    {projects[0].Skills.map((skill) => (
                      <div
                        key={skill}
                        className="box-content"
                      >
                        <div className="p-1 border-2 rounded-full">{skill}</div>
                      </div>
                    ))}
                  </h4>
                </div>

                <p className="leading-7 text-justify text-gray-400 transition-all duration-500 ease-in-out">
                  {projects[0].description}
                </p>

                <div className="mt-4">
                  <div className="flex gap-4">
                    {/* TypeScript Logo */}
                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={typeScriptLogo}
                        alt="TS_logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">TypeScript</p>
                    </div>

                    {/* RxJS Logo */}
                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={rxJsLogo}
                        alt="RxJs_logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">RxJs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={projects[0].image}
            alt={projects[0].title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 bg-slate-900 rounded-2xl">
          <div className="items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex ">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[1].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transtion-colors`}
                  >
                    {projects[1].title}
                  </h3>
                  <h4 className="flex gap-3 text-xs mt-1 font-light antialiased flex-start">
                    {projects[1].Tools.map((tool) => (
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
                    {projects[1].Skills.map((skill) => (
                      <div
                        key={skill}
                        className="box-content"
                      >
                        <div className="p-1 border-2 rounded-full">{skill}</div>
                      </div>
                    ))}
                  </h4>
                </div>

                <p className="leading-7 text-justify text-gray-400 transition-all duration-500 ease-in-out">
                  {projects[1].description}
                </p>

                <div className="mt-4">
                  <div className="flex gap-4">
                    {/* Java Logo */}
                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={javaLogo}
                        alt="Java Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />

                      <p className="text-center mt-2">Java</p>
                    </div>

                    {/* RxJS Logo */}
                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={rxJsLogo}
                        alt="RxJs_logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">RxJs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={projects[1].image}
            alt={projects[1].title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 bg-slate-900 rounded-2xl">
          <div className="items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex ">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[1].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transtion-colors`}
                  >
                    {projects[2].title}
                  </h3>
                  <h4 className="flex gap-3 text-xs mt-1 font-light antialiased flex-start">
                    {projects[2].Tools.map((tool) => (
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
                    {projects[2].Skills.map((skill) => (
                      <div
                        key={skill}
                        className="box-content"
                      >
                        <div className="p-1 border-2 rounded-full">{skill}</div>
                      </div>
                    ))}
                  </h4>
                </div>

                <p className="leading-7 text-justify text-gray-400 transition-all duration-500 ease-in-out">
                  {projects[1].description}
                </p>

                <div className="mt-4">
                  <div className="flex gap-4">
                    {/* Kotlin Logo */}
                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={kotlinLogo}
                        alt="Kotlin Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">Kotlin</p>
                    </div>

                    {/* RxJS Logo */}
                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={roomDb}
                        alt="room Db logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">RoomDb</p>
                    </div>

                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={geminiApi_logo}
                        alt="geminiApi logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">Gemini API</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={projects[2].image}
            alt={projects[2].title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 bg-slate-900 rounded-2xl">
          <div className="items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex ">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[3].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transtion-colors`}
                  >
                    {projects[3].title}
                  </h3>
                  <h4 className="flex gap-3 text-xs mt-1 font-light antialiased flex-start">
                    {projects[3].Tools.map((tool) => (
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
                    {projects[3].Skills.map((skill) => (
                      <div
                        key={skill}
                        className="box-content"
                      >
                        <div className="p-1 border-2 rounded-full">{skill}</div>
                      </div>
                    ))}
                  </h4>
                </div>

                <p className="leading-7 text-justify text-gray-400 transition-all duration-500 ease-in-out">
                  {projects[3].description}
                </p>

                <div className="mt-4">
                  <div className="flex gap-4">
                    {/* OracleDb Logo */}
                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={OracleDb}
                        alt="OracleDb logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">Oracle database</p>
                    </div>

                    <div className="w-1/5 flex flex-col items-center">
                      <Image
                        src={mongoDb}
                        alt="mongoDb logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={90}
                        height={90}
                      />
                      <p className="text-center mt-2">Gemini API</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={projects[3].image}
            alt={projects[3].title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};
