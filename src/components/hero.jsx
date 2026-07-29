import { ReactTyped } from "react-typed";
import SocialIcon from "./socials";
import BlueButton from "./button";
import baivabImg from "../assets/myBarcaRight.png";
const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-10 rounded-xl">
      <div className="flex flex-col w-full items-center justify-center mx-10 rounded-full">
        <div className="rounded-full">
          <img
            src={baivabImg}
            width="80"
            height="80"
            style={{ borderRadius: "50%", objectFit: "cover", background:"[#2F4F4F]"}}
            alt="Baivab"
          />
        </div>

        <div className="text-center md:flex flex-col w-1/2">
          <h3 className="text-6xl font-bold my-5 font-germania">Hey, I'm</h3>
          <h1 className="font-bold text-6xl text-black mb-5 font-germania">
            Baivab Bhusal
          </h1>
          <h1 className="text-6xl font-bold font-mono text-slate-500">
            I am a{" "}
            <ReactTyped
              strings={[
                "Frontend Developer",
                "MERN Stack Developer",
                "Designer",
              ]}
              typeSpeed={100}
              backSpeed={90}
              loop
            />
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
      </div>
    </div>
  );
};

export default Hero;
