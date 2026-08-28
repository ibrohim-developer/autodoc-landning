import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./app/router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import { initApp } from "./config/appSettings";

const App = () => {
  initApp();
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
};

export default App;
