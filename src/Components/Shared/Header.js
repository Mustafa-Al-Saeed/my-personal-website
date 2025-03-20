import React, { useState, useRef, useEffect } from "react";
import { toDarkMode, toLightMode } from "../../Store/Slices/colorMode";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import cv from "../../assets/attachments/CV.pdf";

const Header = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const fileName = "CV.pdf";
  const lng = Cookies.get("i18next") || "en";
  const [listStatus, setListStatus] = useState(false);

  const myRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <div
      ref={myRef}
      className={`z-40 w-full ${
        isLight ? "bg-white text-[#030712]" : "bg-[#030712] text-[#D1D5DB]"
      } flex items-center justify-center h-[68px] p-3 ${
        showHeader ? "fixed top-0 left-0 shadow-lg" : ""
      }`}
    >
      <div className="container flex items-center justify-between md:justify-center">
        <div className="cursor-pointer md:hidden">
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

        <div className={` flex gap-3 `}>
          <ul
            className={`z-50 overflow-hidden ${
              listStatus ? "h-[257px]" : "h-0 md:h-[68px]"
            } transition-all absolute md:relative flex flex-col md:flex-row gap-4 top-[68px] md:top-0 left-0 ${
              isLight
                ? "bg-white md:bg-transparent"
                : "bg-[#030712] md:bg-transparent"
            } w-full md:w-fit`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center p-3 md:p-0 hover:text-[#38BDF8]"
              >
                <a className="cursor-pointer" href={link.path}>
                  {t(link.name)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="cursor-pointer" onClick={toggleLanguage}>
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
                className="pi pi-moon hover:text-[#38BDF8] transition-colors"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </div>

            <button
              className={`hover:text-[#38BDF8] whitespace-nowrap transition-colors py-[6px] ${
                isLight ? "bg-[#030712] text-white" : "bg-white text-[#030712]"
              } font-bold rounded-xl px-4`}
            >
              <a href={cv} download={fileName}>
                {t("Download CV")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
