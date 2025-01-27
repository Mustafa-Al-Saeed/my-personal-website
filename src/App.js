import MainPage from "./MainPage";
import Header from "./Components/Shared/Header";
import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/Locales/{{lng}}/translation.json",
    },
  });

function App() {
  const { t } = useTranslation();
  const isLight = useSelector((state) => state.colorMode.isLight);

  if (isLight) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "#030712";
  }

  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
