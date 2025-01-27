import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";
  const [showTextCopy, setShowTextCopy] = useState(false);
  const [showPhoneCopy, setShowPhoneCopy] = useState(false);
  const textMail = "mostafa.developer01@gmail.com";
  const Phone = "+201011020236";

  const handleTextCopy = () => {
    navigator.clipboard
      .writeText(textMail)
      .then(() => {
        setShowTextCopy(true);
        setTimeout(() => {
          setShowTextCopy(false);
        }, 1250);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };
  const handlePhoneCopy = () => {
    navigator.clipboard
      .writeText(Phone)
      .then(() => {
        setShowPhoneCopy(true);
        setTimeout(() => {
          setShowPhoneCopy(false);
        }, 1250);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div
      id="contact"
      className={` container mx-auto md:px-20 md:py-24 px-4 py-16 flex flex-col gap-12 ${
        isLight ? "bg-white text-[#4B5563]" : "bg-[#030712] text-[#D1D5DB]"
      }`}
    >
      <div className={` flex flex-col gap-4 justify-center items-center`}>
        <h1
          className={`px-5 py-1 flex items-center justify-center mx-auto font-bold ${
            isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"
          } bg-[#374151] w-[125px] h-[28px] rounded-xl text-sm `}
        >
          {t("Get in touch")}
        </h1>

        <span className=" text-center max-w-[576px]">{t("contact desc")}</span>
      </div>

      <div
        className={`flex justify-center items-center flex-col md:gap-4 gap-2`}
      >
        <div className={`flex items-center gap-3 md:gap-5 text-[32px]`}>
          <CiMail className="md:w-[32px] md:h-[32px] w-[20px] h-[20px]" />

          <span className=" font-bold text-[16px] md:text-[32px]">
            mostafa.developer01@gmail.com
          </span>

          <div className={` relative`}>
            <IoCopyOutline
              onClick={handleTextCopy}
              className="md:w-[32px] md:h-[32px] w-[20px] h-[20px] cursor-pointer "
            />
            <div
              className={`${isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"} ${
                showTextCopy ? "opacity-100" : "opacity-0"
              } transition-all text-[16px] px-2 py-1 md:px-3 md:py-2 rounded-2xl z-10 text-nowrap text-center absolute ${
                lng == "en"
                  ? "right-[30px] md:right-[45px]"
                  : "left-[30px] md:left-[45px]"
              } top-[-6px] `}
            >
              text copied
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-3 md:gap-5 text-[32px]`}>
          <FiPhone className="md:w-[32px] md:h-[32px] w-[20px] h-[20px]" />

          <span className=" font-bold text-[16px] md:text-[32px]">
            +20 101 102 0236
          </span>

          <div className={` relative`}>
            <IoCopyOutline
              onClick={handlePhoneCopy}
              className="md:w-[32px] md:h-[32px] w-[20px] h-[20px] cursor-pointer "
            />
            <div
              className={`${isLight ? "bg-[#E5E7EB]" : "bg-[#374151]"} ${
                showPhoneCopy ? "opacity-100" : "opacity-0"
              } transition-all text-[16px] px-2 py-1 md:px-3 md:py-2 rounded-2xl z-10 text-nowrap text-center absolute ${
                lng == "en"
                  ? "right-[30px] md:right-[45px]"
                  : "left-[30px] md:left-[45px]"
              } top-[-6px] `}
            >
              text copied
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
