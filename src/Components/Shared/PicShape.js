import myPic from "../../assets/Images/pic.jpg";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const PicShape = () => {
  const lng = Cookies.get("i18next") || "en";
  const isLight = useSelector((state) => state.colorMode.isLight);

  return (
    <div
      className={` order-1 md:order-2 md:w-[280px] md:h-[320px] w-[280px] h-[280px] border-[8px] mx-auto ${
        isLight ? "border-white bg-[#E5E7EB]" : "border-[#030712] bg-[#374151]"
      } relative `}
    >
      <img
        className={` w-[240px] h-[280px]  md:w-full md:h-full border-[8px] ${
          isLight ? "border-white " : "border-[#030712] "
        } absolute bottom-[12px] md:bottom-[40px] ${
          lng == "en"
            ? "md:right-[40px] right-[12px] "
            : "md:left-[40px] left-[12px]"
        } `}
        src={myPic}
        alt=""
      />
    </div>
  );
};

export default PicShape;
