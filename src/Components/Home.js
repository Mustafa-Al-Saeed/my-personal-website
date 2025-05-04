import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import myPic from "../assets/Images/pic.jpg";
import Cookies from "js-cookie";
import PicShape from "./Shared/PicShape";
import Lottie from "lottie-react";
import dev from "../assets/Animations/dev.json";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Home = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  return (
    <div
      id="home"
      className={` container mx-auto flex gap-12 flex-col lg:flex-row pb-8 md:pt-[72px] pt-[44px] md:px-4 py-4 px-4 ${
        isLight ? "bg-white text-[#4B5563]" : "bg-[#030712] text-[#D1D5DB]"
      } `}
    >
      <div
        className={`  container mx-auto flex flex-col-reverse  lg:flex-row gap-12 `}
      >
        <div className=" flex flex-col gap-10 w-full lg:w-[calc(70%-48px)]  ">
          <div className=" flex flex-col gap-2">
            <h1
              className={` text-3xl font-bold ${
                isLight ? "text-[#111827]" : "text-[#F9FAFB]"
              }`}
            >
              {t("Welcome")}
            </h1>

            <p className={``}>{t("description")}</p>
          </div>
          <div className={`flex items-center gap-2`}>
            <IoLocationOutline className="text-[1.5rem]" />
            <span>{t("location")}</span>
          </div>

          <ul className={`flex gap-4`}>
            <li>
              <a href="https://github.com/Mustafa-Al-Saeed" target="_blank">
                <FaGithub className="text-[2rem]" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/mostafa-elsaeed-dev/"
                target="_blank"
              >
                <FaLinkedin className="text-[2rem]" />
              </a>
            </li>

            <li>
              <a
                href="https://www.behance.net/mostafamahmoud99"
                target="_blank"
              >
                <FaBehanceSquare className="text-[2rem]" />
              </a>
            </li>
          </ul>
        </div>

        <Lottie loop={true} animationData={dev} />
      </div>
    </div>
  );
};

export default Home;
