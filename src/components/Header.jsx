import React from 'react'

const Header = () => {
  return (
    <header className="text-[#00000]">
          <div className=" sticky container mx-auto my-2 rounded-xl px-4 border-2 border-slate-400">
            <div className="flex flex-row justify-between items-center" id="header">
              <div>
                <a href="/header">
                  <h1 className="text-3xl text-[#1E52B3] font-semibold font-germania">
                    &lt; <span className="text-[#1E52B3]">BB</span> /&gt;
                  </h1>
                </a>
              </div>
              <div className="flex flex-row justify-between items-center text-black">
                <ul className="hidden md:flex flex-row gap-4">
                  <li className="hover:underline">
                    <a href="#about">About</a>
                  </li>
                  <li className="hover:underline">
                    <a href="#">Projects</a>
                  </li>
                  <li className="hover:underline">
                    <a href="#">Services</a>
                  </li>
                  <li className="hover:underline">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header