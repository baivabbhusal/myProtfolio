import React from "react";
import Typed from "react-typed";
import SocialIcon from "./socials";
import BlueButton from "./button";
import baivabImg from "../assets/myBarcaRight.png";
const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-10 rounded-xl">
      <div className="flex flex-col w-full md:flex-row items-center mx-10 rounded-full">
        <div className="w-1/2 h-auto">
          <img
            src={baivabImg}
            alt="This is image"
            width={200}
            height={200}
            className="w-full md:w-2/3 h-auto object-contain rounded-3xl p-4"
          ></img>
        </div>

        <div className="w-full text-center md:flex flex-col w-1/2">
          <h3 className="text-xl font-bold">Hi,✋ I'm</h3>
          <h1 className="font-bold text-5xl text-primary">Baivab Bhusal</h1>
          <div className="flex items-center justify-center h-screen bg-gray-900">
            <h1 className="text-3xl md:text-5xl font-mono text-white">
              I am a{" "}
              <Typed
                strings={[
                  "Frontend Developer",
                  "MERN Stack Developer",
                  "Designer",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </h1>
          </div>
          <p className="text-lg mt-4 leading-relaxed">
            I design and build modern, responsive web applications using React,
            Next.js, and Tailwind CSS. Passionate about frontend development, I
            focus on creating smooth UI/UX experiences.
          </p>
          <div className="mt-2">
            <SocialIcon />
          </div>
          <div>
            <BlueButton props={{ buttonName: "Download CV" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
