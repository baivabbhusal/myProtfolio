import React from 'react'

const Projects = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex flex-col justify-between items-center" id="projects">
      <h1 className='text-5xl text-secondary font-bold text-center mb-8'>Projects</h1>
      <div className='grid md:grid-cols-3'>
        <div className="border-1xl">
          Glacier clothing Ecommerce site
        </div>
        <div className="border-1xl">
          Gender Classification Using ML
          </div>

      </div>
      </div>
    </div>
  )
}

export default Projects