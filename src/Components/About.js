import { useDispatch, useSelector } from "react-redux";
import PicShape from "./Shared/PicShape";
import { useTranslation } from "react-i18next";

const About = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className={` px-4 md:px-[80px] py-8 md:py-[96px] ${
        isLight ? "bg-white text-[#4B5563]" : "bg-[#111827] text-[#D1D5DB]"
      }  `}
    >
      <div className={` pt-8 md:pt-[0px] flex flex-col gap-12  `}>
        <h1
          className={`px-5 py-1 flex items-center justify-center mx-auto font-bold ${
            isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"
          } bg-[#374151] w-[115px] h-[28px] rounded-xl text-sm mb-[12px] md:mb-[40px]  `}
        >
          {t("About me")}
        </h1>

        <div
          className={`flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-12`}
        >
          <PicShape darkColor={"border-[#111827]"} />

          <div
            className={`order-1 md:order-2 w-full md:w-[calc(50%-48px)] flex flex-col gap-6 `}
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
