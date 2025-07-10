"use client";

import Image from "next/image";

import guitar_hero_pic from "@/assets/guitarhero.gif";
import nutriTrack from "@/assets/NutriTrack.png";
import parisUML from "@/assets/paris_db.png";
import santorini from "@/assets/Santorni_png.png";

import typeScriptLogo from "@/assets/typescript.png";
import rxJsLogo from "@/assets/RxJs_Logo.png";
import javaSwing from "@/assets/java_swing.png";

import porfolio_img from "@/assets/porfolio_img.png";

import kotlinLogo from "@/assets/Kotlin_logo.jpg";
import roomDb from "@/assets/RoomDb.jpeg";
import geminiApi_logo from "@/assets/Gemini_logo.png";

import tailwindCss_logo from "@/assets/tailwind_css_logo.png";
import react_logo from "@/assets/React_logo.png";
import framer_motion_logo from "@/assets/framer-motion.png";

import mongoDb from "@/assets/mongo_db.png";
import OracleDb from "@/assets/oracle_db_logo.png";

import { FaGithub } from "react-icons/fa";
import cssLogo from "@/assets/css-3-seeklogo.png";
import htmlLogo from "@/assets/html_logo.png";
import nextJsLogo from "@/assets/nextjs_logo.png";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Guitar Hero",
    description:
      "Developed a web-based Guitar Hero–style game using Functional Reactive Programming in TypeScript, leveraging RxJS observables for real-time input, animation, and pure state management. Implemented a declarative game loop that reads note data from a CSV file and plays sound with Tone.js, accurately handling pitch, velocity, and timing.",
    image: guitar_hero_pic,
    Tools: [],
    Skills: ["Web-Development"],
  },
  {
    id: 2,
    year: 2025,
    title: "Santorini Game",
    description:
      "Developed a complete desktop application of the Santorini board game entirely from scratch. Built by using UML class diagrams and CRC cards based on user stories and built the game engine step-by-step using object-oriented principles. Implemented complete gameplay logic including player turns, movement, and building mechanics, with a functional GUI built using Java Swing.",
    image: santorini,
    Tools: [],
    Skills: ["OOP", "Design Patterns"],
  },

  {
    id: 3,
    year: 2025,
    title: "NutriTrack",
    description:
      "NutriTrack Pro is a personalized nutrition tracking Android app built with Kotlin and MVVM architecture. Migrated CSV data into a Room database, implemented multi-user login/logout with account claiming, and integrated the FruityVice API for real-time fruit nutrition data. The app also uses the Gemini GenAI API to generate personalized food tips, storing responses in a dedicated database table. Key features include a NutriCoach insights screen, a settings screen with user and admin views, a clinician dashboard showing gender-based analytics and AI-generated dietary patterns, and a real-time leaderboard that ranks users by nutrition scores. Technologies used include Room, Retrofit, Coroutines, LiveData, and GenAI.",
    image: nutriTrack,
    Tools: [],
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
  {
    id: 5,
    year: 2025,
    title: "Porfolio Website",
    description:
      "Developed a responsive and interactive portfolio using Next.js, TypeScript, and Tailwind CSS, showcasing personal projects, technical skills, and experience. ",
    image: porfolio_img,
    Tools: [],
    Skills: [],
  },
];

