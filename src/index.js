import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styleSheets/index.css";
import App from "./App";
import { store } from "./Store/Store";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
// import { IntlProvider } from "react-intl";
// import enMessages from "./lang/en.json";
// import arMessages from "./lang/ar.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
