import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import myPic from "../assets/Images/pic.jpg";
import Cookies from "js-cookie";
import PicShape from "./Shared/PicShape";

const Home = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  return (
    <div
      className={`flex gap-12 flex-col md:flex-row pb-8 md:pt-[72px] pt-[44px] md:px-4 py-4 px-3 ${
        isLight ? "bg-white text-[#030712]" : "bg-[#030712] text-white"
      } `}
    >
      <div
        className={`  container mx-auto flex flex-wrap md:flex-nowrap gap-12 `}
      >
        <div className=" flex flex-col gap-10 w-full md:w-[calc(67%-48px)] order-2 md:order-1 ">
          <div className=" flex flex-col gap-2">
            <h1 className={` text-3xl font-bold`}>{t("Welcome")}</h1>

            <p className={`${!isLight ? "text-[#D1D5DB]" : ""}`}>
              {t("description")}
            </p>
          </div>
          <div className={`flex items-center gap-2`}>
            <i className="pi pi-map-marker" style={{ fontSize: "1.25rem" }}></i>
            <span>{t("location")}</span>
          </div>

          <ul className={`flex gap-4`}>
            <li>
              <a href="https://github.com/Mustafa-Al-Saeed" target="_blank">
                <i className="pi pi-github" style={{ fontSize: "1.25rem" }}></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/mostafa-elsaeed-dev/"
                target="_blank"
              >
                <i
                  className="pi pi-linkedin"
                  style={{ fontSize: "1.25rem" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>

        <PicShape />
      </div>
    </div>
  );
};

export default Home;
