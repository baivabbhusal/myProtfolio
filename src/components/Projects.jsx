import React from "react";
import cloths from "../assets/projectsImage/glacier.png";
import snakeGame from "../assets/projectsImage/snake.png";
import violenceDetection from "../assets/projectsImage/violence.png";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex flex-col justify-between items-center mt-5 text-white"
        id="projects"
      >
        <h1 className="text-5xl text-primary font-bold text-center mb-8 font-germania underline">
          Recents Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          <div className="border-1xl bg-green-900 rounded-xl flex flex-col items-center">
            <img src={cloths} className="w-300 h-50 p-5"></img>
            <h4 className="text-xl font-bold">
              Glacier clothing Ecommerce site
            </h4>
          </div>
          <div className="border-1xl bg-green-900 flex flex-col items-center rounded-xl">
            <img src={snakeGame} className="w-300 h-50 p-5"></img>
            <h4 className="text-xl font-bold">
              Snake Game using Python
            </h4>
          </div>
          <div className="border-1xl bg-green-900 flex flex-col items-center rounded-xl">
            <img src={violenceDetection} className="w-300 h-50 p-5"></img>
            <h4 className="text-xl font-bold">
              Real-time violence Detection System
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
