import React from 'react'
import skillsPic from "../assets/skills-pic.png"
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { FaC } from 'react-icons/fa6'

const Skills = () => {
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-5xl font-bold text-center mb-8'>Skills</h1>
        <div className='flex flex-row justify-between'>
          <div className='grid grid-cols-4  gap-5 pt-5'>
            <FaHtml5 className='text-[#e34c26] text-7xl'/>
            <FaCss3 className='text-[#264de4] text-7xl'/>
            <FaJs className='text-[#f1db34] text-7xl'/>
            <FaPhp className='text-[#474A8A] text-7xl'/>
            <FaC className='bg-[#005697] text-white text-7xl'/>
            <FaNodeJs className='text-[#339933] text-7xl' />
            <FaReact className='text-[#61DBFB] text-7xl'/>
            
          </div>
            <div className='shadow'>
                <img src={skillsPic} width={400} alt="This is skills picture"></img>
            </div>
        </div>

    </div>
  )
}

export default Skills