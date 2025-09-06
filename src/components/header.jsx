import React from 'react'

const Header = () => {
  return (
    <header className="text-[#00000]">
          <div className=" container mx-auto my-0 px-4">
            <div className="flex flex-row justify-between items-center" id="header">
              <div>
                <a href="/header">
                  <h1 className="text-3xl text-[#A50044] font-semibold ">
                    &lt; <span className="text-[#1E52B3]">Baivab</span> /&gt;
                  </h1>
                </a>
              </div>
              <div className="flex flex-row justify-between items-center text-[#A50044]">
                <ul className="hidden md:flex flex-row gap-4 font-bold">
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