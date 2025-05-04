import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Experience = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  const experiences = [
    {
      company: "Flojics Technologies",
      position: "Frontend Web Developer",
      points: [
        t("flojicsFirstPoint"),
        t("flojicsSecondPoint"),
        t("flojicsThirdPoint"),
        t("flojicsFourthPoint"),
        t("flojicsFifthPoint"),
        t("flojicsSixthPoint"),
      ],
      date: "Jan 2024 - Jan 2024",
    },
    {
      company: "Freelance Front-end Web Developer",
      position: "Frontend Web Developer",
      points: [
        t("freelanceFirstPoint"),
        t("freelanceSecondPoint"),
        t("freelanceThirdPoint"),
      ],
      date: "Feb 2022 - Oct 2023",
    },
  ];

  return (
    <div
      id="experience"
      className={` container mx-auto px-4 py-16 md:px-20 md:py-24 flex flex-col gap-12 ${
        isLight ? "bg-[#f5f5f5] text-[#4B5563]" : "bg-[#111827] text-[#D1D5DB]"
      } `}
    >
      <div className={` flex flex-col gap-4 justify-center items-center`}>
        <h1
          className={` flex items-center justify-center mx-auto font-bold text-[26px] md:text-[32px]  py-[10px]  px-[45px]  ${
            isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"
          } bg-[#374151]   rounded-xl    `}
        >
          {t("Experience")}
        </h1>
        <span className=" text-center pb-8 md:pb-0 w-full text-[18px] ">
          {t("ExpDescription")}
        </span>
      </div>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`p-3 md:p-8 flex flex-col lg:flex-row gap-4 rounded-xl drop-shadow-lg ${
            isLight ? "bg-white" : "bg-[#1F2937]"
          }`}
        >
          <div
            className={` w-full lg:w-1/4 text-[#14A800] text-2xl font-bold `}
          >
            {experience.company}
          </div>

          <div className={`w-full lg:w-2/4 flex flex-col gap-4`}>
            <div className=" text-xl font-bold">{experience.position}</div>

            <ul className=" list-disc list-inside pl-6 ">
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>

          <div className={` w-full lg:w-1/4 text-end`}>{experience.date}</div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
