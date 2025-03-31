"use client";
import React, { useState } from "react";

export const Header = () => {
  // State to handle the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full bg-white flex border-b-2 border-black">
        <h5 className="w-[80%] text-center pl-16 pilowlava-normal text-black text-[5rem] m-auto border-l-2 border-r-2 border-black">
          ENTFRE
        </h5>
      </div>
      <div className="w-full bg-white border-b-2 border-black">
        <div className="flex justify-between items-center w-[80%] m-auto border-l-2 border-r-2 border-black">
          {/* Hamburger Icon (for mobile) */}
          <div
            className="lg:hidden text-black  m-auto cursor-pointer"
            onClick={toggleMenu}
          >
            <img
              className="w-[25px]"
              src={`${isMenuOpen ? "/menu_open.svg" : "/menu_close.svg"} `}
              alt=""
            />
          </div>

          {/* Navigation Links */}
          <div className="nav-container hidden lg:flex w-full justify-around castoro-regular text-black text-[1.4rem]">
            <div className="flex-1 text-center nav-buttons nav-1">Economy</div>
            <div className="flex-1 text-center nav-buttons nav-2">
              Architecture
            </div>
            <div className="flex-1 text-center nav-buttons nav-3">
              Graphic Design
            </div>
            <div className="flex-1 text-center nav-buttons nav-4">Nature</div>
            <div className="flex-1 text-center nav-buttons nav-5">Art</div>
            <div className="flex-1 text-center nav-buttons nav-6">Cinema</div>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden w-full bg-white `}
        >
          <div className="w-[80%] flex flex-col items-center castoro-regular border-l-2 border-r-2 border-black m-auto">
            <div className="w-full text-center nav-buttons nav-1">Economy</div>
            <div className="w-full text-center nav-buttons nav-2">
              Architecture
            </div>
            <div className="w-full text-center nav-buttons nav-3">
              Graphic Design
            </div>
            <div className="w-full text-center nav-buttons nav-4">Nature</div>
            <div className="w-full text-center nav-buttons nav-5">Art</div>
            <div className="w-full text-center nav-buttons nav-6">Cinema</div>
          </div>
        </div>
      </div>
    </>
  );
};
