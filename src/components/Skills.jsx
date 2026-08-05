import React from "react";
import skillsPic from "../assets/skills-pic.png";
import {
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaLeaf,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaC, FaJava } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl text-primary font-bold text-center mb-6 font-germania underline">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row gap-5 md:justify-between">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-5">
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaHtml5 className="text-5xl text-[#e34c26] md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">HTML5</span>
          </div>
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaCss3 className="text-5xl text-[#264de4] md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">CSS3</span>
          </div>
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaJs className="text-5xl text-[#f1db34] md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">JavaScript</span>
          </div>
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaPhp className="text-5xl text-[#474A8A] md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">PHP</span>
          </div>
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaC className="text-5xl bg-[#005697] text-white md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">C</span>
          </div>
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaNodeJs className="text-5xl text-[#339933] md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">Node JS</span>
          </div>
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaReact className="text-5xl text-[#61DBFB] md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">React JS</span>
          </div>
          <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <FaJava className="text-5xl text-primary md:text-9xl"></FaJava>
            <span className="text-amber-100 font-bold text-black">Java</span>
          </div>
                    <div className="p-10 bg-blue-100 flex flex-col items-center rounded-xl hover:scale-105">
            <DiMongodb className="text-5xl text-green-900 md:text-9xl" />
            <span className="text-amber-100 font-bold text-black">MongoDb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
