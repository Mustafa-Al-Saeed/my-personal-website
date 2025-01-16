import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import myPic from "../assets/Images/pic.jpg";
const Home = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();

  return (
    <div
      className={`flex gap-12 flex-col md:flex-row md:py-8 py-4 px-2 md:px-4 ${
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

        <div
          className={`order-1 md:order-2 w-[320px] h-[360px] mx-auto z-[1] relative before:absolute before:right-0 before:bottom-0  before:bg-[#374151] before:w-[280px] before:h-[320px] before:z-[-1]`}
        >
          <img className={`w-[280px] h-[320px] `} src={myPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
