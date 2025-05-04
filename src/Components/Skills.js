import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiVuedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
// import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiFormik } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import vuex from "../assets/Images/vuex-store.png";
import pinia from "../assets/Images/pinia-logo-png_seeklogo-467284.png";
import photoShop from "../assets/Images/Photoshop.png";
import Figma from "../assets/Images/Figma.png";

import Cookies from "js-cookie";

const Skills = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  const designIcons = [
    {
      name: "Photoshop",
      tag: photoShop,
      color: "#08253c",
      status: false,
    },
    {
      name: "Illustrator",
      tag: SiAdobeillustrator,
      color: "#ff7c21",
      status: true,
    },
    {
      name: "Figma",
      tag: Figma,
      color: "",
      status: false,
    },
  ];

  const devIcons = [
    {
      name: "HTML",
      tag: FaHtml5,
      color: "#DD4B25",
      status: true,
    },
    {
      name: "CSS",
      tag: FaCss3Alt,
      color: "#1572b7",
      status: true,
    },
    {
      name: "Javascript",
      tag: SiJavascript,
      color: "#FFD600",
      status: true,
    },
    {
      name: "Vue",
      tag: SiVuedotjs,
      color: "#3fb27f",
      status: true,
    },
    {
      name: "Vuex",
      tag: vuex,
      color: "",
      status: false,
    },
    {
      name: "Pinia",
      tag: pinia,
      color: "",
      status: false,
    },
    {
      name: "React",
      tag: FaReact,
      color: "#01D1F7",
      status: true,
    },
    {
      name: "Redux",
      tag: SiRedux,
      color: "#7347b7",
      status: true,
    },
    {
      name: "Next",
      tag: RiNextjsFill,
      color: "#01D1F7",
      status: true,
    },
    {
      name: "TailwindCSS",
      tag: RiTailwindCssFill,
      color: "#3ebff8",
      status: true,
    },
    {
      name: "Bootstrap",
      tag: FaBootstrap,
      color: "#7818f7",
      status: true,
    },
    {
      name: "Git",
      tag: FaGitAlt,
      color: "#f05539",
      status: true,
    },
    {
      name: "Axios",
      tag: SiAxios,
      color: "#894798",
      status: true,
    },
    {
      name: "Styled Components",
      tag: SiStyledcomponents,
      color: "#cf7aae",
      status: true,
    },
    {
      name: "Formik & Yup",
      tag: SiFormik,
      color: "#0857ce",
      status: true,
    },
  ];

  return (
    <div
      id="skills"
      className={` container mx-auto px-4 md:px-[80px] py-16 md:py-[96px] flex flex-col gap-6 md:gap-12  ${
        isLight ? "bg-white text-[#4B5563]" : "bg-[#030712] text-[#D1D5DB]"
      } `}
    >
      <div className={`px-0  flex items-center flex-col gap-4 `}>
        <h1
          className={` flex items-center justify-center mx-auto font-bold text-[26px] md:text-[32px]  py-[10px]  px-[45px]  ${
            isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"
          } bg-[#374151]   rounded-xl    `}
        >
          {t("Skills")}
        </h1>

        <span className=" text-center pb-8 md:pb-0 w-full text-[18px] ">
          {t("desc of skills")}
        </span>
      </div>
      <div className={` flex flex-col gap-[40px] `}>
        <div
          className={`flex items-center justify-center mx-auto font-bold text-[22px] py-[7px] px-[20px] ${
            isLight ? "border-[#374151]" : "border-[#E5E7EB]"
          }  border-[1px] border-[solid] rounded-xl   `}
        >
          {t("developmentSkills")}
        </div>

        <div
          className={` w-full flex ${
            lng == "en" ? "flex-row" : "flex-row-reverse"
          } justify-center flex-wrap gap-x-10 sm:gap-x-14 md:gap-x-24 gap-y-4 md:gap-y-12  `}
        >
          {devIcons.map((icon, index) => {
            const IconComponent = icon?.tag;

            return (
              <div
                key={index}
                className={` flex flex-col gap-2  justify-center items-center`}
              >
                {icon.status ? (
                  <IconComponent
                    key={index}
                    className={` w-[64px] h-[64px] ${
                      icon.tag ? "block" : "hidden"
                    } `}
                    fill={icon.color}
                  />
                ) : (
                  <img
                    src={icon.tag}
                    className={`${
                      icon.name == "Pinia" ? "w-[45px]" : "w-[64px]"
                    } h-[64px]`}
                    alt=""
                  />
                )}

                <span>{icon.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={` flex flex-col gap-[40px] `}>
        <div
          className={`flex items-center justify-center mx-auto font-bold text-[22px] py-[7px] px-[20px] ${
            isLight ? "border-[#374151]" : "border-[#E5E7EB]"
          }  border-[1px] border-[solid] rounded-xl   `}
        >
          {t("designSkills")}
        </div>

        <div
          className={` w-full flex ${
            lng == "en" ? "flex-row" : "flex-row-reverse"
          } justify-center flex-wrap gap-x-10 sm:gap-x-14 md:gap-x-24 gap-y-4 md:gap-y-12  `}
        >
          {designIcons.map((icon, index) => {
            const IconComponent = icon?.tag;

            return (
              <div
                key={index}
                className={` flex flex-col gap-2  justify-center items-center`}
              >
                {icon.status ? (
                  <IconComponent
                    key={index}
                    className={` w-[64px] h-[64px] ${
                      icon.tag ? "block" : "hidden"
                    } `}
                    fill={icon.color}
                  />
                ) : (
                  <img src={icon.tag} className={` w-[64px] h-[64px]`} alt="" />
                )}
                <span>{icon.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