export const Portfolio = () => {
  return (
    <section
      id="Projects"
      className="py-28 text-white"
    >
      <div className="flex max-w-7xl mx-auto px-2">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-purple-400">Projects</span>
        </h2>
      </div>

      <div className="space-y-20 py-4">
        {/* Project section div */}

        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 bg-slate-900 rounded-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Section (smaller) */}
          <div className="lg:col-span-1 items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[2].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3 className="text-3xl font-semibold group-hover:text-purple-400 transition-colors">
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

                <p className="leading-7 text-justify text-gray-400 transition-all duration-500 ease-in-out max-w-1xl mx-auto">
                  <ul className="list-disc ml-6">
                    <li>
                      Personalized AI powered nutrition tracking Android app
                      built with Kotlin and MVVM architecture.
                    </li>
                    <li>
                      Migrated CSV data into a Room database, implemented
                      multi-user login/logout with account claiming.
                    </li>
                    <li>
                      Integrated Gemini GenAI API to generate personalized food
                      tips along with FruityVice API for real-time fruit
                      nutrition data and stores them in Room Database
                    </li>
                    <li>
                      Clinician dashboard showing gender-based analytics and
                      AI-generated dietary patterns.
                    </li>
                    <li>
                      Real-time leaderboard that ranks users by nutrition
                      scores.
                    </li>
                  </ul>
                </p>

                <div className="mt-4 ml-2 mb-4">
                  <div className="grid grid-cols-3 gap-4 items-center justify-items-center mt-6 mb-6">
                    {/* Kotlin Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={kotlinLogo}
                        alt="Kotlin Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">Kotlin</p>
                    </div>

                    {/* Room DB Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={roomDb}
                        alt="Room DB Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">RoomDb</p>
                    </div>

                    {/* Gemini API Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={geminiApi_logo}
                        alt="Gemini API Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">Gemini API</p>
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="flex flex-col items-center w-full">
                    <a
                      href="https://github.com/JianRong-King/NutriTrack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition mb-2"
                    >
                      <span>Git Repo</span>
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="lg:col-span-2 mt-14">
            <Image
              src={projects[2].image}
              alt={projects[2].title}
              className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
              width={2158}
              height={766}
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 bg-slate-900 rounded-2xl flex-col justify-start items-center h-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Section (smaller) */}
          <div className="lg:col-span-1 items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[4].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3 className="text-3xl font-semibold group-hover:text-purple-400 transition-colors">
                    {projects[4].title}
                  </h3>
                  <h4 className="flex gap-3 text-xs mt-1 font-light antialiased flex-start">
                    {projects[4].Tools.map((tool) => (
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
                    {projects[4].Skills.map((skill) => (
                      <div
                        key={skill}
                        className="box-content"
                      >
                        <div className="p-1 border-2 rounded-full">{skill}</div>
                      </div>
                    ))}
                  </h4>
                </div>

                <p className="leading-7 text-justify text-gray-400 transition-all duration-500 ease-in-out max-w-1xl mx-auto">
                  <ul className="list-disc ml-6">
                    <li>
                      Developed a responsive and interactive portfolio using
                      Next.js, TypeScript, and Tailwind CSS, showcasing personal
                      projects, technical skills, and experience.
                    </li>
                    <li>
                      Implemented smooth transition animations for each section
                      and designed a clean, scrollable layout to clearly display
                      tech stack and project showcases.
                    </li>
                  </ul>
                </p>

                <div className="mt-4 ml-2 mb-4">
                  <div className="grid grid-cols-4 gap-4 items-center justify-items-center mt-6 mb-6">
                    {/* Kotlin Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={nextJsLogo}
                        alt="nextJsLogo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">Next.js</p>
                    </div>

                    {/* Room DB Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={react_logo}
                        alt="Room DB Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">React</p>
                    </div>

                    {/* Gemini API Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={tailwindCss_logo}
                        alt="Gemini API Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">TailWindCSS</p>
                    </div>

                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={framer_motion_logo}
                        alt="Gemini API Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">Framer motion</p>
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="flex flex-col items-center w-full">
                    <a
                      href="https://github.com/JianRong-King/Portfolio_kjr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition mb-2"
                    >
                      <span>Git Repo</span>
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="lg:col-span-2">
            <Image
              src={projects[4].image}
              alt={projects[4].title}
              className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
              width={2158}
              height={766}
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 bg-slate-900 rounded-2xl flex-col justify-start items-center h-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Section (smaller) */}
          <div className="lg:col-span-1 items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[0].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3 className="text-3xl font-semibold group-hover:text-purple-400 transition-colors">
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

                <p className="leading-7 text-gray-400 transition-all duration-500 ease-in-out max-w-1xl mx-auto">
                  <ul className="list-disc ml-6">
                    <li>
                      Developed a web-based Guitar Hero style game using
                      Functional Reactive Programming in TypeScript
                    </li>
                    <li>
                      Leveraging RxJS observables for real-time input,
                      animation, and pure state management
                    </li>
                    <li>
                      Implemented a declarative game loop that reads note data
                      from a CSV file and plays sound with Tone.js, accurately
                      handling pitch, velocity, and timing
                    </li>
                  </ul>
                </p>

                <div className="mt-6 ml-2 mb-6">
                  <div className="grid grid-cols-4 gap-4 items-center justify-items-center">
                    {/* HTML Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={htmlLogo}
                        alt="HTML Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">HTML</p>
                    </div>

                    {/* CSS Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={cssLogo}
                        alt="CSS Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">CSS</p>
                    </div>

                    {/* TypeScript Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={typeScriptLogo}
                        alt="TypeScript Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">TypeScript</p>
                    </div>

                    {/* RxJS Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={rxJsLogo}
                        alt="RxJS Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">RxJS</p>
                    </div>
                  </div>

                  {/* GitHub Link */}
                  {/* <div className="mt-6 flex flex-col items-center w-full">
                    <a
                      href="https://github.com/JianRong-King/NutriTrack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                    >
                      <span>Git Repo</span>
                      <FaGithub size={24} />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="lg:col-span-2 ">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
              width={2158}
              height={766}
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 bg-slate-900 rounded-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex ">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[1].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors`}
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
                  <ul className="list-disc ml-6">
                    <li>
                      Designed the system architecture using UML class diagrams
                      and CRC cards derived from user stories, then
                      incrementally built the game engine using object-oriented
                      programming principles.
                    </li>
                    <li>
                      Applied SOLID design principles and used techniques such
                      as encapsulation, inheritance, and abstraction to ensure
                      modularity and code reusability.
                    </li>
                    <li>
                      Integrated a responsive GUI using Java Swing, and followed
                      scalable design with the use of relevant design patterns
                      (e.g., Factory, Singleton) to manage game components.
                    </li>
                  </ul>
                </p>

                <div className="mt-4 ml-2">
                  <div className="grid grid-cols-2 gap-4 items-center justify-items-center mb-4">
                    {/* Java Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={javaSwing}
                        alt="Java Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">Java</p>
                    </div>

                    {/* Java Logo */}
                    <div className="flex flex-col items-center w-full">
                      <Image
                        src={javaSwing}
                        alt="Java Swing Logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-16 h-16 object-contain"
                        width={64}
                        height={64}
                      />
                      <p className="text-center mt-2 text-sm">Java Swing</p>
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="flex flex-col items-center w-full mb-8">
                    <a
                      href="https://github.com/JianRong-King/Santorini"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                    >
                      <span>Git Repo</span>
                      <FaGithub size={24} />
                    </a>
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
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 bg-slate-900 rounded-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="items-center justify-center mr-4 pl-4 pt-4">
            <div className="flex ">
              <div>
                <p className="text-gray-400 text-lg mb-2">{projects[3].year}</p>

                <div className="flex gap-3 mb-2">
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors`}
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
                  <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                    {/* OracleDb Logo */}
                    <div className="flex flex-col items-center">
                      <Image
                        src={OracleDb}
                        alt="OracleDb logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-20 h-20 object-contain"
                        width={80}
                        height={80}
                      />
                      <p className="text-center  text-sm">Oracle DB</p>
                    </div>

                    {/* MongoDB Logo */}
                    <div className="flex flex-col items-center">
                      <Image
                        src={mongoDb}
                        alt="mongoDb logo"
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-20 h-20 object-contain"
                        width={80}
                        height={80}
                      />
                      <p className="text-center text-sm">MongoDB</p>
                    </div>
                  </div>

                  {/* GitHub Repo Button */}
                  <div className="flex flex-col items-center mt-4 mb-6">
                    <a
                      href="https://github.com/JianRong-King/Paris-Arrow-Transit-Database-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                    >
                      <span>Git Repo</span>
                      <FaGithub size={24} />
                    </a>
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
        </motion.div>
      </div>
    </section>
  );
};
