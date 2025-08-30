import React from "react";
import SocialIcon from "./socials";
import BlueButton from "./button";
import baivabImg from "../assets/baivab.png";
const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-row basis-1/2 justify-center items-center gap-10">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Hello, It's me</h3>
          <h1 className="font-bold text-5xl text-[#545C6A]">Baivab Bhusal</h1>
          <h1 className="font-bold text-5xl text-[#B26A8E]">
            And I'm Frontend Developer
          </h1>
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

        <div className="basis-1/2">
          <img
            src={baivabImg}
            alt="This is image"
            width={400}
            height={300}
            className="h-[88vh] object-cover rounded-lg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
