import React from 'react'
import cloths from "../assets/cloths.png"

const Projects = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex flex-col justify-between items-center" id="projects">
      <h1 className='text-5xl text-secondary font-bold text-center mb-8'>Projects</h1>
      <div className='grid md:grid-cols-3 gap-2.5'>
        <div className="border-1xl">
          <h4 className='text-xl font-bold'>Glacier clothing Ecommerce site</h4>
          <img src={cloths} width={300}></img>
        </div>
        <div className="border-1xl">
          <h4 className='text-xl font-bold'>Gender Classification Using ML</h4>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Projects