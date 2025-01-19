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
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiFormik } from "react-icons/si";

import Cookies from "js-cookie";

const Skills = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  return (
    <div
      className={` px-4 md:px-[80px] py-16 md:py-[96px] flex flex-col gap-6 md:gap-12  ${
        isLight ? "bg-white text-[#4B5563]" : "bg-[#030712] text-[#D1D5DB]"
      } `}
    >
      <div className={`px-0 md:px-8 flex items-center flex-col gap-4 `}>
        <h1
          className={`px-5 py-1 flex items-center justify-center font-bold mx-auto ${
            isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"
          } bg-[#374151] w-[105px] h-[28px] rounded-xl text-sm  `}
        >
          {t("Skills")}
        </h1>

        <span className=" text-center">{t("desc of skills")}</span>
      </div>

      <div
        className={` w-full flex ${
          lng == "en" ? "flex-row" : "flex-row-reverse"
        } justify-center flex-wrap gap-10 sm:gap-14  md:gap-24       `}
      >
        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <FaHtml5 className={` w-[64px] h-[64px] `} fill="#DD4B25" />
          <span>HTML</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <FaCss3Alt className={` w-[64px] h-[64px] `} fill="#1572b7" />
          <span>CSS</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiJavascript className={` w-[64px] h-[64px] `} fill="#FFD600" />
          <span>Javascript</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiVuedotjs className={` w-[64px] h-[64px] `} fill="#3fb27f" />
          <span>Vue</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <FaReact className={` w-[64px] h-[64px] `} fill="#01D1F7" />
          <span>React</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiRedux className={` w-[64px] h-[64px] `} fill="#7347b7" />
          <span>Redux</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <RiTailwindCssFill className={` w-[64px] h-[64px] `} fill="#3ebff8" />
          <span>TailwindCSS</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <FaBootstrap className={` w-[64px] h-[64px] `} fill="#7818f7" />
          <span>Bootstrap</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <FaGitAlt className={` w-[64px] h-[64px] `} fill="#f05539" />
          <span>Git</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiAxios className={` w-[64px] h-[64px] `} fill="#894798" />
          <span>Axios</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiStyledcomponents
            className={` w-[64px] h-[64px] `}
            fill="#cf7aae"
          />
          <span>Styled Components</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiFormik className={` w-[64px] h-[64px] `} fill="#0857ce" />
          <span>Formik & Yup</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiAdobephotoshop className={` w-[64px] h-[64px] `} fill="#08253c" />
          <span>Photoshop</span>
        </div>

        <div className={` flex flex-col gap-2  justify-center items-center`}>
          <SiAdobeillustrator
            className={` w-[64px] h-[64px] `}
            fill="#ff7c21"
          />
          <span>Illustrator</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
