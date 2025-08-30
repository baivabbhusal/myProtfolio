import React from 'react'
import skillsPic from "../assets/skills-pic.png"

const Skills = () => {
  return (
    <div className='container mx-auto p-4'>
        <h1>Skills</h1>
        <div>
            <div>
                <img src={skillsPic} width={300} alt="This is skills picture"></img>
            </div>
        </div>

    </div>
  )
}

export default Skills