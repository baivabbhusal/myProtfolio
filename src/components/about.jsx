import React from 'react'
import collegeImg from "../assets/college-pic.jpg"

const About = () => {
  return (
    <div id="about" className="container mx-auto px-4 py-16 bg-slate-100 rounded-2xl mt-12">
      <h1 className="text-5xl font-bold text-center text-[#545C6A] mb-12">
        About <span className="text-[#545C6A]">Me</span>
      </h1>

      <div className="flex flex-col basis-1/2 md:flex-row items-center md:items-start gap-10">
        {/* Image */}
        <div className="flex justify-center md:justify-start md:basis-1/2">
          <img
            src={collegeImg}
            alt="This is image of about section"
            className="rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:basis-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Web Developer</h1>
          <p className="text-2xl leading-relaxed">
            A highly energetic, enthusiastic, and dedicated IT student with a strong
            background in Science, IT. I possess excellent leadership, planning, and
            organizational skills, with the ability to work effectively both independently
            and as part of a team. I am always eager to learn and adapt to new technologies
            & innovations and my passion for continuous learning and problem-solving
            drives me to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
