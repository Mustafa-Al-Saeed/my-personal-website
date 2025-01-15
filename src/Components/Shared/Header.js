import React from "react";
import { toDarkMode, toLightMode } from "../../Store/Slices/colorMode";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav";

const Header = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const dispatch = useDispatch();

  let navStatus = false;

  const openNav = () => {
    navStatus = !navStatus;
  };
  const closeNav = () => {
    navStatus = !navStatus;
  };

  const links = [
    { name: "Home", path: "#home" },
    { name: "Services", path: "#services" },
    { name: "About me", path: "#about" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact me", path: "#contact" },
  ];

  return (
    <div
      className={`flex relative justify-between items-center h-[68px]   px-3 lg:px-20 ${
        isLight ? "bg-white text-[#030712]" : "bg-[#030712] text-[#D1D5DB]"
      }`}
    >
      <a className="text-xl font-bold hidden md:block  " href="#">
        &lt;/&gt;
      </a>

      <div className="flex items-center">
        <div className=" flex items-center ">
          <div className=" cursor-pointer md:hidden">
            {(
              <i
                onClick={closeNav}
                className="pi pi-times hover:text-[#38BDF8]"
                style={{ fontSize: "1.5rem" }}
              ></i>
            ) && (
              <i
                onClick={openNav}
                className="pi pi-align-justify hover:text-[#38BDF8]"
                style={{ fontSize: "1.5rem" }}
              ></i>
            )}
          </div>

          <ul
            className={` md:flex  hidden md:items-center md:gap-8 text-center `}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:mb-[3px]  hover:text-[#38BDF8]"
              >
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>

          <ul
            className={` md:hidden absolute top-[68px] left-0 w-full ${
              isLight
                ? "bg-white text-[#030712]"
                : "bg-[#030712] text-[#D1D5DB]"
            } mx-auto `}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer p-3   hover:text-[#38BDF8]"
              >
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex gap-4 items-center ">
          <button>Hire Me</button>

          <div className="cursor-pointer">
            <i className="pi pi-language" style={{ fontSize: "1.5rem" }}></i>
          </div>

          <div
            className={`cursor-pointer ${isLight ? "hidden" : "block"}`}
            onClick={() => dispatch(toLightMode())}
          >
            <i className="pi pi-sun  " style={{ fontSize: "1.5rem" }}></i>
          </div>

          <div
            className={`cursor-pointer ${isLight ? "block" : "hidden"}`}
            onClick={() => dispatch(toDarkMode())}
          >
            <i className="pi pi-moon  " style={{ fontSize: "1.5rem" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
