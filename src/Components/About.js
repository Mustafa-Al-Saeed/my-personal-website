import { useDispatch, useSelector } from "react-redux";
import PicShape from "./Shared/PicShape";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import animationAbout from "../assets/Animations/Animation - 1737645508502.json";

const About = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className={` container mx-auto px-4 md:px-[80px] py-8 md:py-[96px] ${
        isLight ? "bg-[#f5f5f5] text-[#4B5563]" : "bg-[#111827] text-[#D1D5DB]"
      }  `}
    >
      <div className={` pt-8 md:pt-[0px] flex flex-col gap-12  `}>
        <h1
          className={` flex items-center justify-center mx-auto font-bold text-[26px] md:text-[32px]  py-[10px]  px-[45px]  ${
            isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"
          } bg-[#374151]   rounded-xl    `}
        >
          {t("About")}
        </h1>

        <div
          className={`flex flex-wrap md:flex-nowrap flex-col lg:flex-row gap-12`}
        >
          <Lottie
            loop={true}
            animationData={animationAbout}
            className="mb-[40px]   md:mb-0"
          />

          <div
            className={`order-1 md:order-2 w-full lg:w-[calc(70%-48px)] flex flex-col gap-6 my-auto `}
          >
            <h1
              className={` text-3xl font-bold ${
                isLight ? "text-[#111827]" : "text-[#F9FAFB]"
              }`}
            >
              {t("title for me")}
            </h1>

            <p className={` flex flex-col gap-4`}>
              <span>{t("desc for me part-1")}</span>
              <span> {t("desc for me part-2")}</span>
              <span> {t("desc for me part-3")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
