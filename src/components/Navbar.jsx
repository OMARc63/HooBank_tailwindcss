import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full navbar py-6 flex justify-between items-center">
      <img className="w-[124px] h-[32px]" src={logo} alt="HooBank" />
      <ul className="list-none flex-1 sm:flex hidden items-center justify-end">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white text-[16px] hover:text-secondary ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile menu */}
      <div className="sm:hidden">
        <img
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          src={toggle ? close : menu}
          alt="toggle menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-1 flex flex-col items-center justify-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className="font-poppins text-white text-[16px] my-4"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
