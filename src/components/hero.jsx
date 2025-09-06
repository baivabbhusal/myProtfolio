import React from "react";
import SocialIcon from "./socials";
import BlueButton from "./button";
import baivabImg from "../assets/myBarcaLeft.png";
const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-10 bg-[#F5FCFF] rounded-xl">
      <div className="flex flex-col basis-1/2 md:flex-row items-center mx-10">
              <div className="w-1/2 h-auto">
          <img
            src={baivabImg}
            alt="This is image"
            width={300}
            height={300}
            className="w-full h-full object-contain rounded-3xl p-4"
          ></img>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Hi,✋ I'm</h3>
          <h1 className="font-bold text-5xl text-[#004D98]">Baivab Bhusal</h1>
          <h1 className="font-bold text-2xl text-[#A50044]">
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
            <BlueButton props={{ buttonName: "Download CV" }}/>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;
