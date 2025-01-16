import React, { useState, useRef } from "react";
import { toDarkMode, toLightMode } from "../../Store/Slices/colorMode";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";
  const [listStatus, setListStatus] = useState(false);

  const myRef = useRef(null);

  window.addEventListener("scroll", () => {
    console.log(myRef.current.style.top);

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      myRef.current.style.top = "-86px";
    } else {
      myRef.current.style.top = "0";
    }
  });
  const changeListStatus = () => {
    setListStatus(!listStatus);
  };

  const toggleLanguage = () => {
    if (lng === "en") {
      i18n.changeLanguage("ar");
    } else if (lng === "ar") {
      i18n.changeLanguage("en");
    }
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
      ref={myRef}
      className={` ${
        isLight
          ? "bg-white relative text-[#030712]"
          : "bg-[#030712] text-[#D1D5DB]"
      } flex items-center justify-between h-[68px] p-3 lg:px-20  `}
    >
      <a className="text-xl font-bold hidden md:block  " href="#">
        &lt;/&gt;
      </a>

      <div className=" cursor-pointer md:hidden">
        {listStatus ? (
          <i
            onClick={changeListStatus}
            className="pi pi-times hover:text-[#38BDF8]"
            style={{ fontSize: "1.5rem" }}
          ></i>
        ) : (
          <i
            onClick={changeListStatus}
            className="pi pi-align-justify hover:text-[#38BDF8]"
            style={{ fontSize: "1.5rem" }}
          ></i>
        )}
      </div>

      <div className=" flex items-center overflow-hidden ">
        <ul
          className={` overflow-hidden ${
            listStatus ? "h-[305px]" : "h-0 md:h-[68px]"
          } transition-all absolute md:relative flex flex-col md:flex-row gap-4 top-[68px] md:top-0 left-0 ${
            isLight
              ? "bg-white md:bg-transparent"
              : "bg-[#030712] md:bg-transparent"
          } w-full md:w-fit`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className=" flex items-center p-3 md:p-0 hover:text-[#38BDF8]"
            >
              <a className=" cursor-pointer " href={link.path}>
                {t(link.name)}
              </a>
            </li>
          ))}
        </ul>

        <div className=" px-3 flex items-center gap-3">
          <div className="cursor-pointer " onClick={toggleLanguage}>
            <i
              className="pi pi-language hover:text-[#38BDF8] transition-colors"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>

          <div
            className={`cursor-pointer ${isLight ? "hidden" : "block"}`}
            onClick={() => dispatch(toLightMode())}
          >
            <i
              className="pi pi-sun hover:text-[#38BDF8] transition-colors"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>

          <div
            className={`cursor-pointer ${isLight ? "block" : "hidden"}`}
            onClick={() => dispatch(toDarkMode())}
          >
            <i
              className="pi pi-moon hover:text-[#38BDF8] transition-colors "
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>

        <button
          className={`hover:text-[#38BDF8] whitespace-nowrap	 transition-colors py-[6px] ${
            isLight ? "bg-[#030712] text-white" : "bg-white text-[#030712]"
          }  font-bold rounded-xl  px-4`}
        >
          {t("Download CV")}
        </button>
      </div>
    </div>
  );
};

export default Header;

// className={`  h-[68px] duration-[3000ms]  overflow-hidden  absolute px-3 left-0 ${
//   listStatus ? "h-[240px] " : "h-[0px] md:h-[68px] "
// } w-full md:relative md:top-0 md:flex md:items-center md:gap-5  md:text-center ${
//   lng == "en"
//     ? "border-r-[#1F2937] border-r-[1px]"
//     : lng == "ar"
//     ? "border-l-[#1F2937] border-l-[1px]"
//     : ""
// } ${
//   isLight ? "bg-white text-[#030712]" : "bg-[#030712] text-[#D1D5DB]"
// }  `}
