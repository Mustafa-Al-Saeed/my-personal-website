import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Experience = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  return (
    <div
      id="experience"
      className={` container mx-auto px-4 py-16 md:px-20 md:py-24 flex flex-col gap-12 ${
        isLight ? "bg-[#f5f5f5] text-[#4B5563]" : "bg-[#111827] text-[#D1D5DB]"
      } `}
    >
      <div className={` flex flex-col gap-4 justify-center items-center`}>
        <h1
          className={`px-5 py-1 flex items-center justify-center mx-auto font-bold ${
            isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"
          } bg-[#374151] w-[115px] h-[28px] rounded-xl text-sm `}
        >
          {t("Experience")}
        </h1>
        <span className=" text-center">{t("ExpDescription")}</span>
      </div>

      <div
        className={`p-3 md:p-8 flex flex-col lg:flex-row gap-4 rounded-xl drop-shadow-lg ${
          isLight ? "bg-white" : "bg-[#1F2937]"
        }`}
      >
        <div className={` w-full md:w-1/4 text-[#14A800] text-2xl font-bold `}>
          Flojics
        </div>

        <div className={`w-full lg:w-2/4 flex flex-col gap-4`}>
          <div className=" text-xl font-bold">Frontend Developer</div>

          <ul className=" list-disc list-inside pl-6 ">
            <li>{t("flojicsFirstPoint")}</li>
            <li>{t("flojicsSecondPoint")}</li>
            <li>{t("flojicsThirdPoint")}</li>
            <li>{t("flojicsForthPoint")}</li>
            <li>{t("flojicsFifthPoint")}</li>
            <li>{t("flojicsSixthPoint")}</li>
          </ul>
        </div>

        <div className={` w-full lg:w-1/4 text-end`}>Jan 2024 - Dec 2024</div>
      </div>
    </div>
  );
};

export default Experience;
