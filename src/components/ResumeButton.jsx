import React from 'react'

const ResumeButton = () => {
  return (
    <a
    href="/cv.pdf"
    download="Baivab_Bhusal_CV.pdf"
    className='inline-flex items-center gap-2 rounded-lg bg-yellow-300 font-extrabold px-5 py-3 mt-5'
    >Download CV</a>
  )
}

export default ResumeButton
